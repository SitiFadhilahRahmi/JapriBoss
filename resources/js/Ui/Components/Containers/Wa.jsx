import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Wa = () => {
    return (
        <a
            href="https://wa.me/6281271628342?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20JAPRIBOSS.%20"
            className="fixed bottom-10 right-10 bg-[#25d366] text-white p-4 rounded-full shadow-lg z-50 hover:bg-[#128c7e] transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
};

export default Wa;
