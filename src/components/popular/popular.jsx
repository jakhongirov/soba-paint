import './popular.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper';
import { useEffect, useState } from 'react';
import data from '../../assets/data/data';
import ProductModal from '../productModal/productModal';

function Popular() {
	const [SlidesCount, setSlidesCount] = useState(5);
	const slider1 = data.slice(0, 30);
	const slider2 = data.slice(30);
	const [modal, setModal] = useState(false);
	const [id, setId] = useState();

	useEffect(() => {
		if (window.innerWidth < 450) {
			setSlidesCount(2);
		} else if (window.innerWidth < 800) {
			setSlidesCount(3);
		} else {
			setSlidesCount(5);
		}
	}, []);

	return (
		<section className='popular'>
			<div className='container'>
				<p className='popular__title'>РЕКОМЕНДУЕМЫЙ ПРОДУКТ</p>
				<h2 className='popular__headding'>
					Наши самые популярные продукты
				</h2>

				<Swiper
					slidesPerView={SlidesCount}
					spaceBetween={25}
					freeMode={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[FreeMode, Autoplay]}
					className='mySwiper popular__list'>
					{slider1.map((e, i) => (
						<SwiperSlide className='popular__item' key={i}>
							<img
								className='popular__image'
								onClick={() => {
									setId(e.id);
									setModal(true);
								}}
								src={e.image}
								alt='bathroom things'
								width={210}
								height={210}
							/>
							<h4 className='popular__item__title'>{e.title}</h4>
						</SwiperSlide>
					))}
				</Swiper>

				<Swiper
					slidesPerView={SlidesCount}
					spaceBetween={25}
					freeMode={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[FreeMode, Autoplay]}
					className='mySwiper popular__list'>
					{slider2.map((e, i) => (
						<SwiperSlide className='popular__item' key={i}>
							<img
								className='popular__image'
								onClick={() => {
									setId(e.id);
									setModal(true);
								}}
								src={e.image}
								alt='bathroom things'
								width={210}
								height={210}
							/>
							<h4 className='popular__item__title'>{e.title}</h4>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<ProductModal id={id} modal={modal} setModal={setModal} />
		</section>
	);
}

export default Popular;
