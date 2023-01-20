import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Sidenav from "./components/Sidenav";
import styled from "styled-components";

const ContainerFluid = styled.div`
  display: grid;
  grid-template-columns:20% 80%;
  width:100%;
  overflow:hidden;

`;
const Box = styled.div`

`;
function MedicineDetails() {
  return (
    <>
      <ContainerFluid>
        <Box>
          <Sidenav/>
        </Box>
        <Box>
          <Nav />
          <Outlet/>
        </Box>
      </ContainerFluid>
      
    </>
  );
}

export default MedicineDetails;
