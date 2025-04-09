import path from 'node:path';
import { css } from '@linaria/core';
import NextImage, { type ImageProps } from 'next/image';
import sharp from 'sharp';

async function getImageMetadata(src: string) {
  const imagePath = path.join(process.cwd(), 'public', src);
  const sharpImage = sharp(imagePath);
  const metadata = await sharpImage.metadata();
  const placeholder = await sharpImage.resize(10).toBuffer();
  const base64 = placeholder.toString('base64');
  const blurDataURL = `data:image/png;base64,${base64}`;

  return {
    width: metadata.width,
    height: metadata.height,
    blurDataURL,
  };
}

export default async function Image({
  src,
  alt,
  ...rest
}: Omit<ImageProps, 'width' | 'height'> & {
  src: string;
  alt: string;
}) {
  const { width, height, blurDataURL } =
    await getImageMetadata(src);

  return (
    <NextImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      quality={100}
      placeholder='blur'
      blurDataURL={blurDataURL}
      className={styles}
      {...rest}
    />
  );
}

const styles = css`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;
