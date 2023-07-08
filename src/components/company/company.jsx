import './company.scss';
import Logo from '../../assets/image/logo.png';

function Company() {
	return (
		<section className='company'>
			<div className='container'>
				<div className='company__left-box'>
					<img src={Logo} alt='logo' width={550} height={550} />
				</div>

				<div className='company__right-box'>
					<h2 className='company__heading'>ДОБРО ПОЖАЛОВАТЬ В КОМПАНИЮ</h2>

					<p className='company__info'>
						Компания "Soba Point" занимается торговлей строительными
						материалами. Он также импортируется из 5 разных стран: Дубая,
						России, Казахстана, Китая, Турции, Ирана. В этой компании вы
						можете купить все необходимые материалы для строительства. В
						перечень ввозимых товаров входят: лакокрасочная продукция,
						герметики, монтажная пена. Компания также производит
						собственную продукцию: травертин, эмульсию, отточенто,
						лакокрасочную продукцию. Все товары реализуются по всему
						Узбекистану. Специалисты компании помогут подобрать правильные
						строительные материалы для любых ситуаций. Компания создана в
						2020 году, количество сотрудников 60 человек. Также привезем
						обои из Беларуси
					</p>
				</div>
			</div>
		</section>
	);
}

export default Company;
