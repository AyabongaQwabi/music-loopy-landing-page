import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center">
                        <img src="logo.png" className="h-8 me-3" alt="Music Loopy Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Music Loopy</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Privacy</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li>
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div id="contact">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li>
                                <a href="mailto:martin.boyle@musicloopy.org" className="hover:underline">martin.boyle@musicloopy.org</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 <a href="#" className="hover:underline">Music Loopy<sup>TM</sup></a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="https://www.facebook.com/MusicLoopy" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <img src="facebook.png" alt="FACEBOOK"/>
                    </a>
                    <a href="https://www.tiktok.com/@musicloopy?_t=8l8h21APK0O&_r=1" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <img src="tiktok.png" alt="TIKTOK"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCH6s5L14P90QLMQSkYNGEXA" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <img src="youtube.png" alt="YOUTUBE"/>
                    </a>
                    <a href="https://www.instagram.com/musicloopy?igsh=MWczZG04MDZnMzhheA%3D%3D&utm_source=qr" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <img src="instagram.png" alt="INSTAGRAM"/>
                    </a>
                    <a href="https://www.linkedin.com/company/musicloopy/?" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <img src="linkedin.png" alt="LINKEDIN"/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
