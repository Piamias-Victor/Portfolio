import Link, { LinkProps } from "next/link"
import { useCallback } from "react"
import { AnchorProps, DivisionProps } from "../react/props"

export function ExternalDivisionLink(props: AnchorProps & DivisionProps) {

    const { href, ...others } = props

    const onClick = useCallback(() => {
        open(href, "_blank", "noreferrer")
    }, [href])

    if (!href) return <div {...others} />

    return <div onClick={onClick} {...others} />
}

export function InternalDivisionLink(props: AnchorProps & LinkProps & DivisionProps) {

    const { href, scroll, ...others } = props
    if (!href) return <div {...others} />

    return <Link href={href} scroll={false} passHref>
        <div  {...others} />
    </Link>
}