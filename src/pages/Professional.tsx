import { useLoaderData } from 'react-router-dom';
import { getProfessional } from '../../data';
import Navbar from '../components/Navbar';
import { ProfessionalData } from '../types/Professional';
import ProfessionalHeader from '../components/ProfessionalHeader';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import ProfessionalInfo from '../components/ProfessionalInfo';
import ScrollToTop from '../components/ScrollToTop';

export async function loader({ params }: { params: any }) {
	const professional = getProfessional(Number(params.professionalId));
	return { professional };
}

const Professional = () => {
	const { professional } = useLoaderData() as ProfessionalData;

	return (
		<>
			<ScrollToTop />
			<Navbar />
			<ProfessionalHeader professional={professional} />
			<ProfessionalInfo professional={professional} />
			<CallToAction />
			<Footer />
		</>
	);
};

export default Professional;
