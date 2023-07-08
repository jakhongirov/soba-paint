import './awards.scss';

function Awards() {
	const data = [
		{
			id: 1,
			year: 2018,
			title: 'Best design project',
			desc: 'My partners with businesses across every major industry to make amazing products and connect the dots between people.',
		},
		{
			id: 1,
			year: 2018,
			title: 'Best design project',
			desc: 'My partners with businesses across every major industry to make amazing products and connect the dots between people.',
		},
		{
			id: 1,
			year: 2018,
			title: 'Best design project',
			desc: 'My partners with businesses across every major industry to make amazing products and connect the dots between people.',
		},
	];

	return (
		<section className='awards'>
			<div className='container'>
				<p className='awards__title'>НАША КОМАНДА</p>
				<h2 className='awards__headding'>Наши награды</h2>

				<ul className='awards__list'>
					{data.map((e, i) => (
						<li className='awards__item' key={i}>
							<p className='awards__item__date'>{e.year}</p>
							<h3 className='awards__item__title'>{e.title}</h3>
							<p className='awards__item__desc'>{e.desc}</p>

							<div className='awards__item__arrow'>
								<svg
									fill='#8d8d8d'
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='25'
									viewBox='0 0 55 55'
									id='arrow'>
									<path d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z'></path>
								</svg>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Awards;
