import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Services } from "@/components/sections/services";
import { ProtectionStory } from "@/components/sections/protection-story";
import { Gallery } from "@/components/sections/gallery";
import { Process } from "@/components/sections/process";
import { Packages } from "@/components/sections/packages";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Quote } from "@/components/sections/quote";
import { Footer } from "@/components/sections/footer";
import { WhatsApp } from "@/components/ui/whatsapp";

export default function Page() {
  return <>
    <Navbar />
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <ProtectionStory />
      <Gallery />
      <Process />
      <Packages />
      <Testimonials />
      <FAQ />
      <Quote />
    </main>
    <Footer />
    <WhatsApp />
  </>;
}