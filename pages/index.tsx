import { About } from "../src/components/about";
import { Card } from "../src/components/card";
import { Footer } from "../src/components/layout/footer";
import { Header } from "../src/components/layout/header";
import { ProjectSection } from "../src/components/project";
import { Skills } from "../src/components/skills";



export default function Home() {
  return <>
    <div id='top' />
    <Header />
    <div className="h-[50px]" />
    <main className='flex flex-col items-center'>
      <Card />
      <div className="h-[80px]" />
      <About />
      <div className="h-[80px]" id="skills" />
      <Skills />
      <div className="h-[80px]" id="project" />
      <ProjectSection />
    </main>
    <div className="h-[50px]" />
    <Footer />
  </>
}
