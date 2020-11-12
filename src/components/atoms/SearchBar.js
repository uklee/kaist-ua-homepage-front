import React from "react";
import {
  InputGroup,
  Dropdown,
  DropdownButton,
  FormControl,
  Button
} from "react-bootstrap";

const SearchBar = ({ setSearchType, setSearchWord, handleConfirm }) => {
  return (
    <InputGroup className="align-self-end w-50">
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-primary"
        title="제목"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item href="#" onSelect={() => setSearchType('title')}>제목</Dropdown.Item>
        <Dropdown.Item href="#" onSelect={() => setSearchType('author')}>작성자</Dropdown.Item>
      </DropdownButton>
      <FormControl aria-describedby="basic-addon1" variant="primary" onChange={(e) => setSearchWord(e.target.value)} />
      <InputGroup.Append>
        <Button variant="outline-primary" onClick={() => handleConfirm()}>검색</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBar;
