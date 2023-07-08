import './news.scss';
import news from '../../assets/data/news';
import { useNavigate } from 'react-router-dom';

function NewsList() {
	const navigate = useNavigate();

	return (
		<section className='news'>
			<div className='container'>
				<ul className='news__list'>
					{news.map((e, i) => (
						<li className='news__item' key={i}>
							<img
								src={e.image}
								alt={e.title}
								width={400}
								height={200}
							/>
							<h3 className='news__item__title'>{e.title}</h3>
							<p className='news__item__desc'>{e.desc}</p>
							<button
								className='news__item__btn'
								onClick={() => navigate(`/new/${e.id}`)}>
								подробный
							</button>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default NewsList;
