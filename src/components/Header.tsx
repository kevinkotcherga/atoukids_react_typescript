import akLogo from '../assets/images/ak-logo.svg';
import hero from '../assets/images/atouKIDS-home-hero.jpg';
import styled from 'styled-components';
import overlay from '../assets/images/home-image-overlay.svg';

const Wrapper = styled.header`
	padding-top: 8rem;
	padding-bottom: 4rem;
	background: url(${hero}) no-repeat center center;
	background-size: cover;
	min-height: 650px;
	margin-top: 75px;
	position: relative;
`;

const Overlay = styled.div`
	position: absolute;
	background: url(${overlay})
		no-repeat center center;
	background-size: cover;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
`;

const Container = styled.div`
	position: absolute;
	width: 100%;
`;

const Row = styled.div`
	margin: auto;
	max-width: 1200px;
	padding-right: 15px;
	padding-left: 15px;
`;

const Image = styled.img`
	vertical-align: middle;
	width: 500px;
`;

const Title = styled.h1`
	font-weight: 500;
	line-height: 1.2;
	margin-top: 20px;
	margin-bottom: 3rem;
	font-size: 55px;
	width: 60%;
	font-weight: 700;
`;

const SubTitle = styled.h4`
	color: #ffb100;
	padding: 3em 0;
	font-size: 20px;
`;

const RedSubTitle = styled.span`
	color: #ff2c4e;
`;

const Header = () => {
	return (
		<Wrapper>
			<Overlay />
			<Container>
				<Row>
					<Image src={akLogo} alt="AtouKids logo" />
					<SubTitle>
						Parents ravis, <RedSubTitle>enfants épanouis</RedSubTitle>
					</SubTitle>
					<Title>
						La plateforme qui accompagne les parents à chaque étape de leur vie
						de famille.
					</Title>
				</Row>
			</Container>
		</Wrapper>
	);
};

export default Header;
