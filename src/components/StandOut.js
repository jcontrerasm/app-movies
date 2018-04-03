import React from 'react';
import styled from 'styled-components';

const configImg = {
  urlBase: 'https://image.tmdb.org/t/p/',
  size: 'w1280'
}

const createUrlImg = (backdrop_path) => {
  return configImg.urlBase + configImg.size + backdrop_path;
}

const StandOut = styled.div`
  background-image: url( ${ props => createUrlImg(props.movie.backdrop_path) } );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height:100vh;
`;

const MovieInfo = styled.div`
  color: rgba(205,220,57,1);
  position: relative;
`;

const MovieInfoContent = styled.div`
  position: absolute;
  top: 400px;
  left: 20px;
  max-width: 600px;
`;

const MovieInfoTitle = styled.span`
  text-transform uppercase;
  font-size: 3em;
  line-height: 1em;
  color: #fff;
  font-weight: bold;
`;

export default ({movie}) => {
  return (
    <StandOut movie={ movie }>
      <MovieInfo>
        <MovieInfoContent>
          <MovieInfoTitle>{ movie.title }</MovieInfoTitle>
        </MovieInfoContent>
      </MovieInfo>
    </StandOut>
  );
}