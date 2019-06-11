import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class Mailchimp extends React.Component {
  state = {
    resultMessage: '',
    error: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(this.form);
    addToMailchimp(formData.get('EMAIL', 'FNAME', 'LNAME')).then((result) => {
      const newState = { resultMessage: result.msg.split('<a')[0] }
      this.setState({
        resultMessage: result.msg.split('<a')[0],
        error: result.result === 'error',
      })
      this.form.reset();
    });
  }
 
  render () {
    const resultMessage = this.state.error ? "error-message" : "success-message";

    return (
      <form onSubmit={this.handleSubmit} name="emailForm" ref={(el) => this.form = el} autoComplete="off">
        <input type="text" name="FNAME" placeholder="First Name" />
        <input type="text" name="LNAME" placeholder="Last Name" />
        <input type="text" name="EMAIL" placeholder="Email Address" />
        <button type="submit">Sign up</button>
        <div>
          <p className={resultMessage}>{this.state.resultMessage}</p>
        </div>
      </form>
    )
  }
}

export default Mailchimp