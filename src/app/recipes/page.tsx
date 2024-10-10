import { FC } from 'react'

import MainContainer from '@/container/mainContainer'

import Image from 'next/image'

const Recipes: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='container'>
					<h1>Тут типо рецепты</h1>
					<Image
						src='/src/assets/icons/english.png'
						alt='english'
						width={72}
						height={16}
					/>
					<Image
						src='/public/english.png'
						alt='english'
						width={72}
						height={16}
					/>
				</div>
			</MainContainer>
		</>
	)
}

export default Recipes
