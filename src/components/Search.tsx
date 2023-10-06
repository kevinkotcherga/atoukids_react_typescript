import arrow from '../assets/images/downCurvedArrow.png';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form, useLoaderData } from 'react-router-dom';
import MoreOptions from './MoreOptions';
import { useEffect, useState } from 'react';
import { SearchData } from '../types/SearchData';
import dropDown from '../assets/images/ak-iconDropdown.svg';

const Wrapper = styled.section`
	width: 100%;
	position: relative;
`;

const Container = styled.div`
	margin: auto;
	margin-top: -40px;
	width: 1200px;
	background-color: #00d3b7;
	padding: 0 20px 20px 20px;
	border-radius: 4px;
`;

const Title = styled.h2`
	text-align: center;
	font-size: 40px;
	font-weight: 700;
	line-height: 1.2;
	padding-top: 50px;
	margin-bottom: 45px;
`;

const Image = styled.img`
	position: absolute;
	height: 100px;
	width: 200px;
	margin: -70px 480px 0;
	vertical-align: middle;
	border-style: none;
`;

const Row = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const Left = styled.div`
	display: flex;
	width: 55%;
	flex-direction: column;
	position: relative;
	height: 150px;
`;

const Right = styled.div`
	width: 40%;
`;

const SearchBar = styled.div`
	background-color: #fff;
	border-radius: 4px;
	display: flex;
	position: relative;
`;

const Label = styled.label`
	display: flex;
	align-items: center;
	padding: 0.375rem 0.75rem;
	margin: 10px 0;
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.5;
	color: #00d3b7;
	text-align: center;
	white-space: nowrap;
	border-right: 2px solid #00d3b7;
`;

const Select = styled.select`
	-webkit-appearance: none;
	-moz-appearance: none;
	border: none;
	background: transparent;
	background-repeat: no-repeat;
	background-position-x: 100%;
	margin: 5px 5px 5px 0;
	height: 50px;
	background-image: url(${dropDown});
	padding: 0 15px;
	width: 100%;
	cursor: pointer;
	&:hover,
	&:focus {
		outline: none;
	}
`;

const Button = styled.button`
	margin-top: 20px;
	padding: 15px 30px;
	border-radius: 4px;
	background-color: #000;
	color: #fff;
	cursor: pointer;
	position: absolute;
	bottom: 0;
	right: 0;
	align-items: center;
	display: flex;
	font-size: 16px;
	font-weight: 400;
`;

const ErrorMessage = styled.div`
	position: absolute;
	background-color: #ffffff;
	bottom: -130%;
	left: 50%;
	transform: translate(-50%);
	z-index: 99;
	font-weight: 500;
	padding: 10px;

	&::after {
		width: 20px;
		height: 20px;
		transform: rotate(45deg);
		z-index: -1;
		content: "";
		top: -10px;
		left: 50%;
		position: absolute;
		background-color: #ffffff;
	}
`

const Search = () => {
	const { city, search } = useLoaderData() as SearchData;
	const [errorMessage, setErrorMessage] = useState('');
	const cityElement = document.getElementById('city') as HTMLSelectElement;
	const searchElement = document.getElementById('search') as HTMLSelectElement;

	useEffect(() => {
		if (cityElement && searchElement) {
			cityElement.value = city || "";
			searchElement.value = search || "0";
		}
	}, [city, search]);

	const handleSubmit = () => {
		const cityElement = document.getElementById('city') as HTMLSelectElement;
		if (cityElement.value === '') {
			setErrorMessage('Sélectionnez un élement dans la liste.')
			setTimeout(() => {
				setErrorMessage('');
			}, 2000);
		} else {
			setErrorMessage('')
		}
	}

	return (
		<Wrapper>
			<Container>
				<Image src={arrow} alt="" />
				<Title>Trouvez le professionnel qui vous correspond</Title>
				<Form>
					<Row>
						<Left>
							<SearchBar>
								<Label>Pour qui ?</Label>
								<Select id="search" name="search" defaultValue={search}>
									<option value="0">Sélectionnez...</option>
									<option>Parents</option>
									<option>Lycéens et étudiants</option>
								</Select>
							</SearchBar>
							<Button onClick={handleSubmit} type="submit">
								<AiOutlineSearch
									size={20}
									color={'white'}
									style={{ marginRight: '10px' }}
								/>
								Je trouve
							</Button>
						</Left>
						<Right>
							<SearchBar>
								<Select id="city" name="city" defaultValue={city || ""}>
									<option value="">Sélectionnez une ville...</option>
									<option>Paris</option>
									<option>Toulouse</option>
									<option>Lyon</option>
								</Select>
								<img src="" alt="" />
								{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
							</SearchBar>
						</Right>
					</Row>
				</Form>
				<MoreOptions />
			</Container>
		</Wrapper>
	);
};

export default Search;
