import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import SignIn from '@/components/sign/signIn/signIn'

const Authorization: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<SignIn />
				</div>
			</MainContainer>
		</>
	)
}

export default Authorization
