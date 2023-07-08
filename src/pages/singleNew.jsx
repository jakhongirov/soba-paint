import { useParams } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import New from '../components/singleNew/singleNew';

function SingleNew() {
	const { id } = useParams();
	return (
		<>
			<Header />

			<main className='main'>
				<New id={id} />
			</main>

			<Footer />
		</>
	);
}

export default SingleNew;
