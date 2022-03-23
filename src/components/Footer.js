import React from 'react'



const Footer = ({ ...otherProps }) => {
	return (
		<footer className="bg-white flex flex-row">
			<div className="w-full max-w-7xl mx-auto px-3 py-14">
				<span className="text-base font-medium text-gray-500">
					Built in a cave under <a href="https://www.42lisboa.com/en/" className="text-base font-medium text-violet-800">42 Lisboa</a>
				</span>
			</div>
			<div className="w-full max-w-7xl mx-auto px-3 py-14">
				<a href="https://github.com/" className="text-base font-medium text-gray-500">
					OpenBat <a href="https://github.com/SillasPoulsen/batconnect" className="text-base font-medium text-violet-800">Github</a>
				</a>
			</div>
			
		</footer>
	)
}

export default Footer