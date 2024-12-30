'use client';

import { useRef, useState } from 'react';

export default function Home() {
	const [jsonToFormat, setJsonToFormat] = useState('');
	const [jsonFormatted, setJsonFormatted] = useState('');

	const ref = useRef<HTMLPreElement>(null);

	const syntaxHighlight = (json: string) => {
		if (typeof json !== 'string') {
			json = JSON.stringify(json, null, 2);
		}
		return json.replace(
			/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
			match => {
				let className = 'text-gray-800'; // default
				if (/^"/.test(match)) {
					if (/:$/.test(match)) {
						className = 'text-purple-600'; // keys
					} else {
						className = 'text-green-600'; // strings
					}
				} else if (/true|false/.test(match)) {
					className = 'text-blue-600'; // booleans
				} else if (/null/.test(match)) {
					className = 'text-red-600'; // null
				} else if (/^-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?$/.test(match)) {
					className = 'text-orange-600'; // numbers
				}
				return `<span class="${className}">${match}</span>`;
			},
		);
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(ref.current?.innerText || '');
		alert('Copied to clipboard!');
	};

	const formatJson = (jsonString: string) => {
		try {
			if (typeof jsonString === 'string') {
				return syntaxHighlight(JSON.parse(jsonString));
			}
			return syntaxHighlight(jsonString);
		} catch {
			return jsonString;
		}
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24'>
			<h1 className='text-4xl font-bold mb-8'>
				Json Formatter
			</h1>

			<form
				onSubmit={e => {
					e.preventDefault();
					setJsonFormatted(formatJson(jsonToFormat));
				}}
				className='w-full max-w-lg'>
				<h2 className='text-xl font-semibold mb-2'>Input:</h2>
				<textarea
					className='w-full h-32 p-4 bg-gray-100 rounded-md text-black'
					placeholder='Enter your JSON here'
					onChange={e => setJsonToFormat(e.target.value)}
				/>
				<button className='mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700'>
					formatear
				</button>
			</form>

			<div className='mt-8 w-full max-w-lg'>
				<h2 className='text-xl font-semibold mb-2'>Result:</h2>
				<pre
					className='bg-gray-100 p-4 rounded-md overflow-x-auto whitespace-pre-wrap text-black'
					ref={ref}>
					<code
						className='text-sm font-mono whitespace-pre'
						dangerouslySetInnerHTML={{
							__html: formatJson(jsonFormatted),
						}}
					/>
				</pre>
				<button
					onClick={handleCopy}
					className='mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700'>
					Copy to Clipboard
				</button>
			</div>
		</main>
	);
}

