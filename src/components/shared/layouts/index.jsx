import { Outlet } from 'react-router-dom';

// Components
import { Header, Footer } from 'components';

const Layouts = () => {
    return (
        <>
            <Header />

            <main className="h-[calc(100vh_-_172.5px)] flex items-center justify-center">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default Layouts;