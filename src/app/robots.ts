import { siteConfig } from '@/lib/constant';

export default function robots() {
  return {
    rules: [{ userAgent: '*' }],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: `${siteConfig.url}`,
  };
}
