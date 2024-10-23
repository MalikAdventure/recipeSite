'use client'

import MainContainer from '@/container/mainContainer/mainContainer'
import Agreement from '@/static/agreement/agreement.mdx'

import { FC } from 'react'

const UserAgreement: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<Agreement />
				</div>
			</MainContainer>
		</>
	)
}

export default UserAgreement
