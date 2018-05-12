import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { newGame, makeGuess } from './actions/game'
import { randomWord, showGuess, wrongGuessCount } from './lib/game'
import NewGameButton from './components/NewGameButton';
import Title from './components/Title';
import './App.css';

const word = randomWord();

class App extends Component {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  ClickLetter = () => {
    this.props.makeGuess()
    }

  ClickLetterA =() => {
   this.props.makeGuess('a')
 }
 ClickLetterB =() => {
  this.props.makeGuess('b')
}

  NewGameClick = () => {
    this.props.newGame()
}

  render() {

    const { word, guess, guesses } = this.props
    console.log(this.props)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Welcome to HangMan</h1>
        </header>
      <div className="row">
        <button onClick={this.ClickLetterA}>A</button>
        <button onClick={this.ClickLetterB}>B</button>
        <button onClick={this.ClickLetter}>C</button>
        <button onClick={this.ClickLetter}>D</button>
        <button onClick={this.ClickLetter}>E</button>
        <button onClick={this.ClickLetter}>F</button>
        <button onClick={this.ClickLetter}>G</button>
        <button onClick={this.ClickLetter}>H</button>
        <button onClick={this.ClickLetter}>I</button>
        <button onClick={this.ClickLetter}>J</button></div>
     <div className="row">
        <button onClick={this.ClickLetter}>K</button>
        <button onClick={this.ClickLetter}>L</button>
        <button onClick={this.ClickLetter}>M</button>
        <button onClick={this.ClickLetter}>N</button>
        <button onClick={this.ClickLetter}>O</button>
        <button onClick={this.ClickLetter}>P</button>
        <button onClick={this.ClickLetter}>Q</button>
        <button onClick={this.ClickLetter}>R</button>
        <button onClick={this.ClickLetter}>S</button>
        <button onClick={this.ClickLetter}>T</button></div>
     <div className="row">
     <label onClick={this.ClickLetter}><input name="guess" value="a"/> A</label>
  <label><input type="radio" name="letter" value="b"/> B</label>
  <label><input type="radio" name="letter" value="c"/> C</label>
        <button onClick={this.ClickLetter}>U</button>
        <button onClick={this.ClickLetter}>V</button>
        <button onClick={this.ClickLetter}>W</button>
        <button onClick={this.ClickLetter}>X</button>
        <button onClick={this.ClickLetter}>Y</button>
        <button onClick={this.ClickLetter}>Z</button></div>
    <NewGameButton onClick={this.NewGameClick}/>

<h1>{ showGuess(this.props.word, this.props.guesses) }</h1>
<h1>Wrong Guess Count: {wrongGuessCount(this.props.word, this.props.guesses)}</h1>
<h1>Guesses: {guesses.join(", ")}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
return {
  word: state.word,
  guesses: state.guesses
}}

export default connect(mapStateToProps, { newGame, makeGuess, showGuess })(App)
