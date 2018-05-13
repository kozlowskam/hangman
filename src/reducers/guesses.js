import {NEW_GAME, MAKE_GUESS} from '../actions/game'

export default (state = [], action) => {
  switch (action.type) {


  case 'MAKE_GUESS' :
    return [...state, action.guess]

  case NEW_GAME :
    return []

  default:
    return state
  }}
