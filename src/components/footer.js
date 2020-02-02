import React from 'react';

import { Image } from './images';

const Footer = ({ label }) => (
  <footer className="p-6 sm:py-0 flex flex-col-reverse sm:flex-row items-center bg-white">
    <div className="flex items-center mt-6 sm:mt-0 flex-1">
      <Image image="logo" className="w-24 block mr-4 -mt-1" imgStyle={{ width: '100%', height: 'auto' }} />
      <p className="text-grey-500 flex-shrink-0 mt-0">&copy; 2019 All Rights Reserved</p>
    </div>
    <Image image="efile" className="w-24 h-auto flex-shrink-0 sm:ml-8" imgStyle={{ width: '100%', height: 'auto' }} />
  </footer>
);

export default Footer;
