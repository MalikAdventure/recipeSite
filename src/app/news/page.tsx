import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import NewsList from '@/components/news/newsList/newsList'

const News: FC = () => {
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

export default News
