import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Article(props) {
	const { id, source } = props;
	return (
		<article id={ id }>
			<ReactMarkdown source={ source } />
		</article>
	)
}