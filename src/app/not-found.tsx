'use client'

import './not-found.scss'

import { FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import MainContainer from '@/container/mainContainer/mainContainer'
import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'

const NotFound: FC = () => {
	const { back } = useRouter()

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
					<AttractiveButton onClick={back}>Вернутся назад</AttractiveButton>
				</div>
			</MainContainer>
		</>
	)
}

export default NotFound
