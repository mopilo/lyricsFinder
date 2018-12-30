import React, { Component } from 'react'
import axios from 'axios'
import {Consumer} from '../../context'



class Search extends Component {

    state ={
        trackTitle: '',
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    findTrack = (e) => {
        e.preventDefault(); 
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_KEY}
        `)
        .then(res => {
            console.log(res.data)
            // this.setState({
            //     track_list: res.data.message.body.track_list
            // })
        })
        .catch(err=> console.log(err)) 
    }

  render() {
    return (
      <Consumer>
        {value => {
            return(
                <div className='card card-body mb-4 p-4'>
                    <h1 className='display-4 text-center'>
                        <i className='fas fa-music'> Search For A Song</i>
                    </h1>
                    <p className='lead text-center'>Get the lyrics for any song</p>
                    <form onSubmit={this.findTrack}>
                        <div className='form-group'>
                            <input className='form-control form-control-lg' type='text' 
                                name='trackTitle' 
                                value={this.state.trackTitle}
                                placeholder='song title...'
                                onChange={this.onChange}
                            />
                        </div>
                        <button className='btn btn-primary btn-lg btn-block mb-5' type='submit'>Get Track Lyrics</button>
                    </form>
                </div>
            );
        }}
      </Consumer>
    )
  }
}
export default Search;
