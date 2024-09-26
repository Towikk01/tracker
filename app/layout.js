import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/layots/Header';
import Footer from './components/layots/Footer';
import ParticlesBG from './components/layots/Particles';
import DynamicHeroSection from './components/layots/DynamicHeroSection';
import AboutSection from './components/layots/AboutSection';
import Form from './components/layots/Form';
import { motion } from 'framer-motion';
import MainPage from './components/layots/MainPage';

const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Car Tracker',
    description: 'Tracker for your car',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <MainPage>{children}</MainPage>
        </html>
    );
}
