import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Contact
} from '../components/sections'
import { ParticleCanvas } from '@/components/ui/ParticleCanvas'

export default function Home() {
  return (
    <div>
      <ParticleCanvas/>
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
