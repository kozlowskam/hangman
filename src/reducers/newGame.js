import {NEW_GAME} from '../actions/game'
import { randomWord } from '../lib/game'

const word = randomWord()

export default (state = word, action) => {
  switch (action.type) {
  case 'NEW_GAME':
    return action.payload

  default:
    return state
  }}
