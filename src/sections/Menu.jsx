import { useState } from 'react';
import { allCocktails } from '../../constants/index';

const Menu = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const totalCocktails = allCocktails.length;

	const goToSlide = (index) => {
		const newIndex = (index + totalCocktails) % totalCocktails;

		setCurrentIndex(newIndex);
	};

	const getCocktailAt = (indexOffset) => {
		return allCocktails[
			(currentIndex + indexOffset + totalCocktails) % totalCocktails
		];
	};

	const currentCocktail = getCocktailAt(0);
	const prevCocktail = getCocktailAt(-1);
	const nextCocktail = getCocktailAt(1);

	return (
		<section id='menu' aria-labelledby='menu-heading'>
			<img
				src='/images/slider-left-leaf.png'
				alt='left-leaf'
				id='m-left-leaf'
			/>
			<img
				src='/images/slider-right-leaf.png'
				alt='right-leaf'
				id='m-right-leaf'
			/>
			<h2 id='menu-heading' className='sr-only'>
				Cocktail Menu
			</h2>

			<nav className='cocktail-tabs' aria-label='cocktail Navigation'>
				{allCocktails.map((cocktail, index) => {
					const isActive = index === currentIndex;

					return (
						<button
							key={cocktail.id}
							className={` ${
								isActive
									? 'text-white border-white'
									: 'text-white/50 border-white/50 hover:text-white/80 hover:border-white/80'
							}`}
							onClick={() => goToSlide(index)}>
							{cocktail.name}
						</button>
					);
				})}
			</nav>

			<div className='content'>
				<div className='arrows'>
					<button
						className='text-left group'
						onClick={() => goToSlide(currentIndex - 1)}>
						<span>{prevCocktail.name}</span>
						<img
							src='/images/right-arrow.png'
							alt='right arrow'
							aria-hidden='true'
							className='transition ease-in-out duration-500 group-hover:-translate-x-3'
						/>
					</button>
					<button
						className='text-left group'
						onClick={() => goToSlide(currentIndex + 1)}>
						<span>{nextCocktail.name}</span>
						<img
							src='/images/left-arrow.png'
							alt='left arrow'
							aria-hidden='true'
							className='transition ease-in-out duration-500 group-hover:translate-x-3'
						/>
					</button>
				</div>

				<div className='cocktail'>
					<img src={currentCocktail.image} className='object-contain' />
				</div>
			</div>
		</section>
	);
};

export default Menu;
