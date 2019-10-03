import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class Mailchimp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resultMessage: '',
      error: false,
      FNAME: '',
      LNAME: '',
      EMAIL: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(this.form)
    const email = formData.get('EMAIL')
    const fields = {
      FNAME: formData.get('FNAME'),
      LNAME: formData.get('LNAME'),
    }
    console.log(`fields is ${formData.get('EMAIL')}`)
    addToMailchimp(email, fields).then(result => {
      this.setState({
        resultMessage: result.msg.split('<a')[0],
        error: result.result === 'error',
      })
      this.form.reset()
    })
  }

  handleInputChange(event) {
    console.log(event)
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    const resultMessage = this.state.error ? 'error-message' : 'success-message'
    if (this.state.error) {
      console.log('erroe')
    }

    return (
      <form
        onSubmit={this.handleSubmit}
        name="emailForm"
        ref={el => (this.form = el)}
      >
        <div className="formGroup">
          <input
            autoComplete="given-name"
            id="fname"
            name="FNAME"
            type="text"
            value={this.state.FNAME}
            onChange={this.handleInputChange}
          />
          <label htmlFor="fname">First Name</label>
        </div>
        <div className="formGroup">
          <input
            autoComplete="family-name"
            id="lname"
            name="LNAME"
            type="text"
            value={this.state.LNAME}
            onChange={this.handleInputChange}
          />
          <label htmlFor="lname">Last Name</label>
        </div>
        <div className="formGroup">
          <input
            aria-describedby="email-error"
            aria-required="true"
            autoComplete="email"
            id="email"
            name="EMAIL"
            type="email"
            value={this.state.EMAIL}
            onChange={this.handleInputChange}
          />
          <label htmlFor="email">
            Email Address<span aria-hidden="true"> (required)</span>
          </label>
          <div className="Result">
            <output className={resultMessage} id="email-error">
              {this.state.resultMessage}
            </output>
          </div>
        </div>
        <button formNoValidate type="submit">
          <span className="buttonText">Sign up</span>
        </button>
      </form>
    )
  }
}

export default Mailchimp
