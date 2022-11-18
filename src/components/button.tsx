import { OptionalIconProps } from "../react/icon"
import { ButtonProps, RefProps } from "../react/props"

export function OppositeTextButtonRounded(props: ButtonProps & RefProps<HTMLButtonElement>) {

    const { xref, className, children, ...other } = props

    return <button className={`group flex items-center justify-center rounded-xl p-2 bg-component text-colored transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...other}
        ref={xref}>
        <div className="flex  justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
            {children}
        </div>
    </button>
}

export function OppositeTextButtonRoundedSolid(props: ButtonProps & RefProps<HTMLButtonElement>) {

    const { xref, className, children, ...other } = props

    return <button className={`group flex items-center justify-center rounded-xl p-2 bg-indigo6 hover:bg-indigo7 text-colored transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...other}
        ref={xref}>
        <div className="flex  justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
            {children}
        </div>
    </button>
}

export function ContrastTextButton(props: ButtonProps & OptionalIconProps & RefProps<HTMLButtonElement>) {

    const { xref, icon: Icon, className, children, ...other } = props

    return <button className={`group rounded-xl p-md bg-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...other}
        ref={xref}>
        <div className="flex justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
            {Icon &&
                <Icon className="icon-xs" />}
            {children}
        </div>
    </button>
}