import React from 'react'
import { Link } from 'gatsby'
import { ReactTypeformEmbed } from 'react-typeform-embed'

import Layout from '../components/layout/layout'

import '../styles/global.scss';



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
      <div className="Block">
        <div className="Contents">
          <h1>Civic Software Foundation</h1>
          <p>Welcome.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </div>
      <div className="Block">
        <div className="Contents">
          <h2>Block #2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
      <div className="Block">
        <div className="Contents">
          <h2>Block #3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="Grid">
            <div className="Grid__Column--33">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <Link to="/page-2/">Go to page 2</Link>
            </div>
            <div className="Grid__Column--33">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <Link to="/page-2/">Go to page 2</Link>
            </div>
            <div className="Grid__Column--33">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <Link to="/page-2/">Go to page 2</Link>
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
    )
  }
}

export default IndexPage
