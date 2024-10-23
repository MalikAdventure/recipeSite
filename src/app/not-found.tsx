import './not-found.scss'

import { FC } from 'react'

import Link from 'next/link'

import MainContainer from '@/container/mainContainer/mainContainer'
import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'

const notFound: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<h1 className='not-found__title topic-text'>Такой страницы нет</h1>
					<p className='not-found__text description-text'>
						Вы зашли на не существующую страницу или перешли по неправильной
						ссылке
						<br />В любом случае здесь вам делать нечего
					</p>
					<Link href='/' className='not-found__button'>
						<AttractiveButton>Перейти на главную</AttractiveButton>
					</Link>
				</div>
			</MainContainer>
		</>
	)
}

export default notFound
