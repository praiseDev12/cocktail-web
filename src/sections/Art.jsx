import { useMediaQuery } from 'react-responsive';
import { featureLists, goodLists } from '../../constants/index';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Art = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	useGSAP(() => {
		const start = isMobile ? 'top 20%' : 'top top';
		const paragraphSplit = SplitText.create('.para', {
			type: 'chars',
		});

		const maskTl = gsap.timeline({
			scrollTrigger: {
				trigger: '#art',
				start: start,
				end: 'bottom center',
				scrub: 1.5,
				pin: true,
			},
		});

		const paraTl = gsap.timeline({
			scrollTrigger: {
				trigger: '#art',
				start: '89% center',
				end: '100% center',
				scrub: 1.5,
			},
		});

		maskTl
			.to('.will-fade', {
				opacity: 0,
				stagger: 0.2,
				color: 'black',
				ease: 'power1.inOut',
			})
			.to('.masked-img', {
				scale: 1.3,
				maskPosition: 'center',
				maskSize: '400%',
				duration: 1,
				ease: 'power1.inOut',
			})
			.to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' })
			.to(
				'.para-container',
				{
					opacity: 1,
				},
				'<'
			);

		paraTl.to(paragraphSplit.chars, {
			color: '#e7d393',
			fontWeight: 'bold',
			stagger: 0.02,
		});
	});

	return (
		<div id='art'>
			<div className='container  mx-auto h-full pt-20'>
				<h2 className='will-fade'>The ART</h2>

				<div className='content'>
					<ul className='space-y-4 will-fade'>
						{goodLists.map((feature, index) => (
							<li key={index} className='flex items-center gap-2'>
								<img src='/images/check.png' alt='check' />
								<p>{feature}</p>
							</li>
						))}
					</ul>

					<div className='cocktail-img mt-30 md:mt-0'>
						<img
							src='/images/under-img.jpg'
							alt='cocktail'
							className='abs-center masked-img size-full object-contain'
						/>
					</div>

					<ul className='space-y-4 will-fade'>
						{featureLists.map((feature, index) => (
							<li key={index} className='flex items-center justify-start gap-2'>
								<img src='/images/check.png' alt='check' />
								<p className='md:w-fit w-60'>{feature}</p>
							</li>
						))}
					</ul>
				</div>

				<div className='masked-container -mt-5'>
					<h2 className='will-fade'>Sip-worthy Perfection</h2>
					<div id='masked-content'>
						<h3>Made with Craft, Poured with Passion</h3>
					</div>
				</div>
			</div>
			<div className='para-container md:absolute md:bottom-0 opacity-0 w-full flex-center'>
				<div className='max-w-[69vw] '>
					<p className='text-center sm:text-sm para'>
						This isn't just a drink, it's a carefully crafted experience just
						for you
					</p>
				</div>
			</div>
		</div>
	);
};

export default Art;
