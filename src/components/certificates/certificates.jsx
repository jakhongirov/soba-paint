import './certificates.scss';

import Certificate1 from '../../assets/image/certificate1.png';

function Certificates() {
	const data = [
		{
			id: 1,
			image: Certificate1,
		},
		{
			id: 2,
			image: Certificate1,
		},
		{
			id: 3,
			image: Certificate1,
		},
		{
			id: 4,
			image: Certificate1,
		},
	];

	return (
		<section className='team'>
			<div className='container'>
				<p className='team__title'>ПОЗНАКОМЬТЕСЬ С НАШЕЙ КОМАНДОЙ</p>
				<h2 className='team__headding'>Сертификаты</h2>

				<ul className='team__list'>
					{data.map((e, i) => (
						<li className='team__item' key={i}>
							<img
								className='team__item__img'
								src={e.image}
								alt='Certificates'
								width={330}
								height={340}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Certificates;
