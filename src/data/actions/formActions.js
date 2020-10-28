import { FORM } from '../actionConstants'
import { loaderActions } from './uiActions'
export const setPage = page => dispatch => {
  dispatch(loaderActions.showLoader())
  dispatch({ type: FORM.SET_PAGE, payload: page })
  
  // Just for showing a loader
  setTimeout(() => {
    dispatch(loaderActions.hideLoader())
  }, 500);


}

export const setFormData = formData => {
  return { type: FORM.SET_FORM_DATA, payload: formData }
}

export const resetFormData = () => {
  return { type: FORM.RESET_FORM_DATA }
}