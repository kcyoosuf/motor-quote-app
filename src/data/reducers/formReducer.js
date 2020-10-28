import { FORM } from '../actionConstants'

const initialState = {
  page: 1,
  formData: {
    customerName: "",
    email: "",
    mobileNumber: "",
    otp: "",
    vehicleMake: "",
    vehicleModel: "",
    variantType: "",
    mfgYear: "",
    vehicleValue: "",
    dob: "",
    licenseIssueDate: "",
    companyName: ""
  }
}
export default function (state = initialState, action) {
  switch (action.type) {
    case FORM.SET_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case FORM.SET_FORM_DATA:
      return {
        ...state,
        formData: { ...state.formData, ...action.payload }
      };
    case FORM.RESET_FORM_DATA:
      return {
        ...state,
        formData: initialState.formData
      };
    default:
      return state
  }
}