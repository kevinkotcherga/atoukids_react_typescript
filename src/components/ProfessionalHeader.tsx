import styled from 'styled-components';
import { Professional } from '../types/Professional';
import { FaUserClock, FaHouseUser, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TbWorldShare } from 'react-icons/tb';
import starRegular from '../assets/images/star-white.svg';

const Wrapper = styled.section`
	padding: 80px 0 0;
`

const Header = styled.div`
	background: rgba(164, 71, 134, 0.15);
	padding: 60px 0;
`

const Row = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: auto;
  display: flex;
`

const Left = styled.div`
  flex: 1;
  padding: 40px 15px 0 15px;
`

const Card = styled.div`
  background-color: #A44786;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 30px;
`

const CardTop = styled.div`
  display: flex;
`

const CardLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  flex-direction: column;
`

const CardMain = styled.div`
  text-align: center;
  flex: 2;
`

const CardName = styled.h6`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0;
`

const CardJob = styled.h6`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  margin: 10px 0;
`

const CardRight = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-direction: column;
`

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #ffffff;
`

const Profile = styled.div`
  position: relative;
  margin-top: -100px;
  padding: 0;
`

const Avatar = styled.img`
  margin: auto;
  width: 175px;
  height: 175px;
  border: 2px solid #A44786;
  border-radius: 30px;
  object-fit: cover;
  object-position: center right;
`

const Stars = styled.div`
	display: flex;
`;

const Star = styled.img`
	width: 20px;
`;

const Right = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`

const Informations = styled.div`
  flex: 2;
  border-top: 1px solid #A44786;
  border-bottom: 1px solid #A44786;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  margin-top: 30px;

  h4 {
    font-size: 20px;
    text-transform: uppercase;
  }
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Workplace = styled.li`
  font-weight: 600;
  margin-top: 10px;
`

const Disponibility = styled.li`
  margin-top: 10px;
`

const Title = styled.h3`
  font-size: 30px;
  display: flex;
`

const Name = styled.p`
  font-size: 30px;
  margin-right: 5px;
  color: #A44786;
`

const Contact = styled.div`
  font-size: 30px;
  margin-right: 5px;
  color: #A44786;
  font-size: 18px;
  font-weight: 600;
  padding-top: 20px;
  display: flex;
  margin: auto;
  align-items: center;
  gap: 10px;
`
const ProfessionalHeader = ({ professional }: { professional: Professional }) => {
  return (
    <Wrapper>
      <Header>
        <Row>
          <Left>
            <Card>
              <CardTop>
                <CardLeft>
                  <FaHouseUser color={'#ffffff'} />
                  <FaHouseUser color={'#ffffff'} />
                  <FaPhoneAlt color={'#ffffff'} />
                  <MdEmail color={'#ffffff'} />
                </CardLeft>
                <CardMain>
                  <Profile>
                    <Avatar src={professional.picture} />
                  </Profile>
                  <CardName>{professional.name}</CardName>
                  <CardJob>{professional.job}</CardJob>
                </CardMain>
                <CardRight>
                  <FaInstagram color={'#ffffff'} />
                  <TbWorldShare color={'#ffffff'} />
                </CardRight>
              </CardTop>
              <CardBottom>
                <p>0 avis vérifiés</p>
                <Stars>
                  <Star src={starRegular} />
                  <Star src={starRegular} />
                  <Star src={starRegular} />
                  <Star src={starRegular} />
                  <Star src={starRegular} />
                </Stars>
              </CardBottom>
            </Card>
          </Left>
          <Right>
            <Title>
              <Name>{professional.name},</Name>{professional.job}
            </Title>
            <Informations>
              <div>
                <h4>Disponibilités</h4>
                <List>
                  <Disponibility>En journée</Disponibility>
                  <Disponibility>Le samedi</Disponibility>
                </List>
              </div>
              <div>
                <h4>Lieux d'intervention</h4>
                <List>
                  {professional.workplaces.map((workplace) => (
                    <Workplace>{workplace}</ Workplace>
                  ))}
                </List>
              </div>
            </Informations>
            <Contact>
              <FaUserClock size={'40px'} />
              <p> Prendre contact / Prendre rendez-vous en ligne</p>
            </Contact>
          </Right>
        </Row>
      </Header>
    </Wrapper>
  );
};

export default ProfessionalHeader;
