import React from 'react';
import { InputGroup, Dropdown, DropdownButton, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <InputGroup className="align-self-end w-50">
            <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-primary"
                title="제목"
                id="input-group-dropdown-1"
            >
                <Dropdown.Item href="#">제목</Dropdown.Item>
                <Dropdown.Item href="#">작성자</Dropdown.Item>
                <Dropdown.Item href="#">#해시태그</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-describedby="basic-addon1" variant="primary" />
            <InputGroup.Append>
                <Button variant="outline-primary">검색</Button>
            </InputGroup.Append>
        </InputGroup>
    );

};

export default SearchBar;