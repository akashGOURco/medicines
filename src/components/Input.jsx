import React from 'react'
import styled from 'styled-components';

const CustomInput = styled.input`
    width:97%;
    height:50px;
    padding:0rem 0.5rem;
    display:block;
    margin-bottom:1rem;
    font-size:1rem;
    outline:none;
    border:1px solid var(--primary);
    border-radius:4px;
    color:var(--primary);
    ::placeholder{
        color:var(--primary);
    }
`;

const Input = (props) => {
    const {type, placeholder,} = props;
  return (
    <>
        <CustomInput
            type={type}
            placeholder={placeholder}
        />
    </>
  )
}

export default Input;