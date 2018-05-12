import { randomWord } from '../lib/game'

export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'


export const newGame = () => {
  return {
    type: 'NEW_GAME',
    payload: randomWord()
  }}


export const makeGuess = () => {
  return {
    type: 'MAKE_GUESS'
  }}
