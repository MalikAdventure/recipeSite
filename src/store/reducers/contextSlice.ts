import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ContextState {
	contextPage: string
	profile: { name: string; email: string; status: string }
	position: { latitude: number; longitude: number }
	country: string | null
	region: string | null
	city: string | null
}

const initialState: ContextState = {
	contextPage: '',
	profile: JSON.parse(sessionStorage.getItem('profile') || '{}'),
	position: { latitude: 0, longitude: 0 },
	country: sessionStorage.getItem('country') || null,
	region: sessionStorage.getItem('region') || null,
	city: sessionStorage.getItem('city') || null,
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
		setPosition: (
			state,
			action: PayloadAction<{ latitude: number; longitude: number }>
		) => {
			state.position = action.payload
		},
		setCountry: (state, action: PayloadAction<string>) => {
			state.country = action.payload
			sessionStorage.setItem('country', state.country)
		},
		setRegion: (state, action: PayloadAction<string>) => {
			state.region = action.payload
			sessionStorage.setItem('region', state.region)
		},
		setCity: (state, action: PayloadAction<string>) => {
			state.city = action.payload
			sessionStorage.setItem('city', state.city)
		},
	},
})

export const {
	setContextPage,
	setProfile,
	setPosition,
	setCountry,
	setRegion,
	setCity,
} = contextSlice.actions
export default contextSlice.reducer
