import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
import Playlist from '@/components/playlist';

const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
      >
        <Playlist/>
      </main>
    </Layout>
  );
}
