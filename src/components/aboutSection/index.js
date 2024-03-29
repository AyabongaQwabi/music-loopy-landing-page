// components/AboutSection.js

const AboutSection = () => {
  return (
    <section className='bg-gray-100 py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-left mb-8 pl-4'>
          Music Loopy - Your Gateway to Great Music!
        </h2>
        <p className='text-lg text-left mb-8 pl-4 font-light'>
          At Music Loopy, we're dedicated to curating a platform where music
          lovers like you can discover talented artists, support their work, and
          enjoy the best of music from around the world. Whether you're a
          seasoned aficionado or a casual listener, Music Loopy offers something
          for everyone.
        </p>
        <h3 className='text-xl font-semibold mb-4 pl-4'>
          Our Project Overview
        </h3>
        <p className='text-lg text-left mb-8 pl-4 font-light'>
          Dive into a world of musical discovery as you explore the diverse
          talents showcased on Music Loopy. From indie gems to established
          icons, our platform is your go-to destination for finding the next big
          thing in music.
        </p>
        <h3 className='text-xl font-semibold mb-4 pl-4'>
          Meet the Team Behind Music Loopy
        </h3>
        <p className='text-lg text-left mb-8 pl-4 font-light'>
          Behind every great platform is a dedicated team working tirelessly to
          bring it to life.
        </p>
        <div className='text-left mt-8 pl-4'>
          <a
            href='/about'
            className='text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-xl px-4 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
