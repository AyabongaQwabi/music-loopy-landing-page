import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
import Hero from '@/components/hero';
import AboutSection from '@/components/aboutSection';
import TeamSection from '@/components/teamSection';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Hero
          image='guitar.jpg'
          header='Welcome to Music Loopy'
          subHeader="Explore, Enjoy, Support"
          text='Step into a thriving community of like-minded individuals who share your passion for music. From seasoned professionals to aspiring newcomers, Music Loopy welcomes all levels of talent and expertise. Connect with fellow creators, exchange ideas, and embark on exciting musical journeys together.'
          cta={{ link: '', title: "Listen Now" }}
        />
        <AboutSection />
        <TeamSection />
      </main>
    </Layout>
  );
}
