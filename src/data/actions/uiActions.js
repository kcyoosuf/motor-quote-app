import { UI } from "../actionConstants"

export const loaderActions = {
	showLoader: () => {
		return { type: UI.SHOW_LOADER };
	},
	hideLoader: () => {
		return { type: UI.HIDE_LOADER };
	}
};