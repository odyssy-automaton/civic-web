import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'


class TypeformVolunteer extends React.Component {
    state = {
      open: false
    }
  
    openForm = () => {
      this.typeformEmbed.typeform.open();
    }

    render () {
        return (
        <ReactTypeformEmbed
            url={'https://ven386248.typeform.com/to/rEhanV'}
            popup={true}
            autoOpen={false}
            style={{height: '0%'}}
            ref={(tf => this.typeformEmbed = tf) }
        />
  )
}
}

export default TypeformVolunteer