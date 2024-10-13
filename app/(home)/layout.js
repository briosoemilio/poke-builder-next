import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from '../_components/index'

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PokéBuilder",
  description: "Create your own Pokemon Team!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={'w-full max-w-[1440px] mx-auto'}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
