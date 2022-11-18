import { FiChevronDown } from "react-icons/fi";

export function About() {

    return <>
        <span className="text-colored text-3xl">
            Gm everyone 👋
        </span>
        <div className="h-1" />
        <span className="w-[300px] md:w-[700px] text-contrast text-center">
            {"I'm Victor Piamias, Front-End developer working in the crypto environment and more especially in privacy. I am very curious, love to learn and discover about all kinds of technologies ! I'm a graduate of the 42 school in Paris, with my teammates we completed the course in 5 months, after that we worked as freelancers for different protocols. Now I'm looking for a Front-End developper job in the crypto environment and if possible in relation with privacy."}
        </span>
        <div className="h-[60px]" />
        <FiChevronDown className="animate-bounce text-colored icon-5xl" />
    </>
}