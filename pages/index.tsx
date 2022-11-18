import { Card } from "../src/components/card";

export default function Home() {
  return <>
    <div className='h-[100px]' />
    <div className='flex flex-col items-center'>
      <Card />
      <div className="h-[60px]" />
      <span className="text-colored text-3xl">
        Gm everyone 👋
      </span>
      <div className="h-1" />
      <span className="w-[600px] text-contrast text-center">
        {"I'm Victor Piamias, Front-End developer working in the crypto environment and more especially in privacy. I am very curious, love to learn and discover about all kinds of technologies ! I'm a graduate of the 42 school in Paris, with my teammates we completed the course in 5 months, after that we worked as freelancers for different protocols. Now I'm looking for a Front-End developper job in the crypto environment and if possible in relation with privacy."}
      </span>
    </div>
  </>
}
