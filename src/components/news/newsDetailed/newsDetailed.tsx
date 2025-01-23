'use client'

import './newsDetailed.scss'

import { FC } from 'react'
import { INews } from '@/types/INews'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setShowModal } from '@/store/reducers/modalSlice'

import Spinner from '@/UI/preloaders/spinner/spinner'
import CenterModal from '@/UI/modals/centerModal/centerModal'
import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'
import UsualButton from '@/UI/buttons/usualButton/usualButton'
import UsualInput from '@/UI/inputs/usualInput/usualInput'
import UsualTextarea from '@/UI/inputs/usualTextarea/usualTextarea'

import noneImg from '@/assets/imgs/none.png'

import { useState, useEffect } from 'react'

import { api } from '@/services/recipeServices'

const NewsDetailed: FC = () => {
	const params = useParams()

	const { data, isLoading, isFetching, error } = api.useGetNewsByIdQuery(
		params.id
	)

	const { back } = useRouter()

	const auth = sessionStorage.getItem('profile')

	const dispatch = useAppDispatch()
	const { showModal } = useAppSelector((state) => state.modalReducer)
	const [showNewsModal, setShowNewsModal] = useState(false)

	useEffect(() => {
		if (!showModal) {
			setShowNewsModal(false)
		}
	}, [showModal])

	const [newsTitle, setNewsTitle] = useState('')
	const [newsDescription, setNewsDescription] = useState('')

	const dataCreated = data?.[0]?.data_created
	const [updateNews, {}] = api.useUpdateNewsMutation()
	const updateNewsHandler = async (
		newsTitle: string,
		newsDescription: string
	) => {
		if (newsTitle !== '' && newsDescription !== '') {
			const date = new Date().toISOString()
			await updateNews({
				id: params.id,
				title: newsTitle,
				body: newsDescription,
				data_created: dataCreated,
				data_updated: date,
			})
			dispatch(setShowModal(false))
			setNewsTitle('')
			setNewsDescription('')
		}
	}

	const [deleteNews, {}] = api.useDeleteNewsMutation()
	const deleteNewsHandler = async () => {
		await deleteNews(params.id)
	}

	return (
		<>
			<div className='news-detailed'>
				{data &&
					data.map((news: INews) => (
						<div key={news.id} className='news-detailed__box'>
							<h1 className='title-text'>
								{news.id} {news.title}
							</h1>
							<Image src={noneImg} alt='news' priority />
							<p className='description-text'>{news.body}</p>
							<p className='description-text'>
								{new Date(news.data_updated).toLocaleString('ru-RU', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
									hour: 'numeric',
									minute: 'numeric',
									second: 'numeric',
								})}
							</p>
						</div>
					))}
				{isLoading && <Spinner />}
				{isFetching && !isLoading && <Spinner />}
				{error && <h2 className='error-text'>Ошибка при загрузки данных</h2>}
				{!data && !isLoading && !isFetching && !error && (
					<h2>Новость не найдена</h2>
				)}
				{data?.length === 0 && !isLoading && !isFetching && !error && (
					<>
						<h2 className='news-detailed__title title-text'>
							Новость не найдена
						</h2>
						<div className='news-detailed__buttons'>
							<Link href='/' className='news-detailed__button'>
								<AttractiveButton>Перейти на главную</AttractiveButton>
							</Link>
							<AttractiveButton
								className='news-detailed__button'
								onClick={back}>
								Вернутся назад
							</AttractiveButton>
						</div>
					</>
				)}
				{auth?.includes('admin') && data?.length !== 0 && (
					<div className='news-detailed__buttons'>
						<AttractiveButton onClick={deleteNewsHandler}>
							Удалить новость
						</AttractiveButton>
						<AttractiveButton
							onClick={() =>
								dispatch(setShowModal(true), setShowNewsModal(true))
							}>
							Редактировать новость
						</AttractiveButton>
					</div>
				)}
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
								onClick={() => updateNewsHandler(newsTitle, newsDescription)}
								className='modal__button'>
								Редактировать новость
							</UsualButton>
						</div>
					</CenterModal>
				)}
			</div>
		</>
	)
}

export default NewsDetailed
