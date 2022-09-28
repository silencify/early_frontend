interface MainLayoutProps {
    children: JSX.Element
}

const MainLayout = ({children}: MainLayoutProps): JSX.Element => {
    return (
        <div>
            <p>Topbar</p>
            {children}
        </div>
    )
}

export default MainLayout;
