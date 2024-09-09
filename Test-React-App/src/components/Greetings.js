import React, { useState } from 'react'

function Greetings() {
	const [textChanged, setTextChanged] = useState(false)
	return (
		<div>
			<h2>Welcome to react Testing</h2>
			{!textChanged && <p>learn Jest and React testing library</p>}
			{textChanged && <p>jest learning completed</p>}
			<button onClick={() => setTextChanged(true)}>change Text</button>
		</div>
	)
}

export default Greetings