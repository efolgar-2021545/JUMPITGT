import HeroSection from "../components/sections/HeroSection.jsx";
import FeaturedSection from "../components/sections/FeaturedSection.jsx";
import RentalInfoSection from "../components/sections/RentalInfoSection.jsx";
import HowToReserveSection from "../components/sections/HowToReserveSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";
import usePageTitle from "../hooks/usePageTitle";

export default function HomePage() {
    usePageTitle();

    return (
        <>
            <HeroSection />
            <FeaturedSection />
            <RentalInfoSection />
            <HowToReserveSection />
            <ContactSection />
        </>
    );
}