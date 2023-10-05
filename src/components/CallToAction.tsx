import styled from 'styled-components';
import signupBackground from '../assets/images/atoukids-signup-bg.svg'

const Wrapper = styled.section`
  padding: 20px 0;
  background: #00D3B7 url(${signupBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Text = styled.div`
  color: white;
`;

const Button = styled.div`
	margin: 0 5px;
	box-shadow: 0px 2px 6px 3px rgb(0 0 0 / 10%);
	border-radius: 30px;
	padding: 0.6rem 1.2rem;
	cursor: pointer;
  background-color: #000000;
	color: #ffffff;
  width: fit-content;
`;


const CallToAction = () => {
  return (
    <Wrapper>
      <Container>
      <Left>
        <Text>Vous êtes un parent ? Une famille ? Une femme enceinte ?</Text>
      </Left>
      <Right>
        <Button>Inscrivez-vous !</Button>
      </Right>
      </Container>
    </Wrapper>
  );
};

export default CallToAction;
