import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Mailchimp from '../components/shared/mailchimp/mailchimp'
import Video from "../components/shared/video/video"
import dataFlower from '../images/hero__test--data-flower.png'
import humanGrid1 from '../images/human-grid-test.png'
import humanGrid2 from '../images/human-grid-test2.png'
import VolunteerForm from '../components/shared/typeform/volunteer-form'
import PartnerForm from '../components/shared/typeform/partner-form'


import '../styles/global.scss';
import '../styles/home.scss';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
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
              <p>Cities have some of the world’s most valuable data. The problem? It’s raw, nearly indecipherable, and hardly utilized. But, it’s our data. The CIVIC Method is built on the belief that cities can become the leaders of the next generation of innovators.</p> 
              <p><strong>We’re building the teams and systems that make it happen.</strong></p>
              <div className="CTA--A"><Link className="button" to="#volunteers">Build with us</Link></div>
              <div className="CTA--B"><Link className="button" to="#cities">Partner with us</Link></div>
            </div>
          </div>
        </div>
      </div>
      <div className="Quote Block">
        <div className="Block__Contents Contain">
          <h3>When political will meets public imagination, the technology we can create is unlike anything the world has ever seen.</h3>
          <p className="Attribution">-Cat Nikolovski, Founder of CIVIC</p>
        </div>
      </div>
      <div className="Block Volunteers" id="volunteers">
        <div className="Block__Contents Contain">
          <div className="Grid">
            <div className="Grid__Column--50">
              <p><img src={humanGrid1} alt="civic humans" /></p>
            </div>
            <div className="Grid__Column--50 Text">
              <h3>Be the public imagination</h3>
              <p>From designers, to developers, to data scientists and beyond—we’re building a talented, cross-disciplinary team of nationwide collaborators intent on re-imagining the state of information in the United States.</p>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </div>
      <div className="Block Cities" id="cities">
        <div className="Block__Contents Contain">
          <div className="Grid">
          <div className="Grid__Column--50 Text">
              <h3>Be the political will</h3>
              <p>With data and the ability to put it to work, we’re looking for cities with opportunities that better information can help overcome.</p>
              <PartnerForm />
            </div>
            <div className="Grid__Column--50">
              <p><img src={humanGrid2} alt="civic humans" /></p>
            </div>
          </div>
        </div>
      </div>
      <div className="DemoDay Block">
        <div className="Block__Contents Contain">
          <h2>See the action live on Demo Day</h2>
          <p>This year’s CIVIC team has been working for six months to debut a set of exciting new projects. Join us for a live demo, product launch, and annual celebration September 11th in Portland, Oregon.</p>
          <p><strong>Tickets are free, but sell out fast!</strong></p>
          <Link className="button" to="#signup">Be the first to know</Link>
          <h4>Here’s a sneak peek inside the sprint towards Demo Day.</h4>
          <Video
            videoSrcURL="https://www.youtube.com/embed/LpWqIdM6cQo"
            videoTitle="Demo Day Hype!"
          />
        </div>
      </div>
      <div className="Email Block" id="signup">
        <div className="Block__Contents Contain">
          <h2>Let's be email friends</h2>
          <p>With the promise to never bore or annoy </p>
          <Mailchimp />
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
