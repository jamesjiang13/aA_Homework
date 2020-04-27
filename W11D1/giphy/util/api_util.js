// import * as APIUtil from '../util/api_util';

export const fetchSearchGiphys = (searchTerm) => {
  return $.ajax ({
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=hB9HtUqGhGnleyWOhLXp2AiCqClJfmXb&limit=10`,
    method: 'GET'
  });
}


