import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HEESUN PORTFOLIO',
  description: '프론트엔드 개발자 황희선 포트폴리오 입니다.',
  applicationName: '황희선 포트폴리오',
  keywords: ['황희선', '프론트엔드', '포트폴리오', 'next.js'],
  authors: [{ name: 'Hwang Hee Sun' }],
  creator: 'Hwang Hee Sun',
  publisher: 'Hwang Hee Sun',
  openGraph: {
    title: 'HEESUN PORTFOLIO',
    description: '프론트엔드 개발자 황희선 포트폴리오 입니다.',
    url: 'https://hhs-port.vercel.app/',
    images: {
      url: '../../public/assets/opengraph.jpg',
    },
  },
  twitter: {
    title: 'HEESUN PORTFOLIO',
    description: '프론트엔드 개발자 황희선 포트폴리오 입니다.',
    images: {
      url: '../../public/assets/opengraph.jpg',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="skipMenu">
          <a href="#contents">본문바로가기</a>
        </div>
        <div className="inner">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
