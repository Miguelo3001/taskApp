import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    
    handleLogout = () => {
        localStorage.clear();
    }
    
    render(){   
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark noSelect">
            <div className="container">
                <Link to={'/'} className="nav-link">Home</Link>   
                <Link to={'/AppTable'} className="nav-link">AppTable</Link>   
                <Link to={'/AppTasks'} className="nav-link">AppTasks</Link>   
                <Link to={'/PDFTable'} className="nav-link">PDFTable</Link>   
                <Link to={'/ProgressBar'} className="nav-link">ProgressBar</Link>   
                <Link to={'/ApiPokemon'} className="nav-link">ApiPokemon</Link>   
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                    </div>
            </div>      
        </nav>
        )
    }
}