import './sendmessage.scss';

function SendMessage() {
	const sendMessageBot = (e) => {
		e.preventDefault();
		const { name, phone, message } = e.target.elements;
		const token = '6169884486:AAHIAiMstT_vbF5k7v1fntrdrsXoNbjnfSw';
		const chat_id = -871572797;
		const text = `
            name: ${name.value} %0A phone: ${phone.value} %0A message: ${message.value}
        `;

		const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

		let api = new XMLHttpRequest();
		api.open('GET', url, true);
		api.send();

		name.value = null;
		phone.value = null;
		message.value = null;
		console.log('Message sent');
	};

	return (
		<section className='send-message'>
			<div className='container'>
				<p className='send-message__title'>ДОБРО ПОЖАЛОВАТЬ В КОМПАНИЮ</p>
				<h2 className='send-message__headding'>Отправить сообщение</h2>

				<form className='send-message__form' onSubmit={sendMessageBot} autoComplete='off'>
					<div className='send-message__input-box'>
						<input
							className='send-message__input-name'
							type='text'
							name='name'
							placeholder='Ваше имя'
						/>
						<input							className='send-message__input-phone'
							type='text'
							name='phone'
							placeholder='Ваш номер телефона'
						/>
					</div>

					<textarea
						className='send-message__input-message'
						placeholder='Сообщение'
						name='message'
						cols='0'
						rows='10'></textarea>

					<button className='send-message__btn'>
						Отправлять
						<svg
							fill='#fff'
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='25'
							viewBox='0 0 55 55'
							id='arrow'>
							<path d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z'></path>
						</svg>
					</button>
				</form>
			</div>
		</section>
	);
}

export default SendMessage;
