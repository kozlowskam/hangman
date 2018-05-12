
export default (state = [], action, guess) => {
  switch (action.type) {


  case 'MAKE_GUESS' :
    return state.concat(guess)

  default:
    return state
  }}
