import styled from "styled-components";

export const InputField = styled.input.attrs({ classNames: "input-error" })`
  padding: 15px;
  border-radius: 10px;
  border: 2px solid rgb(48, 151, 253);
  width: 250px;
  margin: 20px 0 5px 0;
  text-align: center;
  &:focus {
    outline: none;
    border-color: rgb(20, 63, 106);
  }
  &.input-error {
    border: 2px solid rgb(255, 56, 56);
    &:focus {
      outline: none;
      border-color: rgb(255, 56, 56);
    }
  }
`;

export const Error = styled.div`
  font-size: 11px;
  color: red;
  position: absolute;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  position: absolute;
  font-size: 12px;
  background-color: white;
  margin: 12px;
  padding: 1px;
`;

export const Wrapper = styled.label`
  position: relative;
  margin-bottom: 10px;
`;

export const Link = styled.a.attrs({classNames: 'view'})`
  background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
  position: absolute;
  top: 35px;
  right: 10px;
  display: inline-block;
  width: 20px;
  height: 20px;
  &.view {
    background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
  }
`;
