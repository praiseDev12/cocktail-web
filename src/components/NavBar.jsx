import { useGSAP } from '@gsap/react';
import { navLinks } from '../../constants/index';
import gsap from 'gsap';

const NavBar = () => {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: 'nav',
				start: 'bottom top',
			},
		});

		navTween.fromTo(
			'nav',
			{ backgroundColor: 'transparent' },
			{
				backgroundColor: '#00000050',
				backgroundFilter: 'blur(10px)',
				duration: 1,
				ease: 'power1.inOut',
			}
		);
	});

	return (
		<nav>
			<div>
				<a href='#home' className='flex items-center gap-2'>
					<p>Velvet Pour</p>
				</a>

				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
