import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Plans from "../components/Plans/Plans";
import Screenshots from "../components/Screenshots/Screenshots";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import PopularMeals from "../components/PopularMeals/PopularMeals";
import PrivacyPolicy from "./PrivacyPolicy";

function Home() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PopularMeals />
      <Plans />
      <Screenshots />
      <HowItWorks />
      <FAQ />
      <CTA />

      <Footer onPrivacyClick={() => setShowPrivacy(true)} />

      {showPrivacy && (
        <PrivacyPolicy
          onClose={() => setShowPrivacy(false)}
        />
      )}
    </>
  );
}

export default Home;
