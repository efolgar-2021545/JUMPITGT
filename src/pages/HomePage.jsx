import HeroSection from "../components/sections/HeroSection.jsx";
import FeaturedSection from "../components/sections/FeaturedSection.jsx";
import RentalInfoSection from "../components/sections/RentalInfoSection.jsx";
import HowToReserveSection from "../components/sections/HowToReserveSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";

export default function HomePage() {
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