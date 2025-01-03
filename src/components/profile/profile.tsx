'use client'

import './profile.scss'

import { FC } from 'react'

import Link from 'next/link'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setShowModal } from '@/store/reducers/modalSlice'
import {
	setPosition,
	setCountry,
	setRegion,
	setCity,
} from '@/store/reducers/contextSlice'

import Image from 'next/image'

import profileImg from '@/assets/icons/profile.png'

import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'
import UsualButton from '@/UI/buttons/usualButton/usualButton'
import CenterModal from '@/UI/modals/centerModal/centerModal'
import UsualInput from '@/UI/inputs/usualInput/usualInput'
import UsualTextarea from '@/UI/inputs/usualTextarea/usualTextarea'

import { useState, useEffect } from 'react'

import { api } from '@/services/recipeServices'

const Profile: FC = () => {
	const dispatch = useAppDispatch()
	const { showModal } = useAppSelector((state) => state.modalReducer)
	const { profile } = useAppSelector((state) => state.contextReducer)

	const [showNewsModal, setShowNewsModal] = useState(false)

	useEffect(() => {
		if (!showModal) {
			setShowNewsModal(false)
		}
	}, [showModal])

	const [newsTitle, setNewsTitle] = useState('')
	const [newsDescription, setNewsDescription] = useState('')

	const [createNews, {}] = api.useCreateNewsMutation()
	const createNewsHandler = async (
		newsTitle: string,
		newsDescription: string
	) => {
		if (newsTitle !== '' && newsDescription !== '') {
			const date = new Date().toISOString()
			await createNews({
				title: newsTitle,
				body: newsDescription,
				data_created: date,
				data_updated: date,
			})
			dispatch(setShowModal(false))
			setNewsTitle('')
			setNewsDescription('')
		}
	}

	const auth = sessionStorage.getItem('profile')

	const { position } = useAppSelector((state) => state.contextReducer)

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					dispatch(
						setPosition({
							latitude: position.coords.latitude,
							longitude: position.coords.longitude,
						})
					)
				},
				() => {
					console.error('Не удалось получить координаты.')
				}
			)
		} else {
			alert('Ваш браузер не поддерживает Geolocation API.')
		}
	}, [])

	const country = sessionStorage.getItem('country')
	const region = sessionStorage.getItem('region')
	const city = sessionStorage.getItem('city')

	useEffect(() => {
		if (country === null && region === null && city === null) {
			// Получаем IP-адрес через api.ipify.org
			fetch('https://api.ipify.org?format=json')
				.then((response) => response.json())
				.then((data) => {
					const userIp = data.ip
					// Используем ipinfo.io для получения данных о регионе
					fetch(`https://ipinfo.io/${userIp}/json`)
						.then((response) => response.json())
						.then((geoData) => {
							if (geoData.country) {
								dispatch(setCountry(geoData.country))
							}
							if (geoData.region) {
								dispatch(setRegion(geoData.region))
							}
							if (geoData.city) {
								dispatch(setCity(geoData.city))
							}
						})
						.catch((error) => {
							console.error('Ошибка при получении данных о геолокации:', error)
						})
				})
				.catch((error) => {
					console.error('Ошибка при получении IP-адреса:', error)
				})
		}
	}, [])

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
					<p className='profile__item description-text'>
						{position.latitude !== 0 && position.longitude !== 0
							? `Местоположение: ${position.latitude} ${position.longitude}`
							: 'Местоположение не определено'}
					</p>
					<p className='profile__item description-text'>
						{country !== null ? `Страна: ${country}` : 'Страна не определена'}
					</p>
					<p className='profile__item description-text'>
						{region !== null ? `Регион: ${region}` : 'Регион не определен'}
					</p>
					<p className='profile__item description-text'>
						{city !== null ? `Город: ${city}` : 'Город не определен'}
					</p>
					{!auth ? (
						<Link href='/authorization' className='profile__item'>
							<UsualButton>Написать новость</UsualButton>
						</Link>
					) : (
						<UsualButton
							onClick={() =>
								dispatch(setShowModal(true), setShowNewsModal(true))
							}
							className='profile__item'>
							Написать новость
						</UsualButton>
					)}
					<Link href='/' className='profile__item'>
						<AttractiveButton
							onClick={() => sessionStorage.removeItem('profile')}>
							Выйти из аккаунта
						</AttractiveButton>
					</Link>
				</div>
				{showModal && showNewsModal && (
					<CenterModal>
						<div className='modal'>
							<h2 className='title-text'>Написать новость</h2>
							<UsualInput
								placeholder='Напишите название новости'
								value={newsTitle}
								onChange={(e) => setNewsTitle(e.target.value)}
							/>
							<UsualTextarea
								placeholder='Напишите описание новости'
								value={newsDescription}
								onChange={(e) =>
									setNewsDescription(e.target.value)
								}></UsualTextarea>
							<UsualButton
								onClick={() => createNewsHandler(newsTitle, newsDescription)}
								className='modal__button'>
								Создать новость
							</UsualButton>
						</div>
					</CenterModal>
				)}
			</div>
		</>
	)
}

export default Profile
