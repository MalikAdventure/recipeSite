import './calorieCalculator.scss'

import { FC } from 'react'

const CalorieCalculator: FC = () => {
	return (
		<>
			<h2>Калькулятор калорий</h2>
			<form>
				<div>
					<h3>Выберите пол</h3>
					<p>
						<input type='checkbox' value='female' /> Женский
					</p>
					<p>
						<input type='checkbox' value='male' /> Мужской
					</p>
				</div>
				<div>
					<h3>Общая информация</h3>
					<p>
						Возраст, лет
						<input type='number' />
					</p>
					<p>
						Рост, см
						<input type='number' />
					</p>
					<p>
						Вес, кг
						<input type='number' />
					</p>
				</div>
				<div>
					<h3>Ваша цель</h3>
					<p>
						<input type='checkbox' /> Сбросить вес
					</p>
					<p>
						<input type='checkbox' /> Поддержать вес
					</p>
					<p>
						<input type='checkbox' /> Набрать вес
					</p>
				</div>
				<div>
					<h3>Формула расчета</h3>
					<p>
						<input type='checkbox' /> Харриса-Бенедикта
					</p>
					<p>
						<input type='checkbox' /> Миффлина-Сан Жеора
					</p>
				</div>
				<button>Отправить</button>
			</form>
		</>
	)
}

export default CalorieCalculator
