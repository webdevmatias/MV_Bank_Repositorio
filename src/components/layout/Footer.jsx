import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full h-auto bg-black p-4 flex flex-col md:flex-row justify-around items-center text-center md:text-left">
            <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4 mb-4 md:mb-0 w-full md:w-auto">
                <h1 className="text-white mb-4 md:mb-0">Contate-nos:</h1>
                <a href="mailto:contato@mvbank.com" className="text-white hover:text-gray-400 flex items-center space-x-2 mb-2 md:mb-0">
                    <FaEnvelope size={24} />
                    <span>teste@gmail.com</span>
                </a>
                <a href="tel:+123456789" className="text-white hover:text-gray-400 flex items-center space-x-2">
                    <FaPhone size={24} />
                    <span>+55 0000-0000</span>
                </a>
            </div>
            <div className="flex flex-row space-x-4">
                <a href="https://www.facebook.com" className="text-white hover:text-gray-400">
                    <FaFacebook size={32} />
                </a>
                <a href="https://www.twitter.com" className="text-white hover:text-gray-400">
                    <FaTwitter size={32} />
                </a>
                <a href="https://www.instagram.com" className="text-white hover:text-gray-400">
                    <FaInstagram size={32} />
                </a>
                <a href="https://www.linkedin.com" className="text-white hover:text-gray-400">
                    <FaLinkedin size={32} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
