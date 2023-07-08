import './newsIntro.scss'
import { Link } from 'react-router-dom'

import Arrow from '../../assets/image/contact-arrow.svg'

function NewsIntro() {
    return (
        <section className="news-intro">
            <div className="container">
                <div className='news-intro__model'>
                    <div className='news-intro__box'>
                        <h1 className='news-intro__heading'>Новости</h1>
                        <p className='news-intro__path'>
                            <Link className='news-intro__link' to={'/'}>Главное</Link>
                            <img className='news-intro__arrow' src={Arrow} alt="arrow icon" width={7} height={9} />
                            <span>Новости</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsIntro