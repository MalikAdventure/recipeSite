import './profile.scss'

import { FC } from 'react'

import Image from 'next/image'

import profileImg from '@/assets/icons/profile.png'

import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'
import UsualButton from '@/UI/buttons/usualButton/usualButton'

const Profile: FC = () => {
	return (
		<>
			<div className='profile'>
				<Image src={profileImg} alt='profile' priority />
				<div className='profile__box'>
					<h2 className='profile__item title-text'>ФИО</h2>
					<p className='profile__item description-text'>Логин</p>
					<p className='profile__item description-text'>
						Статус: <span>Администратор</span>
					</p>
					<UsualButton className='profile__item'>Написать новость</UsualButton>
					<AttractiveButton className='profile__item'>
						Выйти из аккаунта
					</AttractiveButton>
				</div>
			</div>
		</>
	)
}

export default Profile
