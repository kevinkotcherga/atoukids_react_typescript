import styled from 'styled-components';
import ringBackground from '../assets/images/ak-home-intro-ring-bg.svg'
import cardEnfant from '../assets/images/atoukids-home-garde-enfant@2x.png'
import cardEnfantHandicape from '../assets/images/atoukids-garde-enfant-handicape@2x.png'
import cardSante from '../assets/images/atoukids-sante@2x.png'

const Wrapper = styled.section`
  background-image: url(${ringBackground});
  background-repeat: no-repeat;
  background-position: -10% center;
  background-size: contain;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 50%;
  font-size: 16px;
  color: #404040;
  gap: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 40px;
`

const Title = styled.h2`
  padding-top: 50px;
  font-size: 40px;
  text-align: center;
  color: #000000;
`;

const Link = styled.a`
  color: #00D3B7;
  font-weight: 600;
  text-decoration: none;
`

const Row = styled.div`
  display: flex;
  max-width: 1200px;
  gap: 30px;
`

const Column = styled.div`
  flex: 1;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.7s ease;
`

const Card = styled.div`
    background: none;
    border: 0;
    position: relative;
    margin: 40px 0;
    padding: 0;
    box-shadow: initial;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;

    &:hover {
      ${Image} {
        transform: scale(1.15) rotate(-6deg);
      }
    }
`

const CardWrapper = styled.div`
  position: absolute;
  top: 20%;
  z-index: 999;
  width: 100%;
  text-align: center;
`

const CardTitle = styled.h3`
  padding: 0 30px;
  font-size: 20px;
  color: #fff;
`

const Introduction = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Un réseau de professionnels qualifiés au service des familles</Title>
        <p>La plateforme est née de la volonté de deux professionnelles de l'enfance d'accompagner les parents à chaque étape de leur vie de famille. Grâce à un moteur de recherche avec plus de 150 critères, atouKIDS met en contact les femmes enceintes et les parents avec des professionnels certifiés de la famille pour des prestations de santé, bien-être, parentalité et garde d'enfants.</p>
        <p>Pour découvrir notre histoire et notre offre en vidéo, <Link href="">cliquez ici</Link></p>
      </Container>
      <Row>
        <Column>
          <Card>
            <CardWrapper>
              <CardTitle>Annuaire de professionnels (parentalité, santé, bien-être)</CardTitle>
            </CardWrapper>
            <Image src={cardSante} />
          </Card>
        </Column>
        <Column>
          <Card>
            <CardWrapper>
              <CardTitle>Atouliers (femmes enceintes, bébés, enfants, adolescents, parents, ...)</CardTitle>
            </CardWrapper>
            <Image src={cardEnfant} />
          </Card>
        </Column>
        <Column>
          <Card>
            <CardWrapper>
              <CardTitle>Garde d'enfants</CardTitle>
            </CardWrapper>
            <Image src={cardEnfantHandicape} />
          </Card>
        </Column>
      </Row>
    </Wrapper>
  );
};

export default Introduction;
