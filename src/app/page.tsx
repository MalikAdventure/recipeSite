import './page.scss'

import MainContainer from '@/container/mainContainer'

import Link from 'next/link'

const Home = () => {
	return (
		<>
			<MainContainer>
				<div className='container'>
					<h1>Hello world</h1>
					<nav>
						<Link href='/'>главная</Link>
						<Link href='/recipes'>рецепты</Link>
					</nav>
				</div>
			</MainContainer>
		</>
	)
}

export default Home
