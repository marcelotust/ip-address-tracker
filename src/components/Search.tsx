import { ChangeEvent, useEffect, useRef, useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import styled from "styled-components";
import { isValidIPAddress, isValidURL } from "../utils/Validate";

const defaultValue: String = "Search for any IP address or domain";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const StyledError = styled.p`
  padding: 0px;
  margin: 0px;
  margin-left: 18px;
  font-size: 14px;
  font-weight: 700;
  color: hsl(0, 100%, 80.98039215686275%);

  @media only screen and (max-width: 800px) {
    width: 300px;
  }
`;

interface Props {
  onUpdate(term: String, type: String): any;
}

const Search = (props: Props) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [error, setError] = useState(false);

  const inputFocusHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === defaultValue) {
      setInputValue("");
    }
  };

  const inputBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setInputValue(defaultValue);
    }
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    setError(false);
  };

  const submitHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    let term: String = inputValue;

    if (isValidIPAddress(term)) {
      props.onUpdate(term, "ip");
    } else if (isValidURL(term)) {
      props.onUpdate(term, "url");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <StyledForm onSubmit={submitHandler}>
        <Input
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
          onChange={inputChangeHandler}
          value={inputValue}
          name="search"
          type="text"
        />
        <Button />
      </StyledForm>
      {error && (
        <StyledError>
          This is not a valid IP (0.0.0.0) or Domain (www.site.com)
        </StyledError>
      )}
    </div>
  );
};

export default Search;
