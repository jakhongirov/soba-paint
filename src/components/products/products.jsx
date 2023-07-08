import './products.scss';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper';
import data from '../../assets/data/data';
import ProductModal from '../productModal/productModal';
import { useNavigate } from 'react-router-dom';

function Products() {
	const [SlidesCount, setSlidesCount] = useState(5);
	const [modal, setModal] = useState(false);
	const [id, setId] = useState();
	const navigate = useNavigate();

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
		<section className='products'>
			<div className='container'>
				<p className='products__title'>НЕВЕРНЫЙ БЕСТСЕЛЛЕР</p>
				<h2 className='products__headding'>
					Удивительные продукты, готовые к вашему употреблению
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
					className='mySwiper products__list'>
					{data.map((e, i) => (
						<SwiperSlide className='products__item' key={i}>
							<img
								className='products__image'
								onClick={() => {
									setId(e.id);
									setModal(true);
								}}
								src={e.image}
								alt='bathroom things'
								width={210}
								height={210}
							/>
							<h4 className='products__item__title'>{e.title}</h4>
						</SwiperSlide>
					))}
				</Swiper>

				<div className='products__box'>
					<ul className='products__left__list'>
						<li
							className='products__left__item'
							onClick={() => navigate('/products')}>
							<h3 className='products__left__title'>Akrill</h3>
						</li>
						<li
							className='products__left__item'
							onClick={() => navigate('/products')}>
							<h3 className='products__left__title'>Panda emal</h3>
						</li>
					</ul>

					<div
						className='products__middle__box'
						onClick={() => navigate('/products')}>
						<h3 className='products__middle__title'>Fire stop</h3>
					</div>

					<ul className='products__right__list'>
						<li
							className='products__right__item'
							onClick={() => navigate('/products')}>
							<h3 className='products__right__title'>Soba</h3>
						</li>
						<li
							className='products__right__item'
							onClick={() => navigate('/products')}>
							<h3 className='products__right__title'>Gruntovka</h3>
						</li>
					</ul>
				</div>
			</div>

			<ProductModal id={id} modal={modal} setModal={setModal} />
		</section>
	);
}

export default Products;
