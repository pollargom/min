
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {currentYear} A. Dancer. All Rights Reserved.</p>
        <p className="text-sm mt-1">Powered by creativity and code.</p>
      </div>
    </footer>
  );
};

export default Footer;
