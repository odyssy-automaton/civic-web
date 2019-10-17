import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Mailchimp from '../components/shared/mailchimp/mailchimp'
import Video from '../components/shared/video/video'
import Logos from '../components/shared/logos/logos'
import Team from '../components/shared/team/team'
import dataFlower from '../images/hero__data-flower-venn-circle.png'
import humanGrid1 from '../images/human-grid-test.png'
import humanGrid2 from '../images/human-grid-test2.png'
import team from '../images/team/team.jpg'
import VolunteerForm from '../components/shared/typeform/volunteer-form'
import PartnerForm from '../components/shared/typeform/partner-form'
import TicketsForm from '../components/shared/typeform/tickets-form'

import '../styles/global.scss'
import '../styles/home.scss'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.openForm = this.openForm.bind(this)
  }

  openForm() {
    this.typeformEmbed.typeform.open()
  }

  render() {
    return (
      <Layout>
        <div className="Hero">
          <div
            className="Image"
            style={{
              backgroundImage: 'url(' + dataFlower + ')',
              backgroundColor: '#fff',
            }}
          />
          <div className="Hero__Contents">
            <div className="Text--A">
              <div className="Circle" />
              <h5>The Civic Method</h5>
              <h2>
                We bring data science, modern tech, and civic willpower together
                to create a force for public good.
              </h2>
              <div className="Text--B">
                <p>
                  Cities have some of the world’s most valuable data. The
                  problem? It’s raw, nearly indecipherable, and hardly utilized.
                  But, it’s our data. The CIVIC Method is built on the belief
                  that cities can become the leaders of the next generation of
                  innovators.
                </p>
                <p>
                  <strong>
                    We’re building the teams and systems that make it happen.
                  </strong>
                </p>
                <div className="CTA--A">
                  <Link className="button" to="#volunteers">
                    Build with us
                  </Link>
                </div>
                <div className="CTA--B">
                  <Link className="button" to="#cities">
                    Partner with us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Quote Block">
          <div className="Block__Contents Contain">
            <h3>
              When political will meets public imagination, the technology we
              can create is unlike anything the world has ever seen.
            </h3>
            <p className="Attribution">-Cat Nikolovski, Founder of CIVIC</p>
          </div>
        </div>
        <div className="Block Volunteers" id="volunteers">
          <div className="Block__Contents Contain">
            <div className="Grid">
              <div className="Grid__Column--50">
                <p>
                  <img src={humanGrid1} alt="civic humans" />
                </p>
              </div>
              <div className="Grid__Column--50 Text">
                <h3>Be the public imagination</h3>
                <p>
                  From designers, to developers, to data scientists and
                  beyond—we’re building talented, cross-disciplinary teams of
                  nationwide collaborators intent on re-imagining the state of
                  information in the United States.
                </p>
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
                <p>
                  Our collaborative model is optimized for agility, rapid
                  procurement, and results. We’re looking for cities with
                  complex problems who want to put tech to work for them.
                </p>
                <PartnerForm />
              </div>
              <div className="Grid__Column--50">
                <p>
                  <img src={humanGrid2} alt="civic humans" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Email Block" id="signup">
          <div className="Block__Contents Contain">
            <h2>Let's be email friends</h2>
            <p>With the promise to never bore or annoy </p>
            <Mailchimp />
          </div>
        </div>
        <div className="Block Volunteers" id="team">
          <div className="Block__Contents Contain">
            <div className="Grid">
              <div className="Grid__Column--50">
                <p>
                  <img src={team} alt="team photo" />
                </p>
              </div>
              <div className="Grid__Column--50 Text">
                <Team />
              </div>
            </div>
          </div>
        </div>
        <div className="DemoDay Block" id="contact">
          <div className="Block__Contents Contain">
            <div className="Grid">
              <div className="Grid__Column--100 Text">
                <h3>Contact</h3>
                <a href="mailto:hi@civicsoftwarefoundation.org">
                  hi@civicsoftwarefoundation.org
                </a>
                <br />
                <br />
                <div className="ContactLocations">
                  <div>
                    <h5>Creative + Tech HQ</h5>
                    <ul className="List">
                      <li>Portland, OR</li>
                      <li>
                        <a href="tel:5033839131">+1-503-383-9131‬</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5>Business + Gov HQ</h5>
                    <ul className="List">
                      <li>Washington, DC</li>
                      <li>
                        <a href="tel:12026641223">+1-202-664-1223</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="Footer Block">
          <div className="Block__Contents Contain">
            <p className="copyright h6">
              &copy; 2019 Civic Software Foundation.
            </p>
          </div>
        </footer>
      </Layout>
    )
  }
}

export default IndexPage
