import './team.scss';

function Team() {
	const data = [
		{
			id: 1,
			name: 'Mirkamolov Amirxon Shuxratovich',
			image: 'https://static.thenounproject.com/png/4038155-200.png',
			position: 'General Direktor',
		},
		{
			id: 2,
			name: 'Ravshanov Alisher',
			image: 'https://static.thenounproject.com/png/4038155-200.png',
			position: 'Bosh texnolog',
		},
		{
			id: 3,
			name: 'Eshturdiyev Baxtiyor Erkinovich',
			image: 'https://static.thenounproject.com/png/4038155-200.png',
			position: "Finans direktor o'rinbosari",
		},
		{
			id: 4,
			name: 'Murodkulov Amir',
			image: 'https://static.thenounproject.com/png/4038155-200.png',
			position: 'Bosh Buxgalter',
		},
		{
			id: 5,
			name: 'Musurmonov Dilmurod',
			image: 'https://static.thenounproject.com/png/4038155-200.png',
			position: 'Bosh Manager Pol fabrikant',
		},
		{
			id: 6,
			name: 'Boboqulov Kamoliddin',
			image: 'https://static.thenounproject.com/png/4038155-200.png',
			position: 'Zav Sklad',
		},
		{
			id: 7,
			name: 'Rayimqulova Surayyo',
			image: 'https://static.thenounproject.com/png/4038155-200.png',
			position: 'Operator Manager',
		},
	];

	return (
		<section className='team'>
			<div className='container'>
				<h2 className='team__headding'>НАША КОМАНДА</h2>

				<ul className='team__list'>
					{data.map((e, i) => (
						<li className='team__item' key={i}>
							<img
								className='team__item__img'
								src={e.image}
								alt='our teams members image'
								width={200}
								height={240}
							/>
							<h3 className='team__item__title'>{e.name}</h3>
							<p className='team__item__text'>{e.position}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Team;
