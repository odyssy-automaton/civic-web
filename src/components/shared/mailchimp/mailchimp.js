import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class Mailchimp extends React.Component {
  state = {
    resultMessage: '',
    error: false,
  }

  handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(this.form)
    const email = formData.get('EMAIL')
    const fields = {
      FNAME: formData.get('FNAME'),
      LNAME: formData.get('LNAME'),
    }
    console.log(email)
    console.log(fields)
    addToMailchimp(email, fields).then(result => {
      this.setState({
        resultMessage: result.msg.split('<a')[0],
        error: result.result === 'error',
      })
      this.form.reset()
    })
  }

  render() {
    const resultMessage = this.state.error ? 'error-message' : 'success-message'

    return (
      <form
        onSubmit={this.handleSubmit}
        name="emailForm"
        ref={el => (this.form = el)}
      >
        <div className="formGroup">
          <input
            autocomplete="given-name"
            id="fname"
            name="FNAME"
            type="text"
          />
          <label for="fname">First Name</label>
        </div>
        <div className="formGroup">
          <input
            autocomplete="family-name"
            id="lname"
            name="LNAME"
            type="text"
          />
          <label for="lname">Last Name</label>
        </div>
        <div className="formGroup">
          <input
            aria-describedby="email-error"
            aria-required="true"
            autocomplete="email"
            id="email"
            name="EMAIL"
            type="email"
          />
          <label for="email">
            Email Address<span aria-hidden="true"> (required)</span>
          </label>
          <div className="Result">
            <output className={resultMessage} id="email-error">
              {this.state.resultMessage}
            </output>
          </div>
        </div>
        <button formnovalidate="true" type="submit">
          Sign up
        </button>
      </form>
    )
  }
}

export default Mailchimp
