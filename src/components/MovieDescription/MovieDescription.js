import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDescription extends Component {
    componentDidMount(){
        console.log('this is the movie that was clicked on', this.props.reduxStore);
        
    }

    // selectMovie = (event) => {
        
    //         // let findMovie = this.props.reduxStore.movies.filter(movie =>
    //         //     movie.id == event.target.id) 
    //         // let selectedMovie = findMovie[0];

    //         this.props.dispatch({
    //             type: 'MOVIE_SELECTED',
    //             payload: selectedMovie
    //         })
    // }

render(){
    return(
        
        <section>
            <h1>Movie Information:</h1>
                {/* {JSON.stringify(this.props.reduxStore.foundMovie)} */}
                <img src={this.props.reduxStore.foundMovie.poster}/>
                <h1>{this.props.reduxStore.foundMovie.title}</h1>
                <p>{this.props.reduxStore.foundMovie.description}</p>
        </section >
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})
export default connect(putReduxStateOnProps)(MovieDescription);