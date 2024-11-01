'use client'

import MainContainer from '@/container/mainContainer/mainContainer'
import Project from '@/static/project/project.mdx'

import { FC } from 'react'

const AboutProjectPage: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<Project />
				</div>
			</MainContainer>
		</>
	)
}

export default AboutProjectPage
