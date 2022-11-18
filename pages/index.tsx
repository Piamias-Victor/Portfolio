import { About } from "../src/components/about";
import { Card } from "../src/components/card";
import { Header } from "../src/components/layout/header";
import { ProjectSection } from "../src/components/project";
import { Skills } from "../src/components/skills";



export default function Home() {
  return <>
    <Header />
    <div className="h-[50px]" />
    <div className='flex flex-col items-center'>
      <Card />
      <div className="h-[80px]" />
      <About />
      <div className="h-[80px]" />
      <Skills />
      <div className="h-[80px]" />
      <ProjectSection />
    </div>
    <div className="h-[50px]" />
  </>
}
