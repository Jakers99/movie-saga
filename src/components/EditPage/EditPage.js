import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Edit extends Component{

    state = {
        changeInfo: {
            title: '',
            description: ''
        }
    }

    changeCategory = (event) => {
        this.setState({
            changeInfo: {
                ...this.state.changeInfo,
                [event.target.name]: event.target.value
            }
        })
    }

    submitNewInfo = (event) => {
        event.preventDefault();
        let movieInfo = this.state.changeInfo;
        console.log('logged the new info', movieInfo);
        this.props.dispatch({
            type: 'NEW_INFO',
            payload: movieInfo
        })
    }

    cancel = () => {
        this.props.history.push('/MovieDescription')
    }

    render(){
        return(
            <section>
                <Router>
                    <div>
                        <Link to='/'>Back to home</Link>
                        </div>
                    <div>
                        <Link to = '/MovieDescription'>Back to the movie Info</Link>
                    </div>
                </Router>
            <h1>Edit the title or description!</h1>
            <div>
                <label for='changeCategory'>Change Title: </label>
                <input className='changeCategory' type='text' onChange={this.changeCategory} value={this.state.title} name='title' />
            </div>
            <div>
                <label for='changeInfo'>Change Description: </label>
                <textarea className='changeInfo' type='text' onChange={this.changeCategory} value={this.state.description} name='description' />
                <section>
                    <button onClick={this.submitNewInfo}>Submit</button>
                    <button onClick = {this.cancel}>Cancel</button>
                </section>
                <section>
                        <img src={this.props.reduxStore.foundMovie.poster} alt='this is the movie poster' />
                        <h1>{this.props.reduxStore.foundMovie.title}</h1>
                        <p>{this.props.reduxStore.foundMovie.description}</p>
                </section>
            </div> 
            </section>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})
export default connect(putReduxStateOnProps)(Edit);