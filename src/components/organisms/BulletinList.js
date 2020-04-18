import React from "react";
import "./BulletinList.scss";
import { BulletinRow } from "../molecules";

const BulletinList = ({ posts }) => {
  const tests = [
    {
      title: "글 제목 쓰는 칸인데요오오",
      date: "2020-03-15",
      author: "윤준성"
    },
    {
      title: "글 제목 쓰는 칸인데요오오",
      date: "2020-03-15",
      author: "윤준성"
    },
    {
      title: "글 제목 쓰는 칸인데요오오",
      date: "2020-03-15",
      author: "윤준성"
    },
    {
      title: "글 제목 쓰는 칸인데요오오",
      date: "2020-03-15",
      author: "윤준성"
    }
  ];

  if (!posts) return <div>로딩중...</div>;

  const rows = posts.map(post => <BulletinRow key={post.id} post={post} />);

  return <div>{rows}</div>;
};

export default BulletinList;
