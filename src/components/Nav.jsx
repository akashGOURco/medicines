import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    width:100%;
    background-color:var(--primary);  
`
const Container = styled.div`
    width:90%;
    background-color:var(--primary);
    margin:0 auto;
    padding:0.5rem 1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const Logo = styled.div`
    text-decoration:none;
    font-size:2rem;
    font-weight:bold;
`
const List = styled.ul`
    display:flex;
    list-style:none;
    gap:1.2rem;
`
const ListItem = styled.li`
    text-decoration:none;
    font-weight:600
`
const Nav = () => {
  return (
    <>
        <Header>
            <Container>
                <Logo>
                    {/* <Link to='/'>Medicine Hub</Link> */}
                </Logo>
                <List>
                    <ListItem><Link to='/logout'>User Details</Link></ListItem>
                </List>
            </Container> 
        </Header>
    </>
  )
}

export default Nav;