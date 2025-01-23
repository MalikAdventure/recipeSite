import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import Profile from '@/components/profile/profile'

const ProfilePage: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<Profile />
				</div>
			</MainContainer>
		</>
	)
}

export default ProfilePage
