// Components
import { Icon } from 'components';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="ml-3 text-xl">App</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                    {new Date().getFullYear()}
                </p>
                <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="/" className="text-gray-500">
                        <Icon name="facebook" />
                    </a>
                    <a href="/" className="ml-3 text-gray-500">
                        <Icon name="twitter" />
                    </a>
                    <a href="/" className="ml-3 text-gray-500">
                        <Icon name="instagram" />
                    </a>
                    <a href="/" className="ml-3 text-gray-500">
                        <Icon name="linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
