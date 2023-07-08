import './footer.scss';
import { Link } from 'react-router-dom';

import Logo from '../../assets/image/logo.png';

function Footer() {
	const sendMessageBot = (e) => {
		e.preventDefault();
		const { name, phone } = e.target.elements;
		const token = '6169884486:AAHIAiMstT_vbF5k7v1fntrdrsXoNbjnfSw';
		const chat_id = -871572797;
		const text = `
				  name: ${name.value} %0A phone: ${phone.value}
			 `;

		const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

		let api = new XMLHttpRequest();
		api.open('GET', url, true);
		api.send();

		name.value = null;
		phone.value = null;
		console.log('Message sent');
	};

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__left-box'>
					<ul className='footer__left__list-left'>
						<li className='footer__left__item-left'>
							<img
								className='logo'
								src={Logo}
								alt='logo'
								width={50}
								height={50}
							/>
						</li>
						<li className='footer__left__item-left'>
							<p className='footer__left__item-left__info'>
								Ванные комнаты хорошие. является лидером в области
								укладки и ремонта полов в стране с эффективной
								стратегией.
							</p>
						</li>
						<li className='footer__left__item-left'>
							<a
								className='footer__left__item-left__tel'
								href='tel:+998982007388'>
								+998 98 200-73-88
							</a>
							<span className='footer__left__item-left__text'>
								Круглосуточно
							</span>
						</li>
					</ul>
				</div>

				<div className='footer__right-box'>
					<ul className='footer__right__list-right'>
						<li className='footer__right__item-right'>
							<h4 className='footer__right__item-right__heading'>
								Контакт
							</h4>
						</li>
						<li className='footer__right__item-right'>
							<p className='footer__right__item-right__text'>
								Mirzo Bedil ko'chasi, Samarqand
							</p>
						</li>
						<li className='footer__right__item-right'>
							<a
								className='footer__right__item-right__link'
								href='tel:+998905032020'>
								+998 (90) 503-20-20
							</a>
						</li>
						<li className='footer__right__item-right'>
							<a
								className='footer__right__item-right__link'
								href='tel:+998982007388'>
								+998 (98) 200-73-88
							</a>
						</li>
						<li className='footer__right__item-right'>
							<a
								className='footer__right__item-right__link'
								href='tel:+998954122220'>
								+998 (95) 412-22-20
							</a>
						</li>
					</ul>

					<div className='footer__form-box'>
						<form onSubmit={sendMessageBot} autoComplete='off'>
							<h3 className='footer__form__title'>
								Отправить сообщение
							</h3>
							<input
								className='footer__input-name'
								type='text'
								name='name'
								placeholder='Имя'
								required
							/>
							<input
								className='footer__input-name'
								type='text'
								name='phone'
								placeholder='Телефон'
								required
							/>
							<button className='footer__form-btn'>Отправлять</button>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
