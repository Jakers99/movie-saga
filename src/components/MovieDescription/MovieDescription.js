import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
class MovieDescription extends Component {



    edit = () => {
        this.props.history.push('/details')
    }

render(){
    return(
        
        <section>
            <Router>
                <ul>
                    <Link to = '/'>Back to list</Link>
                </ul>
            </Router>
            <h1>Movie Information:</h1>
            <button onClick={this.edit}>Edit</button>
                <img src={this.props.reduxStore.foundMovie.poster} alt='this is the movie poster'/>
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