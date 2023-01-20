import React from 'react';
import styled from 'styled-components';
import medicine from '../../assets/images/medicine.jpeg';


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
const DetailsBox = styled.div`
  display:grid;
  grid-template-columns:repeat(2,1fr);
  padding:1rem 0rem;
  gap:1rem;
`;
const Divide = styled.div`

`;
const Img = styled.img`
  width:100%;
`
const MedicineMainDetails = () => {
  return (
    <>
      <ContainerFluid>
        <Container>
              <Box>
                <MainHeading>Medicines Full Details</MainHeading>
              </Box>
              <DetailsBox>
                <Divide>
                  <Img src={medicine} alt="medicineImage" />
                </Divide>
                <Divide>
                  <h3>Medicine Name: Abacavir</h3>
                  <p><strong>Medicine Description:</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione facilis itaque reiciendis voluptate modi enim veniam incidunt aperiam expedita aliquam placeat eveniet consectetur voluptates maxime officia quidem, velit ipsa earum.</p>
                  <p><strong>Dose :</strong> 1/2 (100mg)</p>
                </Divide>
              </DetailsBox>
          </Container> 
      </ContainerFluid> 
    </>
  )
}

export default MedicineMainDetails;