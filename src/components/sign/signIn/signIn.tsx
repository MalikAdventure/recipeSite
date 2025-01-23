'use client'

import './signIn.scss'

import { FC } from 'react'
import { ISignIn } from './signIn.interface'

import { SubmitHandler, useForm } from 'react-hook-form'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import UsualButton from '@/UI/buttons/usualButton/usualButton'
import UsualInput from '@/UI/inputs/usualInput/usualInput'

import { api } from '@/services/recipeServices'

import { useAppDispatch } from '@/hooks/redux'
import { setProfile } from '@/store/reducers/contextSlice'

import { useState, useEffect } from 'react'

const SignIn: FC = () => {
	const dispatch = useAppDispatch()

	const [formData, setFormData] = useState<ISignIn>({
		email: null,
		password: null,
	})

	const { register, handleSubmit, formState } = useForm<ISignIn>({
		mode: 'onChange',
	})

	const emailError = formState.errors.email?.message
	const passwordError = formState.errors.password?.message

	const onSubmit: SubmitHandler<ISignIn> = (form) => {
		setFormData(form)
	}

	const { data: admins } = api.useGetAllAdminsForAuthQuery({
		email: formData.email,
		password: formData.password,
	})
	const { data: users } = api.useGetAllUsersForAuthQuery({
		email: formData.email,
		password: formData.password,
	})

	const router = useRouter()

	useEffect(() => {
		if (admins?.length === 1) {
			dispatch(
				setProfile({
					name: admins[0].name,
					email: admins[0].email,
					status: 'admin',
				})
			)
			router.push('/profile')
		} else if (users?.length === 1) {
			dispatch(
				setProfile({
					name: users[0].name,
					email: users[0].email,
					status: 'user',
				})
			)
			router.push('/profile')
		}
	}, [admins, users, formData])

	return (
		<>
			<div className='sign-in'>
				<h1 className='sign-in__title topic-text'>Вход в личный кабинет</h1>
				<form className='sign-in__form' onSubmit={handleSubmit(onSubmit)}>
					<div className='sign-in__box'>
						<div className='sign-in__item'>
							<UsualInput
								className={`sign-in__input input-form description-text ${
									emailError ? 'input-form_error' : ''
								}`}
								type='email'
								placeholder='Введите ваш email'
								{...register('email', {
									required: 'Это поле обязательно к заполнению',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Неправильная почта',
									},
								})}
							/>
							{emailError && (
								<p className='sign-in__text error-text'>{emailError}</p>
							)}
						</div>
						<div className='sign-in__item'>
							<UsualInput
								className={`sign-in__input input-form description-text ${
									passwordError ? 'input-form_error' : ''
								}`}
								type='password'
								placeholder='Введите ваш пароль'
								{...register('password', {
									required: 'Это поле обязательно к заполнению',
									pattern: {
										value:
											/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
										message:
											'Пароль должен быть не меньше 8 символов и содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
									},
								})}
							/>
							{passwordError && (
								<p className='sign-in__text error-text'>{passwordError}</p>
							)}
						</div>
					</div>
					<div className='sign-in__buttons'>
						<UsualButton type='submit' className='sign-in__button'>
							Войти в аккаунт
						</UsualButton>
						<p className='sign-in__link description-text'>
							<Link href='/registration'>У меня нет аккаунта</Link>
						</p>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignIn
