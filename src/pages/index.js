import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import dataFlower from '../images/hero__test--data-flower.png'


import '../styles/global.scss';
import '../styles/home.scss';

class IndexPage extends React.Component {
  state = {
    open: false
  }

  openForm = () => {
    this.typeformEmbed.typeform.open();
  }

  render () {
    return (
  
    <Layout>
      <div className="Hero">
        <div className="Hero__Contents">
          <div className="Image"><img src={dataFlower} alt="data flower" /></div>
          <div className="Text">
            <div className="Circle"></div>
            <h5>Our Civic Duty</h5>
            <h2>Let's transform public information into public knowledge.</h2>
          </div>
          <div className="CTA--A"></div>
          <div className="CTA--B"></div>
        </div>
      </div>
      <div className="Intro Block">
        <div className="Block__Contents Contain">
          <p>We work to expose and understand public data to unlock actionable insights, empowering citizens to address real-world issues. This unprecedented civic/tech collaboration model is already having a lasting impact.</p>
          <p><strong>Together, we can inform people and policy.</strong></p>
          <button className="button" onClick={this.openForm}>Join Us</button>
          <ReactTypeformEmbed
            url={'https://ven386248.typeform.com/to/rEhanV'}
            popup={true}
            autoOpen={false}
            style={{height: '0%'}}
            ref={(tf => this.typeformEmbed = tf) }
          />
        </div>
      </div>
      <div className="Quote Block">
        <div className="Block__Contents Contain">
          <p>“When political will meets public imagination, the technology we can create is unlike anything the world has ever seen.”</p>
          <p>-Cat Nikolovski, Founder of CIVIC</p>
        </div>
      </div>
      <div className="Block">
        <div className="Block__Contents Contain">
          <div className="Grid">
            <div className="Grid__Column--50">
              <p>[image]</p>
            </div>
            <div className="Grid__Column--50">
              <h3>Be the public imagination</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <Link to="/page-2/">Build with us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Block">
        <div className="Block__Contents Contain">
          <div className="Grid">
          <div className="Grid__Column--50">
              <h3>Be the political will</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <Link to="/page-2/">Build with us</Link>
            </div>
            <div className="Grid__Column--50">
              <p>[image]</p>
            </div>
          </div>
        </div>
      </div>
      <div className="DemoDay Block">
        <div className="Block__Contents Contain">
          <h2>Demo Day</h2>
        </div>
      </div>
    </Layout>
    )
  }
}

export default IndexPage
