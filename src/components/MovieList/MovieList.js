import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviesList extends Component {
componentDidMount(){
    this.getMovies();
}

moviePage = (movie) => {
    this.props.dispatch({
        type: 'MOVIE_SELECTED',
        payload: movie
    })
    this.props.history.push('/MovieDescription')

}

getMovies = (event) => {
    console.log('in GET MOVIES');
    
    this.props.dispatch({
        type: 'GET_MOVIES'
    })
}

    render(){
        return(
            <div>
            <h1>The list of the gallery</h1>
            <ul>
                <li>
                 
                    
                    {this.props.reduxStore.movies.map(movie => (
                        <li key={movie.id}><img src={movie.poster} onClick={() => this.moviePage(movie)} alt='movie poster' /><h1>{movie.title}</h1><p>{movie.description}</p> </li>
                    ))}
                           
                   
                </li>
            </ul>
            <button onClick={this.getMovies}>

            </button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
}) 

export default connect(putReduxStateOnProps)(MoviesList)