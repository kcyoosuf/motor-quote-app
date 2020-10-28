import { UI } from '../actionConstants'

const initialState = {
  showLoader: false
}
export default function (state = initialState, action) {
  switch (action.type) {
    case UI.SHOW_LOADER:
      return {
        ...state,
        showLoader: true
      };
    case UI.HIDE_LOADER:
      return {
        ...state,
        showLoader: false
      };
    default:
      return state
  }
}