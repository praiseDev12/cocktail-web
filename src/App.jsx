import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import Cocktails from './sections/Cocktails';
import About from './sections/About';
import Art from './sections/Art';
import Menu from './sections/Menu';
import Contact from './sections/Contact';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<main className='selection:bg-yellow selection:text-black'>
			<NavBar />
			<Hero />
			<Cocktails />
			<About />
			<Art />
			<Menu />
			<Contact />
			<section className='h-screen w-full'>
				<div className='h-full w-full flex flex-col md:flex-row items-center justify-center font-semibold text-5xl md:text-8xl text-gradient'>
					More <br />
					<span className='bg-yellow text-black border p-1 border-white'>
						{' '}
						Cocktails
					</span>
				</div>
			</section>
		</main>
	);
};

export default App;
