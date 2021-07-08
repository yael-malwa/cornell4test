const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cornell',
  tagline: 'Record & replay mock server',
  url: 'https://hiredscorelabs.github.io/cornell/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'HiredScore inc.', // Usually your GitHub org/user name.
  projectName: 'cornell', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Cornell',
      logo: {
        alt: 'Cornell Logo',
        src: 'img/cornell.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'examples',
          position: 'left',
          label: 'Documentation',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'HiredScore',
          items: [
            {
              label: 'HiredScore Website',
              to: 'https://hiredscore.com',
            },
            {
              label: 'HiredScore Blog',
              to: 'https://blog.hiredscore.com/',
            },
            {
              label: 'HiredScore Engineering Blog',
              to: 'https://medium.com/hiredscore-engineering',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HiredScore, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
