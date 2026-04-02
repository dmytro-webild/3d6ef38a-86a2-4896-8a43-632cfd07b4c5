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
import { Mail, Phone, MapPin } from "lucide-react";

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
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="MCGI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{ variant: "plain" }}
      logoText="MCGI"
      description="Join our mission to empower Mbaise families today. Your support funds critical solar water and education infrastructure, delivering immediate, life-changing results for our community—donate or volunteer now to make a lasting impact."
      buttons={[
        { text: "Learn More", href: "#about" },
        { text: "Get Involved", href: "#contact" },
      ]}
      layoutOrder="default"
      imageSrc="http://img.b2bpic.net/free-photo/people-doing-volunteer-work-foodbank_23-2149012250.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Advancing Development in Mbaise"
      description="Founded on principles of unity and service, MCGI unites Mbaise indigenes across 70+ countries. We drive socio-economic advancement, education, and healthcare through collective global action."
      metrics={[
        { value: "70+", title: "Countries Served" },
        { value: "100%", title: "Community Focus" },
        { value: "Global", title: "Diaspora Network" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/women-preparing-box-with-food-donation_23-2148613309.jpg?_wi=1"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
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
        { id: "p1", brand: "Infrastructure", name: "Solar Water Stations", price: "Commissioned", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/person-near-alternative-energy-plant_23-2149192714.jpg", reviewCount: "Operational" },
        { id: "p2", brand: "Education", name: "Computer Learning Centers", price: "Active", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/woman-looking-girl-answering-standing-near-desk_259150-60249.jpg", reviewCount: "Educating" },
        { id: "p3", brand: "Healthcare", name: "Facility Renovations", price: "Ongoing", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/people-volunteering-donating-facility_23-2148687311.jpg", reviewCount: "Healthier" },
      ]}
      title="Signature Initiatives"
      description="Key infrastructure projects driving growth in Mbaise."
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
        { id: "t4", name: "Emeka John", handle: "Project Lead", testimonial: "Working with MCGI has shown me the true power of diaspora and home collaboration.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/group-happy-diverse-volunteers_53876-13556.jpg?_wi=1" },
        { id: "t5", name: "Adaeze Ugo", handle: "Community Liaison", testimonial: "MCGI's presence has bridged the gap between our traditions and the modern world.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/group-happy-diverse-volunteers_53876-13556.jpg?_wi=2" },
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
      imageSrc="http://img.b2bpic.net/free-photo/women-preparing-box-with-food-donation_23-2148613309.jpg?_wi=2"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Membership", content: "Register via our online portal to get your membership ID and access our global network." },
        { id: "f2", title: "Volunteer", content: "Reach out to our local coordinators to get involved in ongoing community development projects." },
      ]}
      ctaTitle="Let's Connect"
      ctaDescription="Join our network and help us build a stronger Mbaise. Your support makes a real difference."
      ctaButton={{ text: "Become a Member Today", href: "mailto:info@mcgi.org" }}
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