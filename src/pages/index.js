import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import Video from "../components/shared/video/video"
import dataFlower from '../images/hero__test--data-flower.png'
import humanGrid from '../images/human-grid-test.png'


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
        <div className="Image" style={{backgroundImage: 'url(' + dataFlower + ')', backgroundColor: '#fff'}}></div>
        <div className="Hero__Contents">
          <div className="Text--A">
            <div className="Circle"></div>
            <h5>Our Civic Duty</h5>
            <h2>Let's transform public information into public knowledge.</h2>
            <div className="Text--B">
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
          <div className="CTA--A"></div>
          <div className="CTA--B"></div>
        </div>
      </div>
      <div className="Quote Block">
        <div className="Block__Contents Contain">
          <h3>When political will meets public imagination, the technology we can create is unlike anything the world has ever seen.</h3>
          <p className="Attribution">-Cat Nikolovski, Founder of CIVIC</p>
        </div>
      </div>
      <div className="Block Volunteers">
        <div className="Block__Contents Contain">
          <div className="Grid">
            <div className="Grid__Column--50">
              <p><img src={humanGrid} alt="civic humans" /></p>
            </div>
            <div className="Grid__Column--50 Text">
              <h3>Be the public imagination</h3>
              <p>From designers, to developers, to data scientists and beyond—we’re building a talented, cross-disciplinary team of nationwide collaborators intent on re-imagining the state of information in the United States.</p>
              <button className="button" onClick={this.openForm}>Join a Civic Team</button>
              <ReactTypeformEmbed
                url={'https://ven386248.typeform.com/to/rEhanV'}
                popup={true}
                autoOpen={false}
                style={{height: '0%'}}
                ref={(tf => this.typeformEmbed = tf) }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Block Cities">
        <div className="Block__Contents Contain">
          <div className="Grid">
          <div className="Grid__Column--50 Text">
              <h3>Be the political will</h3>
              <p>Armed with data and the ability to put it to work, we’re looking for cities with challenges that better information can help overcome.</p>
              <button className="button" onClick={this.openForm}>Bring us your challenge</button>
              <ReactTypeformEmbed
                url={'https://ven386248.typeform.com/to/rEhanV'}
                popup={true}
                autoOpen={false}
                style={{height: '0%'}}
                ref={(tf => this.typeformEmbed = tf) }
              />
            </div>
            <div className="Grid__Column--50">
              <p><img src={humanGrid} alt="civic humans" /></p>
            </div>
          </div>
        </div>
      </div>
      <div className="Block CivicMethod">
        <div className="Block__Contents Contain">
          <div className="Grid">
          <div className="Grid__Column--50">
              <h2>Technology, as if politics and profit didn’t matter.</h2>
            </div>
            <div className="Grid__Column--50">
              <p>Cities have some of the world’s most valuable data. The problem? It’s raw, nearly indecipherable, and hardly utilized. But, it’s our data. The CIVIC Method is built on the belief that cities can become the leaders of the next generation of innovators.</p> 
              <p><strong>We’re building the teams and systems that make it happen.</strong></p>
            </div>
          </div>
        </div>
      </div>
      <div className="DemoDay Block">
        <div className="Block__Contents Contain">
          <h2>See the action live on Demo Day</h2>
          <p>This year’s CIVIC team has been working for six months to debut a set of exciting new projects.</p>
          <p><strong>Join us for a live demo, product launch, and annual celebration August 29th in Portland, Oregon.</strong></p>
          <button className="button" href="https://hackoregon.org">Event Details</button>
          <h4>Here’s a sneak peek inside the sprint toward to Demo Day.</h4>
          <Video
            videoSrcURL="https://youtu.be/dDNrQ4o4fbg"
            videoTitle="Official Music Video on YouTube"
          />
        </div>
      </div>
      <div className="Email Block">
        <div className="Block__Contents Contain">
          <h2>Let's be email friends</h2>
          <p>With the promise to never bore or annoy </p>
        </div>
      </div>
      <div className="Footer Block">
        <div className="Block__Contents Contain">
          <h6>© 2019 Civic Software Foundation.</h6>
        </div>
      </div>
    </Layout>
    )
  }
}

export default IndexPage
