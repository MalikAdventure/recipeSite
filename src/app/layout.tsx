'use client'

import './globals.scss'

import App from '@/app/app'

// import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Head from 'next/head'

const geistSans = localFont({
	src: '../assets/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: '../assets/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

// export const metadata: Metadata = {
// 	title: 'Recipe site',
// 	description: 'Сайт с рецептами с использованием next js',
// }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<Head>
				<link
					rel='icon'
					type='image/png'
					href='/favicon-48x48.png'
					sizes='48x48'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<link rel='shortcut icon' href='/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<meta name='apple-mobile-web-app-title' content='Recipe site' />
				<link rel='manifest' href='/site.webmanifest' />
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable}`}
				suppressHydrationWarning={true}>
				<App>{children}</App>
			</body>
		</html>
	)
}
