import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Contact
} from '../components/sections'

export default function Home() {
  return (
    <div>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}
