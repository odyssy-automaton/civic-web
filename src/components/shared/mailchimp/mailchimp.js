import React, { useState, useRef } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

function Mailchimp() {
  const [resultMessage, setResultMessage] = useState('')
  const [error, setError] = useState(false)
  const [FNAME, setFNAME] = useState('')
  const [LNAME, setLNAME] = useState('')
  const [EMAIL, setEMAIL] = useState('')

  const resultMessageClass = error ? 'error-message' : 'success-message'

  const handleSubmit = e => {
    e.preventDefault()
    const email = EMAIL
    const fields = {
      FNAME: FNAME,
      LNAME: LNAME,
    }
    addToMailchimp(email, fields).then(result => {
      setResultMessage(result.msg.split('<a')[0])
      setError(result.result === 'error')
    })
  }

  return (
    <form onSubmit={handleSubmit} name="emailForm">
      <div className="formGroup">
        <input
          autoComplete="given-name"
          id="fname"
          name="FNAME"
          type="text"
          value={FNAME}
          onChange={event => setFNAME(event.target.value)}
          className={FNAME.length > 0 ? 'labelAbove' : ''}
        />
        <label htmlFor="fname">First Name</label>
      </div>
      <div className="formGroup">
        <input
          autoComplete="family-name"
          id="lname"
          name="LNAME"
          type="text"
          value={LNAME}
          onChange={event => setLNAME(event.target.value)}
          className={LNAME.length > 0 ? 'labelAbove' : ''}
        />
        <label htmlFor="lname">Last Name</label>
      </div>
      <div className="formGroup">
        <input
          aria-describedby="email-error"
          aria-required="true"
          autoComplete="email"
          aria-invalid={error}
          id="email"
          name="EMAIL"
          type="email"
          value={EMAIL}
          onChange={event => setEMAIL(event.target.value)}
          className={EMAIL.length > 0 ? 'labelAbove' : ''}
        />
        <label htmlFor="email">
          Email Address<span aria-hidden="true"> (required)</span>
        </label>
        <div className="Result">
          <output className={resultMessageClass} id="email-error">
            {resultMessage}
          </output>
        </div>
      </div>
      <button className="submitBtn" formNoValidate type="submit">
        <span className="buttonText">Sign up</span>
      </button>
    </form>
  )
}

export default Mailchimp
