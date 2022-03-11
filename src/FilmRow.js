import React, { Component } from 'react';
import './App.css';
import Poster from './Poster'
import Fave from './Fave';

class FilmRow extends Component {

    handleDetailsClick = (film) =>{
        console.log(`Fetching details for ${this.props.film.title}`)
    }

    render() {
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        return (
            <div className="film-row" onClick={()=>{this.handleDetailsClick(this.props.film.title)}}>
                <Poster url={posterUrl} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.substring(0,4)}</p>
                </div>
                <Fave />
            </div>
        );
    }
}

export default FilmRow;