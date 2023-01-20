import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBox = styled.div`
    padding:1rem;
    background-color:var(--primary);
    height:100%;
    min-height:100vh;
`
const List = styled.ul`
    display:block;
    list-style:none;
    gap:1.2rem;
    padding-left:0px;
`
const ListItem = styled.li`
    text-decoration:none;
    font-weight:600;
    font-size:1.2rem;
    margin-bottom:1rem;
`
const Logo = styled.div`
    text-decoration:none;
    font-size:2rem;
    font-weight:bold;
    margin-bottom:2rem;
`

const Sidenav = () => {
  return (
    <>
        <SideBox>
            <Logo>
                <Link to='/'>Medicine Hub</Link>
            </Logo>
            <List>
                <ListItem><Link to='/about'>Dashboard</Link></ListItem>
                <ListItem><Link to='/medicines'>Medicines</Link></ListItem>
                <ListItem><Link to='/login'>Logout</Link></ListItem>
            </List>
        </SideBox>
    </>
  )
}

export default Sidenav;