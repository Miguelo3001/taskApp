import React, { Fragment, useEffect, useState } from 'react'

function ApiPokemon() {

/*
	useEffect(()=>{
		fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200"')
		.then(response => response.json())
		.then(data => console.log(data.results[0].name));
		
	},[])
	*/
	

	const [getPokemon, setGetPokemon] = useState(null)
	const [getAbilities, setGetAbilities] = useState("Loading")
	let getAllPokemon = "Loading"

	useEffect(()=>{

		let url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=200'

		async function fetchPokemon(){
			try{
				const resp = await fetch(url)
				const data = await resp.json()
				const result = await data.results
				
				
					//result.map((pokemon) => console.log(pokemon.name))
					setGetPokemon(result);
	
				
				//console.log(data)

			} catch(e) {
				console.error(e)
			}
		}

		fetchPokemon();


	},[])


	async function singlePokemon(num){

		let url ="https://pokeapi.co/api/v2/pokemon/" + num

		try{
			const resp = await fetch(url)
			const data = await resp.json()
			const result = await data.abilities
			
			
				//let abilities = result.find(pokemon => pokemon.ability)
				let abilities= result.map(p => p.ability.name + ", ")
				
				setGetAbilities(abilities)
				//console.log("check: " + result)
		
			//console.log(data)

		} catch(e) {
			console.error(e)
		}
	}



	if(getPokemon !==null){
		getAllPokemon = (
			getPokemon.map((pokemon, idx) => 
				<Fragment key = {idx}>
				<div style={{background: "beige", color: "navy"}}>
					<ul>
					<li>
						{pokemon.name}
							<ul>
								<button
								id={idx}
								onClick={()=>singlePokemon(idx+1)}
								>
									Ver habilidades
								</button>							
							</ul>
					</li>
					</ul>
				</div>
				<br/>
			</Fragment>
		)
		)

	}


	return (
		<React.Fragment>
			<section className="hero">
				<div className="info-hero">
					<div className="soy">
						<div>
							<div style={{background: "BLACK", color: "white", position: "fixed", left:"50%"}}
							align="center"
							>
								{getAbilities}									
							</div>
							{getAllPokemon}
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	)
}

export default ApiPokemon
