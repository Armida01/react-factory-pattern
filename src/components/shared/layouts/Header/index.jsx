import {Link, NavLink} from 'react-router-dom';

// Components
import { pages } from '../../../../constants';

const Header = () => {
    const pageList = pages.map((page, index) => {
        return (
            <NavLink
                key={index}
                to={page.path}
                className={({ isActive }) => `mr-5 hover:text-gray-900 transition-all ${isActive ? 'text-gray-900' : 'text-white'}`}
            >
                {page.name}
            </NavLink>
        )
    });

    return (
        <header className="text-gray-600 body-font bg-blue-500">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl text-white">App</span>
                </Link>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {pageList}
                </nav>
            </div>
        </header>
    );
};

export default Header;
