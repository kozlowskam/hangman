import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { newGame, makeGuess } from './actions/game'
import { randomWord, showGuess, wrongGuessCount, isWinner,wrongGuessLimit } from './lib/game'
import NewGameButton from './components/NewGameButton';
import InputForm from './components/InputForm';
import Title from './components/Title';
import './App.css';

const word = randomWord();

class App extends Component {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }


   GameOver = () => {
    if (isWinner(this.props.word, this.props.guesses))
          return <div className="row"><h3 className="Title">YOU WON!</h3></div>
    if (wrongGuessLimit(this.props.word, this.props.guesses))
          return <div className="row"><h3 className="Title">You are not a GENIUS ...the answer was {this.props.word}</h3></div>
    if (wrongGuessCount(this.props.word, this.props.guesses) === 5)
          return <div className="row"><h3 className="Title">Think! You have 1 chance left!</h3>
          <InputForm /></div>
    else
          return <div className="row"><h3 className="Title">You have only 6 chances!</h3>
          <InputForm /></div>

      }



  render() {

    const { word, guess, guesses } = this.props
    console.log(this.props)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Welcome to HangMan</h1><img src="Hman_icon.png" className="App-logo" alt="" />
        </header>
    <NewGameButton />

<h1 className="Title">{ showGuess(this.props.word, this.props.guesses) }</h1>
<h2 className="Title">Wrong Guesses: {wrongGuessCount(this.props.word, this.props.guesses)} </h2>
<h2 className="Title">Your Guesses: {guesses.join(", ")}</h2>
<this.GameOver/>
      </div>
    );
  }
}

const mapStateToProps = state => {
return {
  word: state.word,
  guesses: state.guesses
}}

export default connect(mapStateToProps, { makeGuess, showGuess, wrongGuessCount })(App)
