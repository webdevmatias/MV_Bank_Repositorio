import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full h-auto bg-black p-4 flex flex-col md:flex-row justify-around items-center text-center md:text-left">
            <h1 className="text-white mb-4 md:mb-0">Contate-nos:</h1>
            <div className="flex flex-row gap-4 items-center justify-center md:flex-row md:items-center md:space-x-4 mb-4 md:mb-0 w-full md:w-auto">
                <a href="mailto:contato@mvbank.com" className="text-white hover:text-gray-400 flex items-center space-x-2">
                    <FaEnvelope size={24} />
                    <span className="text-sm md:text-base">teste@gmail.com</span>
                </a>
                <a href="tel:+123456789" className="text-white hover:text-gray-400 flex items-center space-x-2">
                    <FaPhone size={24} />
                    <span className="text-sm md:text-base">+55 0000-0000</span>
                </a>
            </div>
            <div className="flex flex-row space-x-4">
                <a href="https://www.facebook.com" className="text-white hover:text-gray-400 flex items-center">
                    <FaFacebook size={25} />
                </a>
                <a href="https://www.twitter.com" className="text-white hover:text-gray-400 flex items-center">
                    <FaTwitter size={25} />
                </a>
                <a href="https://www.instagram.com" className="text-white hover:text-gray-400 flex items-center">
                    <FaInstagram size={25} />
                </a>
                <a href="https://www.linkedin.com" className="text-white hover:text-gray-400 flex items-center">
                    <FaLinkedin size={25} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
