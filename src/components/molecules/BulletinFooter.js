import React from 'react';
import {SearchBar, Pagination} from '../atoms';
import {Button} from 'react-bootstrap';
import './BulletinFooter.scss';

const BulletinFooter = () => {
  return (
    <div className="d-flex flex-column justify-content-center Bulletin-footer">
      <Pagination/>
      <div className="d-flex justify-content-between">
        <Button variant="outline-primary" className="h-100 d-inline-block">글 작성하기</Button>
        <SearchBar className="d-inline-block"/>
      </div>
      
    </div>
  )
};

export default BulletinFooter;