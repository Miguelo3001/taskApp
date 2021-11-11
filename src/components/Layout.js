import React from 'react'
//import Navbar from './Navbar'
import Navbar from '../components/nav.component'

function Layout(props) {
	return (
		<React.Fragment>
			<Navbar />
			{props.children}
		</React.Fragment>
	)
}

export default Layout
