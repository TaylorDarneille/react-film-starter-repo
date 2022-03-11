import React, { Component } from 'react';
import './App.css';
import FilmRow from './FilmRow';

class FilmList extends Component {
    state = {
        filter: 'all'
    }
    
    handFilterClick = (filter) =>{
        this.setState({filter: filter})
    }

    render() {
        const allFilms = this.props.films.map(film=>{
            return <FilmRow film={film} />
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter==='all'?'is-active':''}`} onClick={()=>this.handFilterClick('all')}>
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter==='faves'?'is-active':''}`} onClick={()=>this.handFilterClick('faves')}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
            </div>
        );
    }
}

export default FilmList;