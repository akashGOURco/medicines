import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { Outlet, useNavigate } from "react-router-dom";

const ContainerFluid = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 2rem 0rem;
`;

const Container = styled.div`
  width: 90%;
  background-color: #fff;
  margin: 0 auto;
  padding: 1rem;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const MainHeading = styled.h1`
  line-height: 0px;
`;
const MainBox = styled.div`
  display: grid;
  justify-content: start;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
`;

const Home = () => {
  const navigate = useNavigate();
  const medicine = [
    {
      id:'1',
      name:'Abacavir',
      qt:'100',
      price:'RS-100/pack'
    },
    {
      id:'2',
      name:'Abacavir',
      qt:'100',
      price:'RS-100/pack'
    },
    {
      id:'3',
      name:'Abacavir',
      qt:'100',
      price:'RS-100/pack'
    },
    {
      id:'4',
      name:'Abacavir',
      qt:'100',
      price:'RS-100/pack'
    },
    {
      id:'5',
      name:'Abacavir',
      qt:'100',
      price:'RS-100/pack'
    },
    {
      id:'6',
      name:'Abacavir',
      qt:'100',
      price:'RS-100/pack'
    },
  ];
  return (
    <>
      <ContainerFluid>
        <Container>
          <Box>
            <MainHeading>List of medicines</MainHeading>
            <Button nameBtn="Add Medicine" />
          </Box>
          <table>
            <tr>
              <th>Id</th>
              <th>Medicine Name</th>
              <th>Q.t.</th>
              <th>Price</th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
            {
              medicine.map((items)=>{
                return(
                  <>
                    <tr onClick={() => navigate(`medicinefulldetails`)}>
                      <td>{items.id}</td>
                      <td>{items.name}</td>
                      <td>{items.qt}</td>
                      <td>{items.price}</td>
                      <td>
                        <MainBox>
                          <Button nameBtn="Edit" />
                          <Button nameBtn="Delete" />
                        </MainBox>
                      </td>
                    </tr>
                  </>
                )
              })
            }
            
          </table>
        </Container>
      </ContainerFluid>
    </>
  );
};

export default Home;
