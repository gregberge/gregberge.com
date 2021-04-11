/* eslint-env node */
const defaultSiteUrl = 'https://gregberge.com'

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = defaultSiteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

const isNetlifyProduction = NETLIFY_ENV === 'production'

const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    siteUrl,
    canonicalUrl: siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        topLevelImportPaths: ['@xstyled/styled-components'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Code Pro`, `Muli:400,400i,500,700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-copy-linked-files' },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              disableBgImageOnAlpha: true,
            },
          },
          { resolve: 'gatsby-remark-embedder' },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: '/',
        name: 'Greg Bergé',
        short_name: 'gregberge',
        description:
          'The personal website of Greg Bergé. Learn and level-up about React & JavaScript.',
        background_color: '#1f2347',
        theme_color: '#FFCC68',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
        // localize: [
        //   {
        //     start_url: '/fr/',
        //     lang: 'fr',
        //     name: 'Greg Bergé',
        //     short_name: 'gregberge',
        //     description:
        //       'Le site personnel de Greg Bergé. Apprenez et devenez meilleur en React et JavaScript.',
        //   },
        // ],
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154496255-1',
        anonymize: true,
      },
    },
  ],
}
