import './plan.scss';

function Plan() {
	return (
		<section className='plan'>
			<div className='container'>
				<div className='plan__left-box'>
					<img
						src='https://demo2.themelexus.com/hnice/wp-content/uploads/2023/03/about02-accessories01.jpg'
						alt='bathroom imgae'
						width={550}
						height={590}
					/>

					<p className='plan__info'>
						Компания признана мировым лидером в области дизайна ванных
						комнат. и предлагает продукты и услуги исключительного
						качества.
					</p>
				</div>

				<div className='plan__right-box'>
					<p className='plan__title'>ПЛАНИРУЙТЕ ВАННУЮ КОМНАТУ</p>
					<h2 className='plan__heading'>
						Мы разрабатываем элегантные аксессуары. выберите свой стиль.
					</h2>

					<img
						src='https://demo2.themelexus.com/hnice/wp-content/uploads/2023/03/about02-accessories01.jpg'
						alt='bathroom'
						width={639}
						height={470}
					/>
				</div>
			</div>
		</section>
	);
}

export default Plan;
