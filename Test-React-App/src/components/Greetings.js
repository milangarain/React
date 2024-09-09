import React, { useState } from 'react'
import Output from './Output'

function Greetings() {
	const [textChanged, setTextChanged] = useState(false)
	return (
		<div>
			<Output>Welcome to react Testing</Output>
			{!textChanged && <p>learn Jest and React testing library</p>}
			{textChanged && <p>jest learning completed</p>}
			<button onClick={() => setTextChanged(true)}>change Text</button>
		</div>
	)
}

export default Greetings