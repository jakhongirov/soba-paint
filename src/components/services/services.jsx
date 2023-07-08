import './services.scss';

import DeliveryTruck from '../../assets/image/delivery-truck.png';
import Money from '../../assets/image/money.png';
import OnlineSupport from '../../assets/image/onlie-support.png';
import Pay from '../../assets/image/Pay-Icon.png';
import MixImg from '../../assets/image/mix.png';
import MixImg2 from '../../assets/image/mix2.png';
import MixImg3 from '../../assets/image/mix3.png';
import { Link } from 'react-router-dom';

function Services() {
	return (
		<section className='services'>
			<div className='container'>
				<ul className='services__top__list'>
					<li className='services__top__item'>
						<div className='services__icon'>
							<img
								src={DeliveryTruck}
								alt='delivery truck'
								width={50}
								height={44}
							/>
						</div>
						<div className='services__item__info-box'>
							<h3 className='services__item__title'>Доставка</h3>
						</div>
					</li>
					<li className='services__top__item'>
						<div className='services__icon'>
							<img
								src={Money}
								alt='delivery truck'
								width={50}
								height={44}
							/>
						</div>
						<div className='services__item__info-box'>
							<h3 className='services__item__title'>
								Денежная гарантия
							</h3>
						</div>
					</li>
					<li className='services__top__item'>
						<div className='services__icon'>
							<img
								src={OnlineSupport}
								alt='delivery truck'
								width={50}
								height={44}
							/>
						</div>
						<div className='services__item__info-box'>
							<h3 className='services__item__title'>Онлайн поддержка</h3>
						</div>
					</li>
					<li className='services__top__item'>
						<div className='services__icon'>
							<img
								src={Pay}
								alt='delivery truck'
								width={50}
								height={44}
							/>
						</div>
						<div className='services__item__info-box'>
							<h3 className='services__item__title'>Гибкая оплата</h3>
						</div>
					</li>
				</ul>

				<ul className='services__bottom__list'>
					<li className='services__bottom__item'>
						<Link to={'/products'}>
							<img
								src={MixImg}
								alt='mix products'
								width={400}
								height={300}
							/>
						</Link>
					</li>
					<li className='services__bottom__item'>
						<Link to={'/products'}>
							<img
								src={MixImg2}
								alt='mix products'
								width={400}
								height={300}
							/>
						</Link>
					</li>
					<li className='services__bottom__item'>
						<Link to={'/products'}>
							<img
								src={MixImg3}
								alt='mix products'
								width={400}
								height={300}
							/>
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Services;
