import Image from 'next/image'
import styles from './page.module.css'
//Componentes
import Header from './components/template-parts/Header';
import HeroSlider from './components/template-parts/HeroSlider';
import AboutUs from './components/sections/AboutUs';
import Services from './components/sections/Services';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <div id="hero">
        <HeroSlider></HeroSlider>
        <AboutUs></AboutUs>
        <Services></Services>
      </div>
    </main>
  )
}
