import styled from 'styled-components';

const Wrapper = styled.section`
	min-height: 80px;
	background: #ffffff;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 99;
	display: flex;
`;

const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	padding: 5px 15px;
	margin: auto;
	display: flex;
	justify-content: space-between;
`

const List = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	list-style-type: none;
`;

const Item = styled.ul`
	margin: 0 5px;
	box-shadow: 0px 2px 6px 3px rgb(0 0 0 / 10%);
	border-radius: 30px;
	padding: 0.6rem 1.2rem;
	cursor: pointer;
	font-weight: 500;
`;

const YellowItem = styled(Item)`
	background-color: #ffb100;
	box-shadow: 0px 2px 6px 3px rgb(255 177 0 / 10%);
`;

const BlackItem = styled(Item)`
	background-color: #000000;
	color: #ffffff;
`;

const GreenItem = styled(Item)`
	background-color: #00d3b7;
`;

const Navbar = () => {
	return (
		<Wrapper>
			<Container>
				<List>
					<Item>Services et tarifs</Item>
					<YellowItem>Annuaire</YellowItem>
					<Item>atou'MAG</Item>
					<YellowItem>Ateliers</YellowItem>
					<Item>atou'LIVRES</Item>
					<Item>A propos</Item>
				</List>
				<List>
					<BlackItem>Pro ?</BlackItem>
					<BlackItem>Famille ?</BlackItem>
					<GreenItem>Se connecter</GreenItem>
				</List>
			</Container>
		</Wrapper>
	);
};

export default Navbar;
