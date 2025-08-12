import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Wa = () => {
    return (
        <a
            href="https://wa.me/6281271628342?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20JAPRIBOSS."
            className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-lg z-[9999] hover:bg-[#128c7e] transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
};

export default Wa;
