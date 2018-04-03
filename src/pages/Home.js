import React, { Component, Fragment } from 'react';
import StandOut from './../components/StandOut';
import Premieres from './../components/Premieres';
import Axios from 'axios';

class Home extends Component {

  constructor() {
    super();
    this.serviceMovies = 'https://api.themoviedb.org/3/movie/now_playing?api_key=33d6dbc3f21b0e8cd82c0c93c7d6756d&language=es';
    this.state = {
      movies: [],
      moviesStandOut: ''
    };
  }

  getData = async () => {
    try {
      const response = await Axios.get(this.serviceMovies);
      this.setMoviesStandOut(response.data.results);
      this.setState({ movies: response.data.results });
    } catch (error) {
      console.log(error);
    }
  }

  setMoviesStandOut(movies) {
    const moviesStandOut = movies[Math.floor(Math.random() * movies.length )];
    this.setState({ moviesStandOut });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Fragment>
        <StandOut movie={ this.state.moviesStandOut }/>
        <Premieres movies={ this.state.movies } />
      </Fragment>
    );
  }
}

export default Home;