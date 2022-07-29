import { useRef } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import styled from "styled-components";
import { isValidIPAddress, isValidURL } from "../utils/Validate";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

interface Props {
  onUpdate(term: string, type : string): any;
}

const Search = (props: Props) => {
 
  const inputRef = useRef<HTMLInputElement>();
  //const [term, setTerm] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    
    let term : string = inputRef.current.value;

    if (isValidIPAddress(term)) {
      props.onUpdate(term, "ip"); 
    } else if (isValidURL(term)) {
      props.onUpdate(term, "url");
    } else {
      alert("nao é um ip ou dominio");
    }
    //setTerm(inputRef.current.value);
  };

  //const onChangeHandler = (event : React.FormEvent<HTMLInputElement>) => {
    
  //}

  return (
    <StyledForm onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        //value={term}
        //onChange={onChangeHandler}
        name="search"
        type="text"
        defaultValue="Search for any IP address or domain"
      />
      <Button />
    </StyledForm>
  );
};

export default Search;