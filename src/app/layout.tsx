import './globals.scss'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

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

export const metadata: Metadata = {
	title: 'Recipe site',
	description: 'Сайт с рецептами с использованием next js',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={`${geistSans.variable} ${geistMono.variable}`}
				suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	)
}
