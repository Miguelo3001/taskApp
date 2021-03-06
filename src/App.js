import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppTasks from './components/AppMain';
import AppTable from './AppTable';
import PDFTable from './components/TableToPDF';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import ProgressBar from './pages/ProgressBar'
import ApiPokemon from './pages/ApiPokemon'

//import Nav from './components/nav.component'; 
//import Example from './components/example';
//modificado3

function App() {

    return (
      <BrowserRouter>
			<Layout>
				<Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AppTasks" component={AppTasks}/>
          <Route exact path="/AppTable" component={AppTable}/>
          <Route exact path="/PDFTable" component={PDFTable}/>
          <Route exact path="/ProgressBar" component={ProgressBar}/>
          <Route exact path="/ApiPokemon" component={ApiPokemon}/>
          {/* Retos Primer grado: */}
					<Route component={NotFound} />
         </Switch>
			</Layout>
		</BrowserRouter>
    )
}

export default App