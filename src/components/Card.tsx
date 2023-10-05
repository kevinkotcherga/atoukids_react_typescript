import flarRegular from '../assets/images/flag-regular.svg';
import starRegular from '../assets/images/star-black.svg';
import { Link } from 'react-router-dom';
import { Professional } from '../types/Professional';
import styled from 'styled-components';
import { FaClinicMedical, FaHome } from 'react-icons/fa';
import React from 'react';

const Container = styled.div`
	box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px 3px;
	background: rgb(255, 255, 255);
	padding: 30px 30px 30px 0px;
	border-radius: 30px;
	display: flex;
	position: relative;
	color: #404040;
	width: 40%;
	font-size: 16px;
`;

const Avatar = styled.div`
	width: 140px;
	border: 2px solid #DB1E5E;
	border-radius: 30px;
	margin-left: -20px;
	height: 185px;
`;

const AvatarImage = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	border-radius: 30px;
`;

const Row = styled.div`
	max-width: 300px;
	margin-left: 50px;
	gap: 5px;
	display: flex;
	flex-direction: column;
`;

const Name = styled.h2`
	color: #db1e5e;
	font-size: 20px;
	margin: 0;
`;

const Job = styled.p`
	font-weight: bold;
	margin: 0;
`;

const City = styled.div`
	display: flex;
	gap: 5px;
`;

const CityImage = styled.img`
	width: 10px;
`;

const Advice = styled.div`
	display: flex;
	flex-direction: column;
	color: #db1e5e;
	font-weight: 600;
	margin: 0;
`;

const Stars = styled.div`
	display: flex;
`;

const Star = styled.img`
	width: 20px;
`;

const WorkplaceText = styled.div`
  margin-right: 5px;
`;

const Workplace = styled.div`
  display: flex;
  align-items: center;
	color: #00D3B7;
	font-weight: 600;
`

const Button = styled.button`
position: absolute;
bottom: -30px;
left: 50%;
transform: translate(-50%);
max-width: 200px;
width: 100%;
height: 60px;
border-radius: 99px;
background-color: #000000;
color: #ffffff;
font-size: 16px;
font-weight: 600;
cursor: pointer;

	&:hover {
	background: #495057;
	}
`

const Card = ({ professional }: { professional: Professional }) => {
	return (
		<Container>
			<Avatar>
				<AvatarImage src={professional.picture} alt="" />
			</Avatar>
			<Row>
				<Name>{professional.name}</Name>
				<Job>{professional.job}</Job>
				<City>
					<CityImage src={flarRegular} alt="" />
					<p>{professional.city}</p>
				</City>
				<Workplace>
					{professional.workplaces.map((workplace, index) => (
						<React.Fragment key={index}>
							<WorkplaceText>
								{workplace === 'En cabinet' ? <FaClinicMedical /> : <FaHome />}
							</WorkplaceText>
							<WorkplaceText>
								{workplace === 'En cabinet' ? 'En cabinet |' : 'A domicile'}
							</WorkplaceText>
						</React.Fragment>
					))}
				</Workplace>
				<Advice>
					<p>0 avis vérifié</p>
					<Stars>
						<Star src={starRegular} />
						<Star src={starRegular} />
						<Star src={starRegular} />
						<Star src={starRegular} />
						<Star src={starRegular} />
					</Stars>
				</Advice>
			</Row>
			<Link to={`professional/${professional.id}`}>
				<Button>Découvrir</Button>
			</Link>
		</Container>
	);
};

export default Card;
