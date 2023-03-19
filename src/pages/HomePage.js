import Heading from "./Heading";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
