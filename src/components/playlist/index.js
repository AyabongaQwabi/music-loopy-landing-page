const Playlist = () => {
    return (
        <section className='bg-white dark:bg-gray-900'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
                <div id="tracks" className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
                    <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                        Listen to tracks
                    </h2>
                    <p className='font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'>
                        Discover an exquisite collection of songs by our talented artists and beloved global musicians.
                    </p>
                    <div>
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/21vD2VITQUIaRvnoB8pWeK?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Playlist;