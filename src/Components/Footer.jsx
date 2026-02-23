import React from 'react';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="text-gray-400">
              Feel free to reach out for collaborations or just a friendly hello, I will always be there.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/ANONTO96"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tanjir-ul-anonto/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/tanjir.anonto/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/tanjir_ul_islam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} <a className='text-sky-600' href="https://www.canva.com/design/DAGi0v7ULpM/v_PYCv3QeXWtJ79JVIJdSQ/view?utm_content=DAGi0v7ULpM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7580b5a492">Tanjir-Ul Islam Anonto</a> | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;