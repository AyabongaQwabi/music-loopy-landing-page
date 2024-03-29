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
      </div>
    </section>
  );
};

export default AboutSection;
