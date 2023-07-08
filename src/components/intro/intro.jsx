import { useEffect, useState } from 'react';
import './intro.scss';

import Banner from '../../assets/image/banner.png';
import Banner2 from '../../assets/image/banner2.png';
import Granit from '../../assets/image/granit.png';

function Intro() {
	const data = [
		{
			id: 1,
			title: 'Travertin Lak',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet ea sunt eos sint consequuntur, porro debitis exercitationem dolor consectetur.',
			image: Banner,
		},
		{
			id: 2,
			title: 'Spray paint',
			desc: `быстросохнущая акриловая
                    спрей краска для внешних и внутренних работ. Обеспечивает яркую и гладкую отделку
                    поверхности. Рекомендуется для окрашивания стальных поверхностей, мебели из дерева,
                    изделий из пластмассы, жалюзи и других подобных объектов. Доступна в разном цвете.
                    Обладает хорошей кроющей способностью, удельной площадью покрытия и защитой от
                    коррозии.`,
			image: Banner2,
		},
		{
			id: 3,
			title: 'Granit',
			desc: `
                двухкомпонентный полисульфидный
                самовыравнивающийся герметик, который наносится методом заливки, и
                также, с помощью специального пистолета. Герметик эффективно
                уплотняет все соединения, подверженные колебаниям, и защищает
                неподвижные соединения от попадания воды.`,
			image: Granit,
		},
	];
	// const [indexWinOne, setIndexWinOne] = useState(0);
	// const sizeImg = data?.length - 1;

	// setInterval(() => {
	//     if (indexWinOne === sizeImg) {
	//         setIndexWinOne(0)
	//     } else {
	//         setIndexWinOne(indexWinOne + 1)
	//     }
	// }, 7000);

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = data.length - 1;
		if (index > lastIndex) {
			setIndex(0);
		}

		if (index < 0) {
			setIndex(lastIndex);
		}
	}, [index, data]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => clearInterval(slider);
	});

	return (
		<section
			className='intro'
			style={{ backgroundImage: `url(${data[index]?.image})` }}>
			<div className='container'>
				<div className='intro__model'>
					<div className='intro__box'>
						<h1 className='intro__heading'>{data[index]?.title}</h1>
						<p className='intro_desc'>{data[index]?.desc}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro;
