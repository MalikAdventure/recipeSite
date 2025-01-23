'use client'

import './calorieCalculator.scss'

import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import {
	setGender,
	setAge,
	setHeight,
	setWeight,
	setActivityLevel,
	setFormula,
} from '@/store/reducers/calorieCalculatorSlice'

import { useCalorieCalculation } from '@/utils/calorieCalculation/calorieCalculation'

const CalorieCalculator: FC = () => {
	const dispatch = useAppDispatch()
	const { age, height, weight, activityLevel } = useAppSelector(
		(state) => state.calorieCalculatorReducer
	)

	const calorieCalculationResult = useCalorieCalculation()

	return (
		<>
			<form>
				<h2 className='calorie-calculator__topic topic-text'>
					Калькулятор калорий
				</h2>
				<div className='calorie-calculator__box'>
					<h3 className='calorie-calculator__title title-text'>Выберите пол</h3>
					<p className='calorie-calculator__item description-text'>
						<input
							type='radio'
							name='gender'
							value='female'
							onChange={(e) => dispatch(setGender(e.target.value))}
							defaultChecked
						/>
						Женский
					</p>
					<p className='calorie-calculator__item description-text'>
						<input
							type='radio'
							name='gender'
							value='male'
							onChange={(e) => dispatch(setGender(e.target.value))}
						/>
						Мужской
					</p>
				</div>
				<div className='calorie-calculator__box'>
					<h3 className='calorie-calculator__title title-text'>
						Общая информация
					</h3>
					<p className='calorie-calculator__item description-text'>
						<input
							type='number'
							name='age'
							value={age}
							onChange={(e) => dispatch(setAge(Number(e.target.value)))}
						/>
						Возраст, лет
					</p>
					<p className='calorie-calculator__item description-text'>
						<input
							type='number'
							name='height'
							value={height}
							onChange={(e) => dispatch(setHeight(Number(e.target.value)))}
						/>
						Рост, см
					</p>
					<p className='calorie-calculator__item description-text'>
						<input
							type='number'
							name='weight'
							value={weight}
							onChange={(e) => dispatch(setWeight(Number(e.target.value)))}
						/>
						Вес, кг
					</p>
				</div>
				<div className='calorie-calculator__box'>
					<h3 className='calorie-calculator__title title-text'>
						Дневная активность
					</h3>
					<input
						type='range'
						name='activity'
						min='1'
						max='5'
						value={activityLevel}
						onChange={(e) => dispatch(setActivityLevel(Number(e.target.value)))}
					/>
					<p className='description-text'>
						{activityLevel === 1
							? 'Низкая'
							: activityLevel === 2
							? 'Умеренная'
							: activityLevel === 3
							? 'Средняя'
							: activityLevel === 4
							? 'Высокая'
							: 'Очень высокая'}
					</p>
				</div>
				<div className='calorie-calculator__box'>
					<h3 className='calorie-calculator__title title-text'>
						Формула расчета
					</h3>
					<p className='calorie-calculator__item description-text'>
						<input
							type='radio'
							name='formula'
							value='harris'
							defaultChecked
							onChange={(e) => dispatch(setFormula(e.target.value))}
						/>
						Харриса-Бенедикта
					</p>
					<p className='calorie-calculator__item description-text'>
						<input
							type='radio'
							name='formula'
							value='mifflin'
							onChange={(e) => dispatch(setFormula(e.target.value))}
						/>
						Миффлина-Сан Жеора
					</p>
				</div>
				<div className='topic-text'>{calorieCalculationResult}</div>
			</form>
		</>
	)
}

export default CalorieCalculator
