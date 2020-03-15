import React from 'react';

import {Header, Footer} from '../organisms';
import {BulletinContent} from '../templates';

const BulletinNotice = () => {
  return (
    <div>
      <Header/>
      <BulletinContent/>
      <Footer/>
    </div>
  );
};

export default BulletinNotice;