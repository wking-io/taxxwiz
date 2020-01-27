import React from 'react';
import { Link } from 'gatsby';

import { Image } from './images';

const Footer = ({ label }) => (
  <footer className="p-6 flex flex-col md:flex-row items-center bg-white">
    <Image image="logo" className="w-24 block md:mr-4 md:-mt-1" imgStyle={{ width: '100%', height: 'auto' }} />
    <p className="text-grey-500 flex-shrink-0 mt-4 md:mt-0">&copy; 2019 All Rights Reserved</p>
    <Image image="efile" className="w-auto h-8 flex-shrink-0 ml-8" imgStyle={{ width: '100%', height: 'auto' }} />
  </footer>
);

export default Footer;
