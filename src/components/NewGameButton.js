import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './NewGameButton.css'


export default class NewGameButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="NewGameButton" onClick={this.props.onClick}>NEW GAME</button>
    )
  }
}
