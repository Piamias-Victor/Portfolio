import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FiMoon, FiSun } from 'react-icons/fi';
import { RiContactsLine, RiStackLine } from 'react-icons/ri';
import { useTheme } from '../../contexts/theme';
import { InternalDivisionLink } from "../../next/anchor";
import { ContrastTextButton } from "../button";

export function Header() {

    return <header className='w-full px-8 rounded-b-xl border-b border-default w-full sticky top-0 z-10 flex items-center justify-center lg:justify-between h-[60px] md:h-[80px] bg-indigo3 dark:bg-indigodark3'>
        <span className="hidden lg:block text-3xl text-colored w-[250px]">
            My Portfolio
        </span>
        <div className="flex items-center gap-2 lg:gap-8 text-sm lg:text-base">
            <InternalDivisionLink href={"#skills"}>
                <ContrastTextButton className="w-[100px] lg:w-[150px] bg-indigo4 dark:bg-indigodark4 text-colored" icon={RiStackLine}>
                    Stacks
                </ContrastTextButton>
            </InternalDivisionLink>
            <InternalDivisionLink href={"#project"}>
                <ContrastTextButton className="w-[100px] lg:w-[150px] bg-indigo4 dark:bg-indigodark4 text-colored" icon={AiOutlineFundProjectionScreen}>
                    Projects
                </ContrastTextButton>
            </InternalDivisionLink>
            <InternalDivisionLink href={"mailto:victorpiamiaspro@outlook.fr?subject=Let's get to know each other"}>
                <ContrastTextButton className="w-[100px] lg:w-[150px] bg-indigo4 dark:bg-indigodark4 text-colored" icon={RiContactsLine}>
                    Contact
                </ContrastTextButton>
            </InternalDivisionLink>
        </div>
        <ThemeButton />
    </header>
}

function ThemeButton() {

    const theme = useTheme()

    return <div className="hidden lg:flex w-[250px] flex-row-reverse">
        {theme.current === "light"
            ? <ContrastTextButton className="w-[100px] lg:w-[125px] bg-indigo4 dark:bg-indigodark4 text-colored" icon={FiSun}
                onClick={() => theme.set("dark")}>
                Light
            </ContrastTextButton>
            : <ContrastTextButton className="w-[100px] lg:w-[125px] bg-indigo4 dark:bg-indigodark4 text-colored" icon={FiMoon}
                onClick={() => theme.set("light")}>
                Dark
            </ContrastTextButton>}
    </div>
}