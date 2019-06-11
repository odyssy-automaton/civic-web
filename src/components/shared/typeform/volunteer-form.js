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
        <button className="button" onClick={this.openForm} style={{ cursor: 'pointer' }}>
          Build with us
        </button>
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://demo.typeform.com/to/rEhanV"
          hideHeaders
          hideFooter
          buttonText="Submit!"
          style={{height: '0%'}}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
      </div>
    );
  }
}

export default VolunteerForm;