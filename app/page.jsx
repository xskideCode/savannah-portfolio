import { Button } from "@/components/ui/button";
import { FiArrowRight, FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center order-2 xl:order-none">
            <span className="text-xl">Web Design Studio</span>
            <h1 className="h1 mb-6">
              We Craft <br /> <span className="text-accent">Experiences</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              We create stunning, custom websites that combine beautiful design with seamless functionality.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Reach Out</span>
                <FiArrowRight className="text-xl" />
              </Button>
            </div>
          </div>
          {/* photo */}
          
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
