module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://gatsby-starter-clean-resume.netlify.com/`,
    name: `Clear Mind Mentoring`,
    role: `Software Developer`,
    email: `luke@thelightside.com`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/masoudkarimif/gatsby-starter-clean-resume",
      },
      { name: "linkedin", link: "https://linkedin.com" },
      { name: "facebook", link: "https://facebook.com" },
      { name: "twitter", link: "https://twitter.com" },
      { name: "instagram", link: "https://instagram.com" },
    ],
    about: `
      <p>The son of Jedi Knight Anakin Skywalker and Senator Padmé Amidala</p>
      `,
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "great-gatsby",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
		`gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `IBM Plex Mono`,
        ],
				display: 'swap'
      },
    },
  ],
}
