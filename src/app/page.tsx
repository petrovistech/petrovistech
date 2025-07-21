import AboutSection from '@/components/aboutus/aboutus';
import ContactForm from '@/components/contactform/contactform';
import Footer from '@/components/footer/footer';
import OurServices from '@/components/ourservices/ourservices';
import ProcessSection from '@/components/process/process';
import ProjectsSection from '@/components/projects/projects';
import SustainSection from '@/components/sustain/sustain';

export default function HomePage() {
  return (
    <main>
      <AboutSection/>
      <OurServices/>
      <ProcessSection/>
      <ProjectsSection/>
      <SustainSection/>
      <ContactForm/>
        <Footer/>
    </main>
  );
}
