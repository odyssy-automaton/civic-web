import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './team.scss'

const team = [
  {
    emailPrefix: 'cat',
    name: 'Catherine Nikolovski',
    title: 'Executive Director',
  },
  {
    emailPrefix: 'dwayne',
    name: 'Dwayne Johnson',
    title: 'Deputy Director',
  },
  {
    emailPrefix: 'michael',
    name: 'Michael Lange',
    title: 'Chief Technology Officer',
  },
  {
    emailPrefix: 'jaron',
    name: 'Jaron Heard',
    title: 'Creative Director',
  },
  {
    emailPrefix: 'ashley',
    name: 'Ashley Kennedy',
    title: 'Director of Partnerships',
  },
  {
    emailPrefix: 'amy',
    name: 'Amy Thebarge',
    title: 'Director of Event Production',
  },
  {
    emailPrefix: 'dianna',
    name: 'Dianna Faulk',
    title: 'Participatory Design Engineer',
  },
  {
    emailPrefix: 'rachael',
    name: 'Rachael Haigh',
    title: 'Grant Coordinator',
  },
]

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

const TeamMember = props => {
  return (
    <div className="TeamMember">
      <NonStretchedImg alt={props.member.name} {...props} />
      <a
        href={`mailto:${props.member.emailPrefix}@civicsoftwarefoundation.org`}
      >
        <strong>{props.member.name}</strong>
      </a>
      <div>
        <small>{props.member.title}</small>
      </div>
    </div>
  )
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

export default ({ showTitle = true }) => {
  const data = useStaticQuery(graphql`
    query TeamImageQuery {
      cat: file(
        relativePath: { eq: "team/cat@civicsoftwarefoundation.org.jpg" }
      ) {
        ...squareImage
      }
      michael: file(
        relativePath: { eq: "team/michael@civicsoftwarefoundation.org.jpg" }
      ) {
        ...squareImage
      }
      jaron: file(
        relativePath: { eq: "team/jaron@civicsoftwarefoundation.org.jpg" }
      ) {
        ...squareImage
      }
      dwayne: file(
        relativePath: { eq: "team/dwayne@civicsoftwarefoundation.org.jpg" }
      ) {
        ...squareImage
      }
      dianna: file(
        relativePath: { eq: "team/dianna@civicsoftwarefoundation.org.jpg" }
      ) {
        ...squareImage
      }
      ashley: file(
        relativePath: { eq: "team/ashley@civicsoftwarefoundation.org.jpg" }
      ) {
        ...squareImage
      }
      amy: file(
        relativePath: { eq: "team/amy@civicsoftwarefoundation.org.jpg" }
      ) {
        ...squareImage
      }
      rachael: file(
        relativePath: { eq: "team/rachael@civicsoftwarefoundation.org.jpg" }
      ) {
        ...squareImage
      }
    }
  `)
  return (
    <div className="TeamContainer">
      {showTitle && (
        <h3 className="TeamText">
          <strong>Team</strong>
        </h3>
      )}
      <div className="Team">
        {team.map(member => (
          <TeamMember
            member={member}
            fluid={data[member.emailPrefix].childImageSharp.fluid}
          />
        ))}
      </div>
    </div>
  )
}
