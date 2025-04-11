import { css } from '@linaria/core';
import type { ReactElement, ReactNode } from 'react';
import { Children, isValidElement } from 'react';
import { clsx } from 'utils/helpers';

export default function List({
  as: Component = 'ul',
  direction = 'row',
  marker = false,
  children,
}: {
  as?: 'ul' | 'ol';
  direction?: 'row' | 'column';
  marker?: boolean;
  children: ReactElement<'li'> | ReactElement<'li'>[];
}) {
  Children.forEach(children as ReactNode, (child) => {
    if (isValidElement(child) && child.type !== 'li') {
      throw new Error(
        'List children must be a valid React element of type "li".'
      );
    }
  });

  const isNum = Component === 'ol';

  return (
    <Component
      className={clsx(
        styles,
        direction === 'row' ? directionRow : directionColumn,
        marker && (isNum ? addNumMarker : addMarker)
      )}
    >
      {children}
    </Component>
  );
}

const styles = css`
  list-style: none;
`;

const directionRow = css`
  display: flex;
  gap: 1rem;
`;

const directionColumn = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const addMarker = css`
  list-style: disc;
  padding-inline-start: 1.5rem;
`;

const addNumMarker = css`
  list-style: decimal;
  padding-inline-start: 1.5rem;
`;
