import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeGuess} from '../actions/game'




export class InputForm extends PureComponent {
  static propTypes = {
    makeGuess: PropTypes.func.isRequired,
    guess: PropTypes.string.isRequired,
  }
  
  handleSubmit = (event) => {
    if(event) event.preventDefault();
    const [input] = event.target.children
    //console.log(input.value);
    this.props.makeGuess(input.value)
    input.value = ""
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"/>
        <button className="button2">Submit Guess</button>
      </form>
    )
  }
}

export default connect(null, { makeGuess })(InputForm)
