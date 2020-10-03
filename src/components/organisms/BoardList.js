import React from "react";
import "./BoardList.scss";
import { BoardRow, PetitionBoardRow } from "../molecules";

const BoardList = ({ posts, petitions }) => {
  if (!posts && !petitions) return <div className="board-list"></div>;

  let rows;
  if (!posts) {
    rows = petitions.map(petition => (
      <PetitionBoardRow key={petition.id} petition={petition} />
    ));
  } else {
    rows = posts.map(post => <BoardRow key={post.id} post={post} />);
  }

  return <div className="board-list">{rows}</div>;
};

export default BoardList;
