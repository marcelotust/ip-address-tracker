import React, { ForwardedRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 460px;
  height: 15px;
  padding: 20px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-style: none;
  background-color: white;

  font-size: 18px;
  font-weight: 400;
  color: gray;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    color: black;
    border-style: none;
    outline: none;
  }
`;

interface Props {
  name: string;
  type: string;
  defaultValue: string;
}

export type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <div>
      <StyledInput
        id={props.name}
        type={props.type}
        defaultValue={props.defaultValue}
        ref={ref}
      />
    </div>
  );
});

export default Input;
