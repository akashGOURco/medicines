import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
    padding:0.7rem 1.5rem;
    color:#fff;
    background-color:var(--primary);
    font-size:14px;
    border:1px solid var(--primary);
    border-radius:4px;
    cursor:pointer;
    text-transform:uppercase;
    font-weight:500;
`

const Button = (props) => {
    const {nameBtn,type,onClick,name} = props;
  return (
    <>
        <CustomButton
          type={type} 
          onClick={onClick} 
          name={name}
        >
            {nameBtn}
        </CustomButton>
    </>
  )
}

export default Button