import LandingPage from "../components/LandingPage";
import ProjectShowcase from "../components/ProjectsShowcase";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const Index = () => {
  return (
    <div className="index">
      <LandingPage />
      <Works />
      <ProjectShowcase />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
