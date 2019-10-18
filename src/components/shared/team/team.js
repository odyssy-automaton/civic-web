import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './team.scss'

const team = [
  {
    emailPrefix: 'cat',
    name: 'Catherine Nikolovski',
    title: 'Executive Director',
    pictured: true,
  },
  {
    emailPrefix: 'michael',
    name: 'Michael Lange',
    title: 'Chief Technology Officer',
    pictured: true,
  },
  {
    emailPrefix: 'jaron',
    name: 'Jaron Heard',
    title: 'Creative Director',
    pictured: true,
  },
  {
    emailPrefix: 'dwayne',
    name: 'Dwayne Johnson',
    title: 'Deputy Director',
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
  {
    emailPrefix: 'nathan',
    name: 'Nathan Miller',
    title: 'Executive Producer, CIVIC Sandbox',
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

const TeamMemberText = props => {
  return (
    <div className="TeamMember">
      <a
        href={`mailto:${props.member.emailPrefix}@civicsoftwarefoundation.org`}
      >
        <strong>{props.member.name}</strong>
      </a>
      <div>
        <small>{props.member.title}</small>
      </div>
      {props.member.pictured ? <div>📸</div> : null}
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
      team: file(relativePath: { eq: "team/team.jpg" }) {
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
          <TeamMemberText member={member} />
        ))}
      </div>
    </div>
  )
}
