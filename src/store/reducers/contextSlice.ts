import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ContextState {
	contextPage: string
	profile: { name: string; email: string; status: string }
}

const initialState: ContextState = {
	contextPage: '',
	profile: JSON.parse(sessionStorage.getItem('profile') || '{}'),
}

export const contextSlice = createSlice({
	name: 'context',
	initialState,
	reducers: {
		setContextPage: (state, action: PayloadAction<string>) => {
			state.contextPage = action.payload
		},
		setProfile: (
			state,
			action: PayloadAction<{
				name: string
				email: string
				status: string
			}>
		) => {
			state.profile = action.payload
			sessionStorage.setItem('profile', JSON.stringify(state.profile))
		},
	},
})

export const { setContextPage, setProfile } = contextSlice.actions
export default contextSlice.reducer
