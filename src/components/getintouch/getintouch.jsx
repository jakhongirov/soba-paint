import './getintouch.scss';

import Address from '../../assets/image/address.svg';
import GetinTouch from '../../assets/image/get-in-touch.svg';
import Clock from '../../assets/image/clock.svg';

function GetInTouch() {
	return (
		<section className='contact'>
			<div className='container'>
				<h2 className='contact__heading'>Свяжись с нами</h2>

				<p className='contact__text'>
					Свяжитесь с нами, чтобы обсудить потребности ваших сотрудников в
					благополучии сегодня. Пожалуйста, позвоните нам, напишите нам по
					электронной почте или заполните контактную форму, и мы свяжемся с
					вами.
				</p>

				<ul className='contact__list'>
					<li className='contact__item'>
						<img
							className='contact__item__icon'
							src={Address}
							alt='address icon'
							width={70}
							height={70}
						/>
						<h4 className='contact__item__title'>Адрес</h4>
						<p className='contact__item__text'>
							Головной офис: Mirzo Bedil ko'chasi, Samarqand <br />
						</p>
					</li>

					<li className='contact__item'>
						<img
							className='contact__item__icon'
							src={GetinTouch}
							alt='address icon'
							width={40}
							height={40}
						/>
						<h4 className='contact__item__title'>Связаться</h4>
						<p className='contact__item__text'>
							Мобильный: +998 98 200-73-88 <br />
							Мобильный: +998 90 503-20-20
							<br />
							Мобильный: +998 95 412-22-20
						</p>
					</li>

					<li className='contact__item'>
						<img
							className='contact__item__icon'
							src={Clock}
							alt='address icon'
							width={70}
							height={70}
						/>
						<h4 className='contact__item__title'>Часы работы</h4>
						<p className='contact__item__text'>
							Понедельник-пятница: с 9:00 до 18:00 <br />
							Суббота: с 9:00 до полудня <br />
							<span>Воскресенье: выходной</span>
						</p>
					</li>
				</ul>

				<div className='contact__map-box'>
					<iframe
						className='contact__map'
						src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6141.785950755488!2d66.905468!3d39.674622!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQwJzI4LjYiTiA2NsKwNTQnMTkuNyJF!5e0!3m2!1sen!2s!4v1684504234238!5m2!1sen!2s'
						loading='lazy'
						style={{ border: 'none' }}></iframe>
				</div>
			</div>
		</section>
	);
}

export default GetInTouch;
