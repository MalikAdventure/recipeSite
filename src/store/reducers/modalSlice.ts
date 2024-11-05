import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
	showModal: boolean
}

const initialState: ModalState = {
	showModal: false,
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setShowModal: (state, action: PayloadAction<boolean>) => {
			state.showModal = action.payload
		},
	},
})

export const { setShowModal } = modalSlice.actions
export default modalSlice.reducer
