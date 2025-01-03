import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SmartJSON - Powerful JSON Formatter',
	description:
		'SmartJSON is a versatile and user-friendly tool for formatting and beautifying JSON data. Simplify your workflow with ease.',
	keywords:
		'JSON, formatter, JSON beautifier, data processing, developer tools, JSON editor',
	authors: [
		{ name: 'Anderson Castaño', url: 'https://anderc-dev.vercel.app/' },
	],
	creator: 'AndercDev',
	publisher: 'AndercDev',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://smart-json.vercel.app/',
		title: 'SmartJSON - Powerful JSON Formatter',
		description:
			'SmartJSON is your go-to tool for formatting and beautifying JSON data quickly and efficiently.',
		siteName: 'SmartJSON',
		images: [
			{
				url: 'https://smart-json.vercel.app/smartJsonOG.jpeg',
				width: 1200,
				height: 630,
				alt: 'SmartJSON - Powerful JSON Formatter',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'SmartJSON - Powerful JSON Formatter',
		description:
			'SmartJSON is your go-to tool for formatting and beautifying JSON data quickly and efficiently.',
		creator: '@YourTwitterHandle',
		images: ['https://smart-json.vercel.app/smartJsonOG.jpeg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	// verification: {
	// 	google: 'your-google-site-verification-code',
	// 	yandex: 'your-yandex-verification-code',
	// 	yahoo: 'your-yahoo-verification-code',
	// },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/favicon.svg'
					sizes='any'
					type='image/svg+xml'
				/>
			</head>
			<body className={inter.className}>
				<Analytics />
				{children}
			</body>
		</html>
	);
}

