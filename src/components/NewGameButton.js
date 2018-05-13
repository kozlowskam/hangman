import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'
import './NewGameButton.css'


export class NewGameButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  newGameClick = () => {
    this.props.newGame()
  }

  render() {
    return (
      <button
        onClick={this.newGameClick}
        className="NewGameButton"> NEW GAME </button>
    )
  }
}


export default connect(null, { newGame })(NewGameButton)
