import React from 'react';
import './BulletinModule.scss';
import {BulletinFooter, BulletinHeader, BulletinRow} from "../molecules";

const BulletinModule = () => {
  return (
    <div>
      <BulletinHeader/>
      <BulletinRow/>
      <BulletinRow/>
      <BulletinRow/>
      <BulletinFooter/>
    </div>
  )
};

export default BulletinModule;