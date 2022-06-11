import { useState } from 'react';
import { rgba } from 'polished';
import styled from 'styled-components';
import axios from 'axios';

type FactorResponse = {
  factors: number[];
  primeFactors: number[];
};

const App = () => {
  const [number, setNumber] = useState<number>();
  const [factors, setFactors] = useState<FactorResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  const getFactors = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:3333/api/factors/${number}`);
      
      setFactors(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  return (
    <Container>
      <FactorsWrapper>
        <Title>Buscador de divisores</Title>
        <Form>
          <Input type="number" placeholder="Insira um número" onChange={(e) => setNumber(Number(e.target.value))} />
          <button onClick={() => getFactors()} disabled={loading}>{ loading ? 'Buscando...' : 'Buscar' }</button>
        </Form>
        
        { factors && (
          <>
            <span>Divisores: {factors.factors.join(', ')}</span>
            <span>Divisores primos: {factors.primeFactors.join(', ')}</span>
          </>
        ) }
      </FactorsWrapper>

      <Footer>
        Desenvolvido por <a href="https://www.linkedin.com/in/matheusboari/" target="_blank">@matheusboari</a>
      </Footer>
    </Container>
  )
};

const Footer = styled.span`
  color: white;

  > a {
    color: white;
  }

  bottom: 0;
  position: absolute;
  margin-bottom: 10px;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  margin: 10px 0;

  > button {
    padding: 5px 10px;
    border-radius: 4px;

    border: none;
    background-color: #0ad6d4;
    color: #09090A;
    cursor: pointer;

    :disabled {
      cursor: default;
    }
  }
`;

const Title = styled.h2`
  color: white;
  margin: 0;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;

  :hover {
    border-color: #0ad6d4;
  }

  :focus {
    border-color: #0ad6d4;
    outline: 0;
    box-shadow: 0 0 0 2px ${rgba('#0ad6d4', 0.2)};
  }
`;

const FactorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;
  background-color: #27272A;
  
  padding: 20px;
  border-radius: 8px;

  > span {
    color: white;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #09090A;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
