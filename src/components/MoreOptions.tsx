import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 90%;
	margin: 50px auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Text = styled.p`
	font-weight: 600;
`;

const List = styled.p`
	display: flex;
	margin: 0;
	padding: 0;
	list-style-type: none;
`;

const Item = styled.p`
	margin: 10px 5px;
	box-shadow: 0px 2px 6px 3px rgb(0 0 0 / 10%);
	border-radius: 4px;
	padding: 10px 70px;
	background-color: #fff;
`;

const MoreOptions = () => {
	return (
		<Wrapper>
			<Text>Besoin d'affiner vos critères de recherche ?</Text>
			<List>
				<Item>
					<span>Pour quoi ?</span>
					<IoIosArrowDown style={{ marginLeft: '5px' }} />
				</Item>
				<Item>
					<span>Disponibilité ?</span>
					<IoIosArrowDown style={{ marginLeft: '5px' }} />
				</Item>
				<Item>
					<span>Lieu ?</span>
					<IoIosArrowDown style={{ marginLeft: '5px' }} />
				</Item>
			</List>
		</Wrapper>
	);
};

export default MoreOptions;
