import styled from 'styled-components';
import akLogo from '../assets/images/ak-logo.svg';
import frenchFlag from '../assets/images/atoukids-entreprise-francaise.jpg'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
  font-size: 16px;
`;

const Top = styled.div`
  display: flex;
`;

const Logo = styled.img`
  max-width: 200px;
  margin: auto;
`

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  flex: 1;
`

const ContactTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const FrenchFlag = styled.img`
  margin-bottom: 1rem;
`

const ContactText = styled.p`
  margin-bottom: 1rem;
`

const Button = styled.button`
	margin: 0 5px;
	box-shadow: 0px 2px 6px 3px rgb(0 0 0 / 10%);
	border-radius: 30px;
	padding: 0.6rem 1.2rem;
	cursor: pointer;
  background-color: #00d3b7;
  border: 0;
  padding: 10px 30px;
`

const Menu = styled.div`
  display: flex;
  border-right: 1px solid #dee2e6;
  border-left: 1px solid #dee2e6;
  padding: 15px 20px;
  width: 100%;
  flex: 2;
`

const MenuList = styled.ul`
	list-style-type: none;
  padding: 0;
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;
`

const MenuItem = styled.li`
  padding-bottom: 1rem;
  font-weight: 600;
  cursor: pointer;
`

const BottomList = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	list-style-type: none;
  gap: 0.5rem;
  font-weight: 600;
`;

const BottomItem = styled.li`
  cursor: pointer;
`

const Follow = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  flex: 1;
`

const FollowTitle = styled.h4`
  margin-bottom: 3rem;
  font-size: 20px;
  text-align: center;
`

const Bottom = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #868e96;
  font-size: 14px;
`;

const FollowList = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	list-style-type: none;
`;

const FollowItem = styled.li`
  margin-right: 0.5rem;
`;

const Icon = styled.a`
  display: flex;
  border-radius: 15px;
  padding: 15px;
  transform: rotate(20deg);
  z-index: 3;
  background: #00D3B7;
  font-size: 24px;
  text-decoration: none;
  margin-bottom: 30px;
  box-shadow: 0px 2px 6px 3px rgba(0, 0, 0, 0.1);
  border: 0;
  cursor: pointer;
`

const Copyright = styled.p`
  font-size: 12px;
`

const Footer = () => {
  return (
    <Wrapper>
      <Top>
        <Logo src={akLogo} alt="AtouKids logo" />
      </Top>
      <Main>
        <Contact>
          <ContactTitle>atouKIDS</ContactTitle>
          <FrenchFlag src={frenchFlag} alt="Drapeau français" />
          <ContactText>Entreprise française</ContactText>
          <Button>Nous contacter</Button>
        </Contact>
        <Menu>
          <MenuList>
            <MenuItem>Nos professionnels de santé, bien-être et parentalité</MenuItem>
            <MenuItem>Nos professionnels de garde d'enfants</MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem>atou'MAG</MenuItem>
            <MenuItem>atou'LIVRES</MenuItem>
            <MenuItem>Label atouKIDS</MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem>À propos</MenuItem>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>Lancer une recherche</MenuItem>
          </MenuList>
        </Menu>
        <Follow>
          <FollowTitle>Suivez-nous !</FollowTitle>
          <FollowList>
            <FollowItem>
              <Icon>
                <FaLinkedinIn color={'#ffffff'} style={{ transform: 'rotate(-20deg)' }} />
              </Icon>
            </FollowItem>
            <FollowItem>
              <Icon>
                <FaFacebookF color={'#ffffff'} style={{ transform: 'rotate(-20deg)' }} />
              </Icon>
            </FollowItem>
            <FollowItem>
              <Icon>
                <FaInstagram color={'#ffffff'} style={{ transform: 'rotate(-20deg)' }} />
              </Icon>
            </FollowItem>
            <FollowItem>
              <Icon>
                <FaYoutube color={'#ffffff'} style={{ transform: 'rotate(-20deg)' }} />
              </Icon>
            </FollowItem>
          </FollowList>
        </Follow>
      </Main>
      <Bottom>
        <BottomList>
          <BottomItem>Mentions légales</BottomItem>
          <BottomItem>Confidentialité</BottomItem>
          <BottomItem>Conditions générales d'Utilisation et de Vente</BottomItem>
        </BottomList>
        <Copyright>© atouKIDS. Tous les droits sont réservés - 2020</Copyright>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;
