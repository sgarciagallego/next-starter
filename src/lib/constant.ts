export const siteConfig = {
  url:
    process.env.NODE_ENV === 'production'
      ? ''
      : 'http://localhost:3000',
  title: 'Next.js Starter',
  description: '',
};
