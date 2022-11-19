import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { ExternalDivisionLink, InternalDivisionLink } from "../../next/anchor";
import { ContrastTextButton } from "../button";



export function Footer() {
    return <header className='px-8 rounded-t-xl border-t border-default w-full flex items-center justify-center md:justify-between h-[50px] bg-indigo3 dark:bg-indigodark3'>
        <div className="hidden md:block w-[250px]">
            <InternalDivisionLink href='#top'>
                <ContrastTextButton className='text-sm bg-indigo4 dark:bg-indigodark4 text-colored' icon={FiArrowUp}>
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
                <ContrastTextButton className='bg-indigo4 dark:bg-indigodark4'>
                    <FiGithub className='icon-sm text-colored' />
                </ContrastTextButton>
            </ExternalDivisionLink>
            <ExternalDivisionLink href='https://twitter.com/Heliatr0p'>
                <ContrastTextButton className='bg-indigo4 dark:bg-indigodark4'>
                    <FiTwitter className='icon-sm text-colored' />
                </ContrastTextButton>
            </ExternalDivisionLink>
            <ExternalDivisionLink href='https://www.linkedin.com/in/victor-piamias/'>
                <ContrastTextButton className='bg-indigo4 dark:bg-indigodark4'>
                    <FiLinkedin className='icon-sm text-colored' />
                </ContrastTextButton>
            </ExternalDivisionLink>
            <ExternalDivisionLink href={"mailto:victorpiamiaspro@outlook.fr?subject=Let's get to know each other"}>
                <ContrastTextButton className='bg-indigo4 dark:bg-indigodark4'>
                    <FiMail className='icon-sm text-colored' />
                </ContrastTextButton>
            </ExternalDivisionLink>
        </div>
    </header>
}