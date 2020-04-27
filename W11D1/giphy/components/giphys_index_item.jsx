import React from 'react';


const GiphysIndexItem = ({gif}) => {
  return (
    <img src={gif.images.original.url} />
  )
}

export default GiphysIndexItem;
