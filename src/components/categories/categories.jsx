import './categories.scss';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper';
import data from '../../assets/data/data';
import ProductModal from '../productModal/productModal';

function Categories() {
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
		<section className='categories'>
			<div className='container'>
				<div className='categories__box'>
					<div className='categories__heading-box'>
						<p className='categories__title'>МАГАЗИН ПО КАТЕГОРИИ</p>
						<h2 className='categories__heading'>
							Продукты, необходимые для желаемого образа
						</h2>
					</div>
					<p className='categories__info'>
						С нашими коллекциями ванная комната становится оазисом
						роскоши. изготовленные со всего мира. Раковины из шамота
						добавляют вневременности стиль, ванны сдержанной красоты
						становятся центральными элементами, душевые кабины и смесители
						во множестве стилей блестяще.
					</p>
				</div>

				<Swiper
					slidesPerView={SlidesCount}
					spaceBetween={25}
					freeMode={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[FreeMode, Autoplay]}
					className='mySwiper categories__list'>
					{slider1.map((e, i) => (
						<SwiperSlide className='categories__item' key={i}>
							<img
								className='categories__image'
								onClick={() => {
									setId(e.id);
									setModal(true);
								}}
								src={e.image}
								alt='bathroom things'
								width={210}
								height={210}
							/>
							<h4 className='categories__item__title'>{e.title}</h4>
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
					className='mySwiper categories__list'>
					{slider2.map((e, i) => (
						<SwiperSlide className='categories__item' key={i}>
							<img
								className='categories__image'
								onClick={() => {
									setId(e.id);
									setModal(true);
								}}
								src={e.image}
								alt='bathroom things'
								width={210}
								height={210}
							/>
							<h4 className='categories__item__title'>{e.title}</h4>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<ProductModal id={id} modal={modal} setModal={setModal} />
		</section>
	);
}

export default Categories;
