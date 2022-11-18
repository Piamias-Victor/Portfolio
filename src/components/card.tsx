import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import { ExternalDivisionLink } from '../next/anchor';
import { OppositeTextButtonRounded } from './button';



export function Card() {

    return <div className='p-md w-[300px] flex items-center justify-center bg-zinc-100 rounded-xl shadow-xl'>
        <div className='py-4 flex flex-col items-center text-xl'>
            <ImageIcon />
            <div className='h-4' />
            <CardTitle />
            <div className='h-4' />
            <CardButton />
        </div>
    </div>
}

function ImageIcon() {

    return <img className='w-[140px] mx-auto shadow-xl rounded-full drop-shadow-sm bg-component hover:scale-105 duration-500' src={"/Memoji.png"} alt='memoji' />
}

function CardTitle() {

    return <>
        <span className='text-3xl text-colored'>
            {"Victor Piamias "}
        </span>
        <div className='text-contrast'>
            <Typewriter
                words={['Front-End developer', 'Crypto freelance', 'Cypherpunk', 'Front-End developer']}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </div>
    </>
}

function CardButton() {

    return <div className='flex items-center justify-center gap-8'>
        <ExternalDivisionLink href='https://github.com/Piamias-Victor'>
            <OppositeTextButtonRounded>
                <FiGithub className='icon-md' />
            </OppositeTextButtonRounded>
        </ExternalDivisionLink>
        <ExternalDivisionLink href='https://twitter.com/Heliatr0p'>
            <OppositeTextButtonRounded>
                <FiTwitter className='icon-md' />
            </OppositeTextButtonRounded>
        </ExternalDivisionLink>
        <ExternalDivisionLink href='https://www.linkedin.com/in/victor-piamias/'>
            <OppositeTextButtonRounded>
                <FiLinkedin className='icon-md' />
            </OppositeTextButtonRounded>
        </ExternalDivisionLink>
    </div>
}