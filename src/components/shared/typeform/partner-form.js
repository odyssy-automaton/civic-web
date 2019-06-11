import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'

class VolunteerForm extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="Typeform">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://demo.typeform.com/to/WVYtVF"
          hideHeaders
          hideFooter
          buttonText="Submit!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
        <button className="button" onClick={this.openForm} style={{ cursor: 'pointer' }}>
          Partner with us
        </button>
      </div>
    );
  }
}

export default VolunteerForm;