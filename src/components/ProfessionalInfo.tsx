import labelAtkids from '../assets/images/atoukids-label-badge.svg';
import { Professional } from '../types/Professional';
import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';
import ringBackground from '../assets/images/ak-home-intro-ring-bg.svg'

const Wrapper = styled.section`
  background-image: url(${ringBackground});
  background-repeat: no-repeat;
  background-position: -10% center;
  background-size: contain;
  margin: 20px 0;
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 50px;
`

const TitleText = styled.h4`
  font-size: 20px;
`

const TitleImage = styled.img`
  width: 80px;
  height: auto;
`

const Skill = styled.div`
  padding: 60px 0;
  max-width: 600px;
`

const SkillTitle = styled.h3`
  color: #A44786;
  font-size: 30px;
`

const SkillSubtitle = styled.h3`
  font-size: 20px;
  margin: 30px 0;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Item = styled.li`
  padding: 0.75rem 1.25rem;
  font-size: 16px;
  color: #414141;
`

const ItemName = styled.span`
  font-weight: 600;
  color: #000000;
  margin-left: 5px;
`

const MethodOfWorking = styled.p`
  color: #414141;
  line-height: 25px;
`

const ProfessionalInfo = ({ professional }: { professional: Professional }) => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <TitleImage src={labelAtkids} />
          <TitleText>Informations 100% vérifiées</TitleText>
        </Title>
        <Skill>
          <SkillTitle>Compétences</SkillTitle>
          <SkillSubtitle>Diplômes, certifications, accréditations</SkillSubtitle>
          <List>
            <Item>
              <FaGraduationCap color={'#000000'} />
              <ItemName>{professional.diploma.name},</ItemName> {professional.diploma.description}
            </Item>
            <Item>
              <FaGraduationCap color={'#000000'} />
              <ItemName>{professional.diploma.name},</ItemName> {professional.diploma.description}
            </Item>
            <Item>
              <FaGraduationCap color={'#000000'} />
              <ItemName>{professional.diploma.name},</ItemName> {professional.diploma.description}
            </Item>
            <Item>
              <FaGraduationCap color={'#000000'} /> <ItemName>{professional.diploma.name},</ItemName> {professional.diploma.description}
            </Item>
          </List>
          <SkillSubtitle>Méthode de travail</SkillSubtitle>
          <MethodOfWorking>{professional.method_of_working}</MethodOfWorking>
        </Skill>
      </Container>
    </Wrapper>
  );
};

export default ProfessionalInfo;
