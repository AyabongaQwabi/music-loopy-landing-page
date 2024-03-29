import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1 className='text-4xl font-bold text-center'>
          Welcome to Music Loopy
        </h1>
        <Image
          src='/logo.png'
          alt='Music Loopy logo'
          width={200}
          height={200}
          className='rounded-full'
        />
        <p className='text-center'>
          Music Loopy is a platform for artists and producers to collaborate and
          create music.
        </p>
      </main>
    </Layout>
  );
}
