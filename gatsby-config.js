module.exports = {
  siteMetadata: {
    title: 'Odyssy Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'odyssy',
        short_name: 'odyssy',
        start_url: '/',
        background_color: '#f4e659',
        theme_color: '#261c46',
        display: 'minimal-ui',
        icon: 'src/images/odyssy-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
