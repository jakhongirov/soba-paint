import './singleNew.scss';
import news from '../../assets/data/news';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function New({ id }) {
	const [singleNew, setSingleNew] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		const foundNew = news.find((e) => e.id === Number(id));
		setSingleNew(foundNew);
	}, [id]);

	return (
		<section className='new'>
			<div className='container'>
				<div className='new__box'>
					<img src={singleNew?.image} alt={singleNew?.title} />
					<h2 className='new__title'>{singleNew?.title}</h2>
					<p className='new__desc'>{singleNew?.desc}</p>
					<button
						className='new__btn'
						onClick={() => navigate(-1)}>назад</button>
				</div>
			</div>
		</section>
	);
}

export default New;
