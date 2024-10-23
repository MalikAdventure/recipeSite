import './footer.scss'

import { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import githubImg from '@/assets/icons/github.png'
import telegramImg from '@/assets/icons/telegram.png'
import emailImg from '@/assets/icons/email.png'
import ageImg from '@/assets/icons/age.png'

const Footer: FC = () => {
	return (
		<>
			<footer className='footer section'>
				<div className='footer__container container'>
					<h2 className='footer__title title-text'>
						Подпишитесь на нас в социальных сетях:
					</h2>
					<div className='footer__imgs'>
						<a
							className='footer__img'
							href='https://github.com/MalikAdventure'
							target='_blank'
							title='https://github.com/MalikAdventure'>
							<Image src={githubImg} alt='github' />
						</a>
						<a
							className='footer__img'
							href='https://t.me/MalikAnton'
							target='_blank'
							title='https://t.me/MalikAnton'>
							<Image src={telegramImg} alt='telegram' />
						</a>
						<a
							className='footer__img'
							href='mailto:malikantonit@gmail.com'
							target='_blank'
							title='malikantonit@gmail.com'>
							<Image src={emailImg} alt='email' />
						</a>
					</div>
					<div className='footer__links'>
						<Link href='/about-project' className='footer__link'>
							О проекте
						</Link>
						<p className='footer__link'>&#8226;</p>
						<Link href='/privacy-policy' className='footer__link'>
							Политика конфиденциальности
						</Link>
						<p className='footer__link'>&#8226;</p>
						<Link href='/user-agreement' className='footer__link'>
							Пользовательское соглашение
						</Link>
					</div>
					<Image
						title='Автор: Малик Антон'
						src={ageImg}
						alt='age'
						className='footer__age'
					/>
					<p>©2024, Recipes site &quot;FOD&quot;</p>
					<p>Все права &quot;FOD&quot; защищены</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
