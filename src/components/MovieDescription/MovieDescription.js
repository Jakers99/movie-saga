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
            <div className = 'floadLeft'>
            <h1>Movie Information:</h1>
                <img src={this.props.reduxStore.foundMovie.poster} alt='this is the movie poster'/>
                <section>
                    <button onClick={this.edit}>Edit</button>
                </section>
                <h1>{this.props.reduxStore.foundMovie.title}</h1>
            </div>
                <div className='description'>
                <p>{this.props.reduxStore.foundMovie.description}</p>
            </div>
        </section >
        );
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})
export default connect(putReduxStateOnProps)(MovieDescription);