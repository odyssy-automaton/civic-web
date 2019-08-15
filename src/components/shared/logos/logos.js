import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './logos.scss'

const NonStretchedImg = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: '0 auto', // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 500, quality: 100) {
        ...GatsbyImageSharpFluid
        presentationWidth
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      moovel: file(relativePath: { eq: "logos/moovel.png" }) {
        ...squareImage
      }
      omsi: file(relativePath: { eq: "logos/omsi.jpg" }) {
        ...squareImage
      }
      ocf: file(relativePath: { eq: "logos/ocf.jpg" }) {
        ...squareImage
      }
      city: file(relativePath: { eq: "logos/cityofportland.png" }) {
        ...squareImage
      }
      county: file(relativePath: { eq: "logos/multnomahcounty.png" }) {
        ...squareImage
      }
      gates: file(relativePath: { eq: "logos/gates.png" }) {
        ...squareImage
      }
    }
  `)
  return (
    <div className="LogosContainer">
      <p className="LogosThankYouText">
        <strong>Thank you to our partners!</strong>
      </p>
      <div className="Logos">
        <NonStretchedImg fluid={data.gates.childImageSharp.fluid} />
        <NonStretchedImg fluid={data.county.childImageSharp.fluid} />
        <NonStretchedImg fluid={data.city.childImageSharp.fluid} />
        <NonStretchedImg fluid={data.moovel.childImageSharp.fluid} />
        <NonStretchedImg fluid={data.ocf.childImageSharp.fluid} />
        <NonStretchedImg fluid={data.omsi.childImageSharp.fluid} />
      </div>
    </div>
  )
}
