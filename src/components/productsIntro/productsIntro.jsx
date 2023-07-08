import './productsIntro.scss'
import { Link } from 'react-router-dom'

import Arrow from '../../assets/image/contact-arrow.svg'

function ProductsIntro() {
    return (
        <section className="products-intro">
            <div className="container">
                <div className='products-intro__model'>
                    <div className='products-intro__box'>
                        <h1 className='products-intro__heading'>Продукты</h1>
                        <p className='products-intro__path'>
                            <Link className='products-intro__link' to={'/'}>Главное</Link>
                            <img className='products-intro__arrow' src={Arrow} alt="arrow icon" width={7} height={9} />
                            <span>Продукты</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsIntro