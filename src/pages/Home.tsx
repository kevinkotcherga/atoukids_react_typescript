import { useLoaderData } from 'react-router-dom';
import { getProfessionals } from '../../data';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Professionals from '../components/Professionals';
import Search from '../components/Search';
import { ProfessionalsData } from '../types/Professional';
import Introduction from '../components/Introduction';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export async function loader({ request }: { request: Request }) {
	const url = new URL(request.url);
	const search = url.searchParams.get('search');
	const city = url.searchParams.get('city');
	if (city && search) {
		const professionals = getProfessionals(city, search);
		return { professionals, city, search };
	}
	return { city, search };
}

const Home = () => {
	const { professionals } = useLoaderData() as ProfessionalsData;

	return (
		<>
			<Navbar />
			<Header />
			<Search />
			{professionals ? <Professionals /> : null}
			<Introduction />
			<CallToAction />
			<Footer />
		</>
	);
};

export default Home;
