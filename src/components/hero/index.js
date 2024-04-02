import Link from 'next/link';

const Hero = ({ image, header, subHeader, text, cta }) => {
  return (
    <div
    //   className={`h-full bg-[url('/images/guitar.jpg')] h-full home-page-header flex flex-col justify-center items-center`}
        className={`h-full bg-[url('/images/bigbanner.png')] h-full home-page-header flex flex-col justify-center items-center`}
    >
      <div id="about" className='grid md:grid-cols-2 grid-cols-1 flex flex-col justify-center items-center'>
        <div className='h-full px-8 py-8 text-center md:text-left'>
          <h1 className=' my-24 drop-shadow-md text-green-600 text-7xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-900'>
            {header}
          </h1>
          {subHeader && (
            <h2 className='drop-shadow-md my-4 text-white text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-900'>
              {subHeader}
            </h2>
          )}
          
          <div className='my-20'>
          <Link href={cta.link} className='my-24 mt-4 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  text-xl px-4 py-3 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
            {cta.title}
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
