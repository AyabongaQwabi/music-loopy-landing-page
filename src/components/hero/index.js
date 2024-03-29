import Link from 'next/link';

const Hero = ({ image, header, subHeader, text, cta }) => {
  return (
    <div
      className={`container h-full bg-[url('/images/guitar.jpg')] h-full home-page-header flex flex-col justify-center items-center`}
    >
      <div className='grid md:grid-cols-2 grid-cols-1 flex flex-col justify-center items-center'>
        <div className='h-full px-8 py-8 text-center md:text-left'>
          <h1 className=' text-green-600 text-4xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-900'>
            {header}
          </h1>
          {subHeader && (
            <h2 className=' text-white text-2xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-900'>
              {subHeader}
            </h2>
          )}
          <p className=' text-white text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-gray-100 mb-6'>
            {text}
          </p>
          <Link href={cta.link} className='text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-xl px-4 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            {cta.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
