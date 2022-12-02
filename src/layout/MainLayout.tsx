import { WBox, WDrawer } from "components";

interface MainLayoutProps {
    children: JSX.Element
}

const MainLayout = ({children}: MainLayoutProps): JSX.Element => {
    return (
        <div>
            <WBox sx={{ display: 'flex' }}>
                <WDrawer/>
            <WBox>
                {children}
            </WBox>
            </WBox>
        </div>
    )
}

export default MainLayout;
