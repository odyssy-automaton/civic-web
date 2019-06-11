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
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://hackoregon.us3.list-manage.com/subscribe/post?u=6bed8811c700af6cf48dfe893&amp;id=b11a78686d', // add your MC list endpoint here; see instructions below
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
