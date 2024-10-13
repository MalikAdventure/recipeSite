import './seasonalRecipe.scss'

import { FC } from 'react'

import HintButton from '@/UI/buttons/hintButton/hintButton'
import UsualSearch from '@/fragments/usualSearch/usualSearch'

import summerImg from '@/assets/imgs/summer.png'

const SeasonalRecipe: FC = () => {
	return (
		<>
			<div
				className='seasonal-recipe'
				style={{
					backgroundImage: `url(${summerImg.src})`,
				}}>
				<div className='seasonal-recipe__content'>
					<h2 className='seasonal-recipe__title title-text'>Солнечное лето</h2>
					<p className='seasonal-recipe__text description-text'>
						Блюда для летнего сезона
					</p>
					<HintButton className='seasonal-recipe__button'>Какой блюдо выбрать?</HintButton>
					<UsualSearch placeholder='Что вы хотите попробовать летом?' />
				</div>
			</div>
		</>
	)
}

export default SeasonalRecipe
