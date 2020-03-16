import React from 'react';
import './BulletinList.scss';
import {BulletinFooter, BulletinHeader, BulletinRow} from "../molecules";

const BulletinModule = () => {
  const test = {
    title: "글 제목 쓰는 칸인데요오오",
    hashtags: ["해시","태그"],
    date: "2020-03-15",
    writer: "윤준성"
  };

  return (
    <div>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
      <BulletinRow {...test}/>
    </div>
  )
};

export default BulletinModule;