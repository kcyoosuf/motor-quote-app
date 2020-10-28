import { combineReducers } from "redux"

import ui from './uiReducer'
import form from './formReducer'
const rootReducer = combineReducers({
  ui,
  form
});

export default rootReducer