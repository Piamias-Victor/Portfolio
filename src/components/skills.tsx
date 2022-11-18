import { SiCss3, SiEthereum, SiHtml5, SiJavascript, SiReact, SiRust, SiSolidity, SiTailwindcss, SiTypescript, SiWebassembly } from "react-icons/si";
import { IconProps } from "../react/icon";

export function Skills() {

    return <>
        <span className="text-colored text-3xl">
            {"Technologies I master 👨‍💻"}
        </span>
        <div className="h-8" />
        <div className="w-[300px] md:w-[600px] flex flex-wrap justify-center gap-8">
            <Skill icon={SiJavascript} content={"JavaScript"} />
            <Skill icon={SiTypescript} content={"TypeScript"} />
            <Skill icon={SiReact} content={"React"} />
            <Skill icon={SiHtml5} content={"Html"} />
            <Skill icon={SiCss3} content={"Css"} />
            <Skill icon={SiTailwindcss} content={"Tailwind"} />
            <Skill icon={SiEthereum} content={"Ethereum"} />
        </div>
        <div className="h-[80px]" />
        <span className="text-colored text-3xl">
            {"Technologies I learn 👨‍🎓"}
        </span>
        <div className="h-8" />
        <div className="w-[300px] md:w-[600px] flex flex-wrap justify-center gap-8">
            <Skill icon={SiSolidity} content={"Solidity"} />
            <Skill icon={SiRust} content={"Rust"} />
            <Skill icon={SiWebassembly} content={"Web Assembly"} />
        </div>
    </>
}


function Skill(props: IconProps & { content: string }) {

    const { icon: Icon, content } = props

    return <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <div className="h-[100px] flex items-center justify-center">
                    {Icon &&
                        <Icon className="w-[50px] h-[50px] shrink-0 text-colored" />}
                </div>
            </div>
            <div className="flip-card-back">
                <div className="h-[100px] px-2 flex items-center justify-center">
                    <span className="text-colored">{content}</span>
                </div>
            </div>
        </div>
    </div>
}