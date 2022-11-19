import Head from "next/head";
import { About } from "../src/components/about";
import { Card } from "../src/components/card";
import { Footer } from "../src/components/layout/footer";
import { Header } from "../src/components/layout/header";
import { ProjectSection } from "../src/components/project";
import { Skills } from "../src/components/skills";
import { ChildrenProps } from "../src/react/props";



export default function Home() {
  return <Wrapper>
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
  </Wrapper>
}


function Wrapper(props: ChildrenProps) {

  const { children } = props

  return <>
    <Head>
      <title>Piamias Victor</title>
      <meta name="referrer" content="no-referrer" />
      <meta name="application-name" content="Piamias Victor" />
      <meta
        name="description"
        content="Build to learn, learn to buildy"
      />
      <meta name="color-scheme" content="dark light" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      <link rel="icon" type="image/svg+xml" href="/memoji.png" />
      <link rel="alternate icon" href="/memoji.png" />
    </Head>
    {children}
  </>
}