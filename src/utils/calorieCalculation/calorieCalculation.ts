import { useAppSelector } from '@/hooks/redux'

interface IBmrConstants {
	[key: string]: number[]
}

export const useCalorieCalculation = () => {
	const { gender, age, height, weight, activityLevel, formula } =
		useAppSelector((state) => state.calorieCalculatorReducer)

	const coefficientsActivity = [1.2, 1.375, 1.55, 1.725, 1.9]

	const bmrConstants: IBmrConstants = {
		female: [447.593, 9.247, 3.098, 4.33, -161],
		male: [88.362, 13.397, 4.799, 5.677, 5],
	}

	const BMR =
		formula === 'harris'
			? bmrConstants[gender][0] +
			  bmrConstants[gender][1] * weight +
			  bmrConstants[gender][2] * height -
			  bmrConstants[gender][3] * age
			: 10 * weight + 6.25 * height - 5 * age + bmrConstants[gender][4]

	return `${(BMR * coefficientsActivity[activityLevel - 1]).toFixed(0)} кКал`
}
