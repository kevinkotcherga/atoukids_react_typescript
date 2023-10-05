import { useLoaderData } from 'react-router-dom';
import { ProfessionalsData } from '../types/Professional';
import Card from './Card';
import styled from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 20px;
`;

const Title = styled.h2`
	font-size: 40px;
	max-width: 800px;
	text-align: center;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1200px;
	align-items: center;
	justify-content: space-around;
	gap: 100px;
	padding-top: 100px;
`;

const Professionals = () => {
	const { professionals } = useLoaderData() as ProfessionalsData;

	return (
		<Wrapper>
			<Title>
				{professionals.length} professionnels correspondent à vos critères de
				recherche
			</Title>
			<Container>
				{professionals.map(professional => (
					<Card professional={professional} key={professional.id} />
				))}
			</Container>
		</Wrapper>
	);
};

export default Professionals;
