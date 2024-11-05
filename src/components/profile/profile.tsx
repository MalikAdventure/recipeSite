'use client'

import './profile.scss'

import { FC } from 'react'

import Link from 'next/link'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setShowModal } from '@/store/reducers/modalSlice'

import Image from 'next/image'

import profileImg from '@/assets/icons/profile.png'

import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'
import UsualButton from '@/UI/buttons/usualButton/usualButton'
import CenterModal from '@/UI/modals/centerModal/centerModal'

const Profile: FC = () => {
	const dispatch = useAppDispatch()
	const { showModal } = useAppSelector((state) => state.modalReducer)
	const { profile } = useAppSelector((state) => state.contextReducer)

	return (
		<>
			<div className='profile'>
				<Image src={profileImg} alt='profile' priority />
				<div className='profile__box'>
					<h2 className='profile__item title-text'>{profile.name}</h2>
					<p className='profile__item description-text'>{profile.email}</p>
					<p className='profile__item description-text'>
						Статус:{' '}
						<span>
							{profile.status === 'admin'
								? 'Администратор'
								: profile.status === 'user'
								? 'Пользователь'
								: 'Гость'}
						</span>
					</p>
					<UsualButton
						onClick={() => dispatch(setShowModal(true))}
						className='profile__item'>
						Написать новость
					</UsualButton>
					<Link href='/' className='profile__item'>
						<AttractiveButton
							onClick={() =>
								sessionStorage.removeItem('profile')
							}>
							Выйти из аккаунта
						</AttractiveButton>
					</Link>
				</div>
				{showModal && (
					<CenterModal>
						<div>
							<h2>Написать новость</h2>
							<p>Параметр 1</p>
							<p>Параметр 2</p>
							<p>Параметр 3</p>
							<p>Параметр 4</p>
							<p>Параметр 5</p>
						</div>
					</CenterModal>
				)}
			</div>
		</>
	)
}

export default Profile
