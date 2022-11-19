import { FiCode, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { MdOutlineSchool } from 'react-icons/md';
import { RiPingPongLine } from 'react-icons/ri';
import { ExternalDivisionLink } from '../next/anchor';
import { IconProps } from '../react/icon';
import { ChildrenProps } from '../react/props';
import { OppositeTextButtonRoundedSolid } from './button';
import { BrumeIcon, ETHBrnoIcon, SchoolIcon } from './icon';



export function ProjectSection() {

    return <>
        <span className="text-colored text-3xl">
            {"Project I made 👷‍♂️"}
        </span>
        <div className="h-8" />
        <div className="w-[300px] md:w-[700px] flex flex-wrap justify-center gap-8">
            <Project icon={ETHBrnoIcon} title={"ETHBrno Winner"} content={"I won two prizes at ETHBrno in a privacy oriented hackaton, the overall hackaton prize & the design prize"}>
                <div className='flex items-center justify-center gap-4'>
                    <ExternalDivisionLink href='https://twitter.com/ETHBrno/status/1591880795245121536'>
                        <OppositeTextButtonRoundedSolid>
                            <FiTwitter className='icon-md' />
                        </OppositeTextButtonRoundedSolid>
                    </ExternalDivisionLink>
                    <ExternalDivisionLink href='https://www.linkedin.com/feed/update/urn:li:activity:6997904257249075200/'>
                        <OppositeTextButtonRoundedSolid>
                            <FiLinkedin className='icon-md' />
                        </OppositeTextButtonRoundedSolid>
                    </ExternalDivisionLink>
                </div>
            </Project>
            <Project icon={BrumeIcon} title={"Brume Wallet"} content={"First privacy native Ethereum wallet based on a built-in integration of TOR"}>
                <ExternalDivisionLink href='https://github.com/brume-wallet'>
                    <OppositeTextButtonRoundedSolid>
                        <FiGithub className='icon-md' />
                    </OppositeTextButtonRoundedSolid>
                </ExternalDivisionLink>
            </Project>
            <Project icon={FiCode} title={"DAO Project"} content={"I have done Front-End missions for a privacy oriented DAO. During this one I gained a lot of independence & technical competences."} />
            <Project icon={RiPingPongLine} title={"Online Pong"} content={"Last project of the 42 school curriculum, creation of an online pong game"}>
                <ExternalDivisionLink href='https://github.com/Piamias-Victor/transcendance'>
                    <OppositeTextButtonRoundedSolid>
                        <FiGithub className='icon-md' />
                    </OppositeTextButtonRoundedSolid>
                </ExternalDivisionLink>
            </Project>
            <Project icon={MdOutlineSchool} title={"Reach3"} content={"Project of the 42 school Starton hackaton, creation of an NFT to validate degrees simply and without cheating."}>
                <ExternalDivisionLink href='https://github.com/Piamias-Victor/Reach3'>
                    <OppositeTextButtonRoundedSolid>
                        <FiGithub className='icon-md' />
                    </OppositeTextButtonRoundedSolid>
                </ExternalDivisionLink>
            </Project>
            <Project icon={SchoolIcon} title={"42 Project"} content={"I also realized many projects during my studies in 42 school. They allowed me to have a solid mastery of C and C++, algorithms, clean code..."}>
                <ExternalDivisionLink href='https://github.com/Piamias-Victor'>
                    <OppositeTextButtonRoundedSolid>
                        <FiGithub className='icon-md' />
                    </OppositeTextButtonRoundedSolid>
                </ExternalDivisionLink>
            </Project>
        </div>
    </>
}

function Project(props: IconProps & ChildrenProps & { content: string, title: string }) {

    const { icon: Icon, children, content, title } = props

    return <div className="flip-card-big">
        <div className="flip-card-inner">
            <div className="flip-card-front bg-zinc-100 dark:bg-indigodark3">
                <div className="h-[200px] flex flex-col items-center justify-center gap-4">
                    {Icon &&
                        <Icon className="w-[100px] h-[100px] shrink-0 text-colored" />}
                    <span className="text-colored">{title}</span>
                </div>
            </div>
            <div className="flip-card-back bg-indigo4 dark:bg-indigodark4">
                <div className="h-[200px] px-2 flex-col flex items-center justify-center gap-4">
                    <span className="text-colored text-sm">{content}</span>
                    {children}
                </div>
            </div>
        </div>
    </div>
}