import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiContactsLine, RiStackLine } from 'react-icons/ri';
import { InternalDivisionLink } from "../../next/anchor";
import { ContrastTextButton } from "../button";

export function Header() {
    return <header className='px-8 rounded-b-xl border border-default w-full sticky top-0 z-10 flex items-center justify-between h-[80px] bg-indigo3'>
        <span className="text-3xl text-colored w-[250px]">
            My Portfolio
        </span>
        <div className="flex items-center gap-8">
            <InternalDivisionLink href={"#skills"}>
                <ContrastTextButton className="w-[150px] bg-indigo4 text-colored" icon={RiStackLine}>
                    Stack
                </ContrastTextButton>
            </InternalDivisionLink>
            <InternalDivisionLink href={"#project"}>
                <ContrastTextButton className="w-[150px] bg-indigo4 text-colored" icon={AiOutlineFundProjectionScreen}>
                    Project
                </ContrastTextButton>
            </InternalDivisionLink>
            <InternalDivisionLink href={"mailto:victorpiamiaspro@outlook.fr?subject=Let's get to know each other"}>
                <ContrastTextButton className="w-[150px] bg-indigo4 text-colored" icon={RiContactsLine}>
                    Contact
                </ContrastTextButton>
            </InternalDivisionLink>
        </div>
        <div className="w-[250px]" />
    </header>
}