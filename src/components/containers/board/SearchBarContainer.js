import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import SearchBar from "../../atoms/SearchBar";

const SearchBarContainer = ({ location }) => {

  const [searchType, setSearchType] = useState('title');
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => console.log(searchType), [searchType]);
  useEffect(() => console.log(searchWord), [searchWord]);

  const handleConfirm = () => {
    console.log(`type: ${searchType}, word: ${searchWord}`);
  }

  return <SearchBar setSearchType={setSearchType} setSearchWord={setSearchWord} handleConfirm={handleConfirm} />
};

export default withRouter(SearchBarContainer);