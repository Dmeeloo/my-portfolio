import {
  Hero,
  About,
  Experience,
  Projects,
  Skills
} from '../../components/sections'
import { ParticleCanvas } from '@/components/ui/ParticleCanvas';

export default function Home() {
  return (
    <div>
      <main>
        <ParticleCanvas/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
      </main>
    </div>
  );
}
