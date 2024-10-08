import { Poppins } from 'next/font/google';
import DynamicHeroSection from './components/layots/DynamicHeroSection';

const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    subsets: ['latin'],
});
export default function Home() {
    return <DynamicHeroSection selectedProduct="wetrack-lite" />;
}
