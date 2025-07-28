const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6">
        <div className="px-2">
          <h2 className="text-lg text-white font-semibold">About Us</h2>
          <p>
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent join the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div className="px-2">
          <h2 className="text-lg text-white font-semibold">Quick Links</h2>
          <p className="py-1">
            {' '}
            <a
              href="/"
              className="hover:text-white transition-colors duration-300 "
            >
              Home
            </a>
          </p>
          <p className="pb-1">
            {' '}
            <a
              href="/"
              className="hover:text-white transition-colors duration-300 "
            >
              All Courses
            </a>
          </p>
          <p className="pb-1">
            {' '}
            <a
              href="/"
              className="hover:text-white transition-colors duration-300 "
            >
              About Us
            </a>
          </p>
          <p className="pb-1">
            {' '}
            <a
              href="/"
              className="hover:text-white transition-colors duration-300 "
            >
              Contact Us
            </a>
          </p>
        </div>
        <div className="px-2">
          <h2 className="text-lg text-white font-semibold">Follow Us</h2>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 pr-2"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 px-2"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 px-2"
          >
            Instagram
          </a>
        </div>
        <div>
          <h2 className="text-lg text-white font-semibold">Contact Us</h2>
          <p className="py-1">
            New Delhi, India 10001
            <br /> Email: info@musicschool.com
            <br />
            Phone:(123) 456-7890
          </p>
        </div>
      </div>
      <p className="text-center text-[12px] pt-4">
        &copy; 2025 Music School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
