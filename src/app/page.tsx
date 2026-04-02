"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Quality Education", id: "quality-education" },
        { name: "Poverty Alleviation", id: "poverty-alleviation" },
        { name: "Good Health", id: "good-health" },
        { name: "Clean Water & Sanitization", id: "clean-water" },
        { name: "Socio Economic Transformation", id: "socio-economic-transformation" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="MCGI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{ variant: "plain" }}
      logoText="MCGI"
      description="Empower every Mbaise citizen with the sustainable infrastructure and resources they need to thrive. By supporting our mission today, you are fueling tangible community transformation and securing a brighter, prosperous future for our people."
      buttons={[
        { text: "Invest in Mbaise's Future", href: "#contact" },
        { text: "Learn More", href: "#about" },
      ]}
      layoutOrder="default"
      imageSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
      imageAlt="Quality education initiative in Mbaise"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Advancing Development in Mbaise"
      description="Founded on principles of unity and service, MCGI unites Mbaise indigenes across 70+ countries. We drive socio-economic advancement, education, and healthcare through collective global action. Our Economic Transformation Initiative now includes the ongoing Mbaise Resource Center, which provides targeted skill acquisition and empowerment programs to create sustainable livelihoods for our youth."
      metrics={[
        { value: "70+", title: "Countries Served" },
        { value: "100%", title: "Community Focus" },
        { value: "Global", title: "Diaspora Network" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BnL2MQ9gSRG06ozeMSAxFTv1Up/uploaded-1775122590722-hvvg1rxw.jpg"
      imageAlt="Mbaise Resource Center for skill acquisition and empowerment"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      title="Groundbreaking Ceremony"
      description="Highlights from the groundbreaking event for the new Mbaise Signature Complex (Resource Center), a milestone for our community's future."
      products={[
        { id: "g1", brand: "Ceremony", name: "Setting the Stage", price: "Groundbreaking", rating: 5, reviewCount: "100", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BnL2MQ9gSRG06ozeMSAxFTv1Up/uploaded-1775124118753-5wrzgqrk.jpg" },
        { id: "g2", brand: "Community", name: "Local Leaders Present", price: "Groundbreaking", rating: 5, reviewCount: "100", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BnL2MQ9gSRG06ozeMSAxFTv1Up/uploaded-1775124118753-cht8tyn7.jpg" },
        { id: "g3", brand: "Innovation", name: "Resource Center Site", price: "Groundbreaking", rating: 5, reviewCount: "100", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BnL2MQ9gSRG06ozeMSAxFTv1Up/uploaded-1775124118753-ro40sc1b.jpg" },
        { id: "g4", brand: "Vision", name: "Project Launch", price: "Groundbreaking", rating: 5, reviewCount: "100", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BnL2MQ9gSRG06ozeMSAxFTv1Up/uploaded-1775124118754-vpyty01j.jpg" },
        { id: "g5", brand: "Future", name: "Community Hope", price: "Groundbreaking", rating: 5, reviewCount: "100", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BnL2MQ9gSRG06ozeMSAxFTv1Up/uploaded-1775124118754-tnba45u1.jpg" },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Impact by the Numbers"
      tag="Our Progress"
      metrics={[
        { id: "m1", value: "3", description: "Local Government Areas Served" },
        { id: "m2", value: "Solar", description: "Powered Water Projects" },
        { id: "m3", value: "Computer", description: "Learning Hubs Established" },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="projects" data-section="projects">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Clean Water", name: "Clean Water & Sanitation", price: "Critical Infrastructure", rating: 5, reviewCount: "120", imageSrc: "https://images.unsplash.com/photo-1585464295907-7d34639910d5?q=80&w=1200&auto=format&fit=crop", imageAlt: "Clean water access initiative" },
        { id: "p2", brand: "Education", name: "Quality Education", price: "Empowering Youth", rating: 5, reviewCount: "85", imageSrc: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop", imageAlt: "Quality education in Mbaise" },
        { id: "p3", brand: "Health", name: "Good Health", price: "Community Well-being", rating: 5, reviewCount: "95", imageSrc: "https://images.unsplash.com/photo-1579684385127-1d15d5b85571?q=80&w=1200&auto=format&fit=crop", imageAlt: "Good health initiative" },
      ]}
      title="Our Core Initiatives"
      description="We are dedicated to driving impactful change through five key initiatives that address the most pressing needs of the Mbaise community."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="blur-reveal"
      textboxLayout="split-description"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Chief Okeke", handle: "Community Elder", testimonial: "The solar water project has completely transformed our daily lives. MCGI's commitment to our welfare is unmatched.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-work_23-2149097959.jpg" },
        { id: "t2", name: "Chinaza Obi", handle: "Student Representative", testimonial: "The computer center opened doors for my studies that I never thought possible in my village.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-girl-eyeglasses-dreamily-looks-up-happy-tanned-teenager-striped-shirt-smiles-poses-orange-background_197531-27596.jpg" },
        { id: "t3", name: "Mrs. Nneka", handle: "Community Advocate", testimonial: "Seeing the renovation of our local health facility gives me hope for a healthier future for all our families.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-beautiful-brunette-female-wearing-working-clothes-apron-standing-workshop_613910-5811.jpg" },
      ]}
      showRating={true}
      title="Voices of the Community"
      description="Testimonials from beneficiaries and supporters of MCGI's mission."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Who can join MCGI?", content: "MCGI welcomes all Mbaise indigenes at home and in the diaspora who share our commitment to positive growth." },
        { id: "q2", title: "How can I support projects?", content: "You can support us through donations, volunteering your expertise, or joining our global network chapters." },
        { id: "q3", title: "What is the Signature Centre Project?", content: "It is our landmark project to build a multifunctional hub for education, commerce, and innovation." },
        { id: "q4", title: "Is MCGI registered?", content: "Yes, MCGI is a fully registered global non-profit entity dedicated to transparency and accountability." }
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common inquiries about our organization and global initiatives."
      faqsAnimation="blur-reveal"
      imageSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Membership", content: "Register via our online portal to get your membership ID and access our global network." },
        { id: "f2", title: "Volunteer", content: "Reach out to our local coordinators to get involved in ongoing community development projects."},
      ]}
      ctaTitle="Join Our Global Mission"
      ctaDescription="Join our network and help us build a stronger Mbaise. Your support makes a real difference."
      ctaButton={{ text: "Become a Member", href: "mailto:info@mcgi.org" }}
      ctaIcon={Mail}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Organization",          items: [{ label: "About Us", href: "#about" }, { label: "Our Mission", href: "#about" }, { label: "Leadership", href: "#about" }],
        },
        {
          title: "Resources",          items: [{ label: "Projects", href: "#projects" }, { label: "FAQ", href: "#faq" }, { label: "Privacy", href: "#" }],
        },
        {
          title: "Support",          items: [{ label: "Contact Us", href: "#contact" }, { label: "Donate", href: "#contact" }, { label: "Volunteer", href: "#contact" }],
        },
      ]}
      bottomLeftText="© 2024 Mbaise Connect Global Initiative"
      bottomRightText="Empowering Our Community Together"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}