'use client'

import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import NewsList from '@/components/news/newsList/newsList'

import { useAppDispatch } from '@/hooks/redux'
import { setContextPage } from '@/store/reducers/contextSlice'

import { useEffect } from 'react'

const ListOfNewsPage: FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setContextPage('listOfNews'))
	})

	return (
		<>
			<MainContainer>
				<div className='section'>
					<NewsList />
				</div>
			</MainContainer>
		</>
	)
}

export default ListOfNewsPage
