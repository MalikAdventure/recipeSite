import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import NewsDetailed from '@/components/news/newsDetailed/newsDetailed'

const News: FC = () => {
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

export default News
