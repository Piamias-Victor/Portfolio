import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { ExternalDivisionLink, InternalDivisionLink } from "../../next/anchor";
import { ContrastTextButton, OppositeTextButtonRoundedSolid } from "../button";



export function Footer() {
    return <header className='px-8 rounded-t-xl border border-default w-full flex items-center justify-center md:justify-between h-[50px] bg-indigo3'>
        <div className="hidden md:block w-[250px]">
            <InternalDivisionLink href='#top'>
                <ContrastTextButton className='text-sm bg-indigo4 text-colored' icon={FiArrowUp}>
                    Go to Top
                </ContrastTextButton>
            </InternalDivisionLink>
        </div>
        <div className="hidden md:block flex items-center gap-8">
            <span className="text-colored">
                Made in 🇫🇷 with ❤️
            </span>
        </div>
        <div className="w-[250px] flex flex-row-reverse gap-4 px-8">
            <ExternalDivisionLink href='https://github.com/Piamias-Victor'>
                <OppositeTextButtonRoundedSolid>
                    <FiGithub className='icon-sm' />
                </OppositeTextButtonRoundedSolid>
            </ExternalDivisionLink>
            <ExternalDivisionLink href='https://twitter.com/Heliatr0p'>
                <OppositeTextButtonRoundedSolid>
                    <FiTwitter className='icon-sm' />
                </OppositeTextButtonRoundedSolid>
            </ExternalDivisionLink>
            <ExternalDivisionLink href='https://www.linkedin.com/in/victor-piamias/'>
                <OppositeTextButtonRoundedSolid>
                    <FiLinkedin className='icon-sm' />
                </OppositeTextButtonRoundedSolid>
            </ExternalDivisionLink>
            <ExternalDivisionLink href={"mailto:victorpiamiaspro@outlook.fr?subject=Let's get to know each other"}>
                <OppositeTextButtonRoundedSolid>
                    <FiMail className='icon-sm' />
                </OppositeTextButtonRoundedSolid>
            </ExternalDivisionLink>
        </div>
    </header>
}