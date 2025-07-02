import { useRef, useState } from 'react';
import { allCocktails } from '../../constants/index';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const contentRef = useRef();

	useGSAP(() => {
		const menuTl = gsap.timeline({
			scrollTrigger: {
				trigger: '#menu',
				start: '-30% bottom',
				end: 'center bottom',
				scrub: true,
			},
		});

		menuTl
			.to('#menu', {
				y: -100,
				ease: 'power1.inOut',
			})
			.fromTo(
				'#m-right-leaf',
				{ opacity: 0, yPercent: -20 },
				{ opacity: 100, yPercent: 40, ease: 'power1.inOut' },
				'<'
			)
			.to('#m-left-leaf', {
				y: -10,
				ease: 'power1.inOut',
			});
	});

	useGSAP(() => {
		gsap.fromTo(
			'#title',
			{ opacity: 0, x: -50 },
			{ opacity: 1, duration: 1, x: 0, ease: 'expo.inOut' }
		);
		gsap.fromTo(
			'.cocktail img',
			{ opacity: 0, xPercent: -100 },
			{ xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut' }
		);

		gsap.fromTo(
			'.details h2',
			{ opacity: 0 },
			{ opacity: 100, duration: 2, ease: 'expo.inOut' }
		);

		gsap.fromTo(
			'.details p',
			{ opacity: 0 },
			{ opacity: 100, duration: 2, ease: 'expo.inOut' }
		);
	}, [currentIndex]);

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
				<div className='recipe'>
					<div ref={contentRef} className='info'>
						<p>Recipe for</p>
						<p id='title'>{currentCocktail.name}</p>
					</div>
					<div className='details'>
						<h2>{currentCocktail.title}</h2>
						<p>{currentCocktail.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
