import './productsList.scss';
import { useState } from 'react';
import data from '../../assets/data/data';
import ProductModal from '../productModal/productModal';

function ProductsList() {
	const [modal, setModal] = useState(false);
	const [id, setId] = useState();
	const [category, setCategory] = useState('all');

	return (
		<section className='products-list'>
			<div className='container'>
				<p className='products-list__title'>НАШИ ПРОДУКТЫ</p>
				<h2 className='products-list__headding'>Сопутствующие товары</h2>

				<ul className='products-list__category__list'>
					<li
						className={
							category === 'all'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('all')}>
						All
					</li>
					<li
						className={
							category === 'asmaco'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('asmaco')}>
						Asmaco
					</li>
					<li
						className={
							category === 'adhesive'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('adhesive')}>
						Adhesive
					</li>
					<li
						className={
							category === 'woldfix'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('woldfix')}>
						Woldfix
					</li>
					<li
						className={
							category === 'spray'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('spray')}>
						Sprey
					</li>
					<li
						className={
							category === 'emal'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('emal')}>
						Emal
					</li>
					<li
						className={
							category === 'fasad'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('fasad')}>
						Fasad
					</li>
					<li
						className={
							category === 'gold'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('gold')}>
						Gold
					</li>
					<li
						className={
							category === 'carburetor'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('carburetor')}>
						carburetor
					</li>
					<li
						className={
							category === 'plastic'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('plastic')}>
						Plastic
					</li>
					<li
						className={
							category === 'germetik'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('germetik')}>
						Germetik
					</li>
					<li
						className={
							category === 'instant'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('instant')}>
						Instant
					</li>
					<li
						className={
							category === 'mirror'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('mirror')}>
						Mirror
					</li>
					<li
						className={
							category === 'ottocento'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('ottocento')}>
						Ottocento
					</li>
					<li
						className={
							category === 'panda'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('panda')}>
						Panda
					</li>
					<li
						className={
							category === 'firestop'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('firestop')}>
						Firestop
					</li>
					<li
						className={
							category === 'bond'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('bond')}>
						Bond
					</li>
					<li
						className={
							category === 'rtv'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('rtv')}>
						RTV
					</li>
					<li
						className={
							category === 'izolenta'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('izolenta')}>
						Izolenta
					</li>
					<li
						className={
							category === 'brake'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('brake')}>
						Brake
					</li>
					<li
						className={
							category === 'akrilovaya'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('akrilovaya')}>
						Akrilovaya
					</li>
					<li
						className={
							category === 'lak'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('lak')}>
						Lak
					</li>
					<li
						className={
							category === 'gruntovka'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('gruntovka')}>
						Gruntovka
					</li>
					<li
						className={
							category === 'soba'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('soba')}>
						Soba
					</li>
					<li
						className={
							category === 'moyushaya'
								? 'products-list__category__item products-list__category__item--selected'
								: 'products-list__category__item'
						}
						onClick={() => setCategory('moyushaya')}>
						Moyushaya
					</li>
				</ul>

				<ul className='products__list'>
					{data.map((e, i) => {
						if (category === 'all') {
							return (
								<li className='products__item' key={i}>
									<img
										className='products__item__img'
										onClick={() => {
											setId(e.id);
											setModal(true);
										}}
										src={e.image}
										alt={e.title}
										width={210}
										height={210}
									/>
									<h3 className='products__item__title'>{e.title}</h3>

									<button
												className='products__item__btn'
												onClick={() => {
													setId(e.id);
													setModal(true);
												}}>
													подробный
												</button>
								</li>
							);
						} else {
							return (
								<>
									{e.category === category ? (
										<li className='products__item' key={i}>
											<img
												className='products__item__img'
												src={e.image}
												alt={e.title}
												width={210}
												height={210}
											/>
											<h3 className='products__item__title'>
												{e.title}
											</h3>

											<button
												className='products__item__btn'
												onClick={() => {
													setId(e.id);
													setModal(true);
												}}>
													подробный
												</button>
										</li>
									) : (
										''
									)}
								</>
							);
						}
					})}
				</ul>

				<ProductModal id={id} modal={modal} setModal={setModal} />
			</div>
		</section>
	);
}

export default ProductsList;
