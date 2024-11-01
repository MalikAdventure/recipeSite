import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import NewsDetailed from '@/components/news/newsDetailed/newsDetailed'

const NewsPage: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<NewsDetailed />
				</div>
			</MainContainer>
		</>
	)
}

export default NewsPage
