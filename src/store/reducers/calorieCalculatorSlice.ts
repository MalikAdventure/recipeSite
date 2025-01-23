import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CalorieCalculatorState {
	gender: string
	age: number
	height: number
	weight: number
	activityLevel: number
	formula: string
}

const initialState: CalorieCalculatorState = {
	gender: 'female',
	age: 18,
	height: 180,
	weight: 60,
	activityLevel: 3,
	formula: 'harris',
}

export const calorieCalculatorSlice = createSlice({
	name: 'calorieCalculator',
	initialState,
	reducers: {
		setGender: (state, action: PayloadAction<string>) => {
			state.gender = action.payload
		},
		setAge: (state, action: PayloadAction<number>) => {
			state.age = action.payload <= 0 ? 1 : action.payload
		},
		setHeight: (state, action: PayloadAction<number>) => {
			state.height = action.payload <= 0 ? 1 : action.payload
		},
		setWeight: (state, action: PayloadAction<number>) => {
			state.weight = action.payload <= 0 ? 1 : action.payload
		},
		setActivityLevel: (state, action: PayloadAction<number>) => {
			state.activityLevel = action.payload
		},
		setFormula: (state, action: PayloadAction<string>) => {
			state.formula = action.payload
		},
	},
})

export const {
	setGender,
	setAge,
	setHeight,
	setWeight,
	setActivityLevel,
	setFormula,
} = calorieCalculatorSlice.actions
export default calorieCalculatorSlice.reducer
