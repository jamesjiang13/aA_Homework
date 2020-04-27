import React from 'react';
import GiphysIndexItem from './giphys_index_item';


const GiphysIndex = ({gifs}) => {

  return (
    <ul>
      {gifs.map((gif, idx) => < GiphysIndexItem key={idx} gif={gif} />)}
    </ul>
  )
}

export default GiphysIndex;


