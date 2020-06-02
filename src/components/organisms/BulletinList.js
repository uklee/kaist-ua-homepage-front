import React from "react";
import "./BulletinList.scss";
import { BulletinRow } from "../molecules";

const BulletinList = ({ posts, isUser }) => {
  if (!posts) return <div className="bulletin-list"></div>;

  const rows = posts.map(post => (
    <BulletinRow key={post.id} post={post} isUser={isUser} />
  ));

  return <div className="bulletin-list">{rows}</div>;
};

export default BulletinList;
