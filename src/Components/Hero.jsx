import { useEffect, useState } from 'react';
import { Github, Linkedin, Download, Facebook } from 'lucide-react';
import image from '../assets/1000005139-removebg (1)-bv863erv.png';
import toast from 'react-hot-toast';

const Hero = () => {
  const [showDeveloper, setShowDeveloper] = useState(false);
  const [text, setText] = useState('');
  const fullText = 'Developer';
  const typingSpeed = 200;

  useEffect(() => {
    const delayShow = setTimeout(() => {
      setShowDeveloper(true);
      let index = 0;
      const typingInterval = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) clearInterval(typingInterval);
      }, typingSpeed);
    }, 1500);

    return () => clearTimeout(delayShow);
  }, []);

  // Function to trigger toast and handle download
  const handleDownloadClick = () => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3 items-center px-3 py-6">
          <span className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Download Options
          </span>
          <div className="flex gap-5">
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              onClick={() => {
                window.open(
                  'https://drive.google.com/file/d/1gMMRxYoWZRwJshtfjsB-iOrKeoAuerw6/view?usp=sharing',
                  '_blank'
                );
                toast.dismiss(t.id);
              }}
            >
              CV
            </button>
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              onClick={() => {
                window.open(
                  'https://drive.google.com/file/d/1YXMDP5iu_i_k1JezojpEnyahUMb0Pr0D/view?usp=sharing'
                );
                toast.dismiss(t.id);
              }}
            >
              Resume
            </button>
          </div>
        </div>
      ),
      {
        duration: 6000,
        position: 'top-center',
        style: {
          background: 'rgba(0,0,0,0.3)', // dark semi-transparent background
      color: 'white',
      minWidth: '300px',
      textAlign: 'center',
      marginTop: '50px',
        },
      },
    );
  };

  return (
    <>
      <section
        id="home"
        className="pt-20 py-32 sm:py-42 bg-linear-to-br from-red-700 to-blue-700 dark:from-indigo-800 via-slate-800 dark:to-purple-800 transition"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left md:ml-13 lg:ml-24">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="animate__animated animate__bounceInUp animate__delay-1s">
                  MERN Stack
                </span>
                {showDeveloper && (
                  <span className="block text-purple-700 dark:text-orange-300">
                    {text}
                    <span className="animate__animated animate__flash animate__infinite">
                      .
                    </span>
                  </span>
                )}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Building modern web applications with passion and precision
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* Download Button with Toast */}
                <button
                  onClick={handleDownloadClick}
                  className="px-8 py-3 bg-indigo-600 text-white shadow-xl hover:shadow-2xl rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </button>

                {/* Social Links */}
                <div className="flex gap-4 justify-center place-items-center">
                  <a
                    href="https://github.com/ANONTO96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-300 rounded-full hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <Github
                      size={24}
                      className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tanjir-ul-anonto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-300 rounded-full hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <Linkedin
                      size={24}
                      className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/tanjir.anonto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-300 rounded-full hover:bg-gray-200 transition dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <Facebook
                      size={24}
                      className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 my-9 sm:my-11 md:my-0">
              <img
                src={image}
                className="rounded-full w-64 h-64 sm:w-72 sm:h-72 object-cover mx-auto border-8 border-white shadow-xl hover:shadow-2xl dark:border-gray-700 transition"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
