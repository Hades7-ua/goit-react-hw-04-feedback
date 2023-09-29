import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
