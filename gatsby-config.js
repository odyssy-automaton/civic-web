module.exports = {
  siteMetadata: {
    title: 'Civic Software Foundation',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Civic Software Foundation',
        short_name: 'Civic',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/civic-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
