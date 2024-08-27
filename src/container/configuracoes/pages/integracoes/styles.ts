/* eslint-disable */
import styled from 'styled-components';

export const Main = styled.div`
  padding: 20px;
  background-color: #f4f5f7;
`;

export const Section = styled.section`
  margin-bottom: 20px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #3f3d56;
`;

export const SuppliersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SupplierItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SupplierInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// export const Tag = styled.span`
//   background-color: ${(props) => props.color || '#ddd'};
//   color: #fff;
//   padding: 5px 10px;
//   border-radius: 5px;
//   font-size: 12px;
// `;

export const CatalogButton = styled.button`
  background-color: #6c63ff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5a54d1;
  }
`;

export const SalesCalculator = styled.div`
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #3f3d56;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const CalculateButton = styled.button`
  background-color: #6c63ff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #5a54d1;
  }
`;

// export const IntegrationGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: space-between;
// `;

export const IntegrationCard = styled.div`
  width: 150px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    max-width: 100%;
  }
`;

export const IntegrationList = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 10px;
  }

  th {
    background-color: #f4f5f7;
  }

  td {
    border-bottom: 1px solid #ddd;
  }
`;

export const IntegrationGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

// export const IntegrationCard = styled.div`
//   width: 150px;
//   padding: 20px;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   img {
//     max-width: 100%;
//   }
// `;

export const Tag = styled.span`
  background-color: ${(props) => props.color || '#ddd'};
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin-top: 10px;
  display: inline-block;
`;