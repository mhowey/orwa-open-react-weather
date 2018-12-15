import React from 'react'

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.loadingMessage}</div>
    </div>
  )
}

Spinner.defaultProps = {
  loadingMessage: 'Loading...'
}

export default Spinner
