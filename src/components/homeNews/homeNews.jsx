import './homeNews.scss';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper';

import img1 from '../../assets/image/2023-06-22 00.46.36.jpg';
import img2 from '../../assets/image/2023-06-22 00.51.04.jpg';
import img3 from '../../assets/image/2023-06-22 00.52.37.jpg';
import img4 from '../../assets/image/2023-06-22 00.53.36.jpg';
import img5 from '../../assets/image/2023-06-22 00.54.52.jpg';
import img6 from '../../assets/image/2023-06-22 00.55.50.jpg';
import { Link } from 'react-router-dom';

function HomeNews() {
	const data = [
		{
			id: 1,
			image: img1,
		},
		{
			id: 2,
			image: img2,
		},
		{
			id: 3,
			image: img3,
		},
		{
			id: 4,
			image: img4,
		},
		{
			id: 5,
			image: img5,
		},
		{
			id: 6,
			image: img6,
		},
	];

	const [SlidesCount, setSlidesCount] = useState(3);

	useEffect(() => {
		if (window.innerWidth < 530) {
			setSlidesCount(1);
		} else if (window.innerWidth < 800) {
			setSlidesCount(2);
		} else {
			setSlidesCount(3);
		}
	}, []);

	return (
		<section className='home-news'>
			<div className='container'>
				<p className='home-news__title'>НАШИ ПОСЛЕДНИЕ НОВОСТИ</p>
				<h2 className='home-news__headding'>
					Последние статьи прямо из блога
				</h2>

				<Swiper
					slidesPerView={SlidesCount}
					spaceBetween={25}
					freeMode={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					modules={[FreeMode, Autoplay]}
					className='mySwiper home-news__list'>
					{data.map((e, i) => (
						<SwiperSlide className='home-news__item' key={i}>
							<Link to='https://www.instagram.com/asmacouzbekistan/' target='_blank'>
								<img
									className='home-news__image'
									src={e.image}
									alt='bathroom things'
									width={450}
									height={210}
								/>
								{/* 
							<button className='home-news__item__btn'>
								<span>Читать далее</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='25'
									viewBox='0 0 55 55'
									id='arrow'>
									<path d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z'></path>
								</svg>
							</button> */}
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default HomeNews;
