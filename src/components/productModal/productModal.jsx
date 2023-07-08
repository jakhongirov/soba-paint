import './productModal.scss';
import data from '../../assets/data/data';
import { useEffect, useState } from 'react';

function ProductModal({ id, modal, setModal }) {
	const [product, setProduct] = useState({});

	useEffect(() => {
		const findProduct = data.find((e) => e.id === Number(id));
		setProduct(findProduct);
	}, [id]);

	return (
		<div
			className={
				modal ? 'product-modal product-modal--show' : 'product-modal'
			}>
			<div className='product-modal__item'>
				<img
					src={product?.image}
					alt={product?.title}
					width={200}
					height={200}
				/>

				<div className='product-modal__info-box'>
					<div className='product-modal__info__title-box'>
						<h3 className='product-modal__info__title'>
							<span>
								{product?.category
									? product?.category.toUpperCase()
									: ''}
							</span>
						</h3>
						<h3 className='product-modal__info__text'>
							<span>Универсальный</span>
						</h3>
					</div>

					<p className='product-modal__info__desc'>
						<strong>{product?.title}</strong> - {product?.desc}
					</p>
					<p className='product-modal__info__additon-text'>
						цвет - красный/синий/белый
					</p>
					<p className='product-modal__info__additon-text'>
						упаковка - 24 шт./ящ.
					</p>
				</div>

				<button
					className='product-modal__btn'
					onClick={() => setModal(false)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						width='23'
						height='22'
						viewBox='0 0 50 50'>
						<path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z'></path>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default ProductModal;
