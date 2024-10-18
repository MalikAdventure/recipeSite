import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import CalorieCalculator from '@/components/calorieCalculator/calorieCalculator'

const Calculator: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<CalorieCalculator />
				</div>
			</MainContainer>
		</>
	)
}

export default Calculator
