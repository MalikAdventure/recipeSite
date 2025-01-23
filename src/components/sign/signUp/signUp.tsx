'use client'

import './signUp.scss'

import { FC } from 'react'
import { ISignUp } from './signUp.interface'

import { SubmitHandler, useForm } from 'react-hook-form'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import UsualButton from '@/UI/buttons/usualButton/usualButton'
import UsualInput from '@/UI/inputs/usualInput/usualInput'

import { api } from '@/services/recipeServices'

import { useAppDispatch } from '@/hooks/redux'
import { setProfile } from '@/store/reducers/contextSlice'

import { useState, useEffect } from 'react'

const SignUp: FC = () => {
	const dispatch = useAppDispatch()

	const [formData, setFormData] = useState<ISignUp>({
		name: null,
		email: null,
		password: null,
	})

	const { register, handleSubmit, formState, watch } = useForm<ISignUp>({
		mode: 'onChange',
	})

	const password = watch('password', '')

	const nameError = formState.errors.name?.message
	const emailError = formState.errors.email?.message
	const passwordError = formState.errors.password?.message
	const repeatPasswordError = formState.errors.repeatPassword?.message

	const onSubmit: SubmitHandler<ISignUp> = (form) => {
		setFormData(form)
	}

	const { data: users } = api.useGetAllUsersForAuthQuery({
		email: formData.email,
		password: formData.password,
	})

	const router = useRouter()

	const [createAccount, {}] = api.useCreateAccountMutation()

	const createAccountHandler = async () => {
		await createAccount({
			name: formData.name,
			email: formData.email,
			password: formData.password,
		})
	}

	useEffect(() => {
		if (
			users?.length === 0 &&
			formData.name !== null &&
			formData.email !== null &&
			formData.password !== null
		) {
			createAccountHandler()
			dispatch(
				setProfile({
					name: formData?.name,
					email: formData?.email,
					status: 'user',
				})
			)
			router.push('/profile')
		}
	}, [users, formData])

	return (
		<>
			<div className='sign-up'>
				<h1 className='sign-up__title topic-text'>Регистрация аккаунта</h1>
				<form className='sign-up__form' onSubmit={handleSubmit(onSubmit)}>
					<div className='sign-up__box'>
						<div className='sign-up__item'>
							<UsualInput
								className={`sign-up__input input-form description-text ${
									nameError ? 'input-form_error' : ''
								}`}
								type='text'
								placeholder='Введите ваше имя'
								{...register('name', {
									required: 'Это поле обязательно к заполнению',
									minLength: {
										value: 2,
										message: 'Введите больше 2-х символов',
									},
									maxLength: {
										value: 16,
										message: 'Введите меньше 17-ти символов',
									},
								})}
							/>
							{nameError && (
								<p className='sign-up__text error-text'>{nameError}</p>
							)}
						</div>
						<div className='sign-up__item'>
							<UsualInput
								className={`sign-up__input input-form description-text ${
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
								<p className='sign-up__text error-text'>{emailError}</p>
							)}
						</div>
						<div className='sign-up__item'>
							<UsualInput
								className={`sign-up__input input-form description-text ${
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
								<p className='sign-up__text error-text'>{passwordError}</p>
							)}
						</div>
						<div className='sign-up__item'>
							<UsualInput
								className={`sign-up__input input-form description-text ${
									repeatPasswordError ? 'input-form_error' : ''
								}`}
								type='password'
								placeholder='Повторите пароль'
								{...register('repeatPassword', {
									required: 'Это поле обязательно к заполнению',
									validate: (value) =>
										value === password || 'Пароли не совпадают',
								})}
							/>
							{repeatPasswordError && (
								<p className='sign-up__text error-text'>
									{repeatPasswordError}
								</p>
							)}
						</div>
					</div>
					<div className='sign-up__buttons'>
						<UsualButton type='submit' className='sign-up__button'>
							Зарегистрировать аккаунт
						</UsualButton>
						<p className='sign-up__link description-text'>
							<Link href='/authorization'>У меня есть аккаунт</Link>
						</p>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignUp
