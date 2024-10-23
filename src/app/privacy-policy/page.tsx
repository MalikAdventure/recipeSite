'use client'

import MainContainer from '@/container/mainContainer/mainContainer'
import Policy from '@/static/policy/policy.mdx'

import { FC } from 'react'

const AboutProject: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<Policy />
				</div>
			</MainContainer>
		</>
	)
}

export default AboutProject
