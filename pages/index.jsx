// Importing thing we need
import LandingPage from "../components/LandingPage";
import ProjectShowcase from "../components/ProjectsShowcase";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// Main function
const Index = () => {
  // Returning jsx
  return (
    // Index
    <div className="index">
      {/* Landing page components  */}
      <LandingPage />
      {/* Works page components  */}
      <Works />
      {/* Project showcase page components  */}
      <ProjectShowcase />
      {/* Testimonial page components  */}
      <Testimonial />
      {/* Contact page components  */}
      <Contact />
      {/* Footer page components  */}
      <Footer />
    </div>
    // Index
  );
};
// Exporting Main Function
export default Index;
