export function manageFriends(
  state = {friends: []}, action){

  switch(action.type){
    case 'ADD_FRIEND':
      return Object.assign({}, state, ???)
    case 'REMOVE_FRIEND':
      return state
  }


}
