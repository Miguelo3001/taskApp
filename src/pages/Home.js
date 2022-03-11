import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

	return (
		<React.Fragment>
			<section className="hero">
				<div className="info-hero">
					<div className="soy">
						<h1>
						<strong>Hellow World!</strong>
						</h1>
						<p>
							App Tasks
						</p>
						<Link to="/AppTable" className="noSelect">
							<button className="btn-primary noSelect">See Table</button>
						</Link>
						<div><br></br></div>
						<Link to="/AppTasks" className="noSelect">
							<button className="btn-primary noSelect">See Tasks</button>
						</Link>
					</div>
				</div>
			</section>
		</React.Fragment>
	)
}

export default Home
