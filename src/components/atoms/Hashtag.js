import React from 'react';
import {Badge} from 'react-bootstrap';

const Hashtag = ({children}) => {
  return (
    <h6>
      <Badge variant="primary" style={{
        marginRight: ".3rem"
      }}>{'#' + children}</Badge>
    </h6>
  )
};

export default Hashtag;