import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import SignUp from '@/components/sign/signUp/signUp'

const RegistrationPage: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<SignUp />
				</div>
			</MainContainer>
		</>
	)
}

export default RegistrationPage
