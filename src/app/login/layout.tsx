
export const metadata = {
    title: 'Login',
    description: 'Login page'
}

export default function LoginLayout({
    children
} : { children: React.ReactNode}){
    return (
        <>
            {children}
        </>
    )
}