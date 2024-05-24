import About from '@modules/home/components/About';
import Contacts from '@modules/home/components/Contacts';
import Intro from '@modules/home/components/Intro';
import ReportViolation from '@modules/home/components/ReportViolation';
import ShareHoldersInfo from '@modules/home/components/ShareHoldersInfo';

const Home = () => {
	return (
		<>
			<Intro />

			<About>
				<ShareHoldersInfo />
			</About>

			<ReportViolation />
			<Contacts />
		</>
	);
};

export default Home;
