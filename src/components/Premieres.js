import React from 'react';
import styled from 'styled-components';

const configImg = {
  urlBase: 'https://image.tmdb.org/t/p/',
  size: 'w500'
}

const createUrlImg = (poster_path) => {
  return configImg.urlBase + configImg.size + poster_path;
}

const Premieres = styled.div`
  >ul {
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: space-around;
  }
`;

const ItemMovie = styled.li`
  position: relative;
  list-style: none;
  min-width: 200px;
  height: 300px;
  margin: 10px 5px;
  border 1px solid rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  background-image: url(${ props => createUrlImg(props.movie.poster_path) });
  background-repeat: no-repeat;
  background-size: cover;
  transition: .5s;
  overflow: hidden;
  :hover {
    .b-item-movie_content {
      background: rgba(8,60,117,.5);
    }
    .b-item-movie_title {
      color: #fff;
    }
    .b-item-movie_btn-detail {
      background-color: #fff;
      color: #083c75;
    }
  }
  .b-item-movie_content {
    width: 100%;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: .5s;
    position: absolute;
    z-index: 200;
  }
  .b-item-movie_title {
    color: transparent;
    text-align: center;
    font-size: 1.5em;
    transition: .3s;
  }
  .b-item-movie_btn-detail {
    background-color: transparent;
    border-radius: 1.25em;
    color: transparent;
    cursor: pointer;
    line-height: 2.625em;
    margin-top: 10%;
    padding: 0 1em;
    text-decoration: none;
    transition: .3s;
    :focus {
      outline: 0px;
    }
  }
  ::before {
    content: "Estreno";
    color: white;
    background: red;
    width: 150px;
    position: absolute;
    transform: rotate(-50deg);
    text-align: center;
    top: 20px;
    left: -48px;
    z-index: 100;
  }
`;

export default ({ movies }) => (
  <Premieres>
    <ul>
    { 
      movies.map( movie =>
        <ItemMovie key={ movie.id } movie={ movie }>
          <div className="b-item-movie_content">
            <span className="b-item-movie_title">{ movie.title}</span>
            <a href="/detalle" className="b-item-movie_btn-detail">Ver detalle</a>
          </div>
        </ItemMovie>
      )
    }
    </ul>
  </Premieres>
);