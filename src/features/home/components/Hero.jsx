import { hero } from "../../../assets";
import { Button } from "../../../components/ui/Button";

const Hero = () => {
  return (
    <section>
      <div
        className="hero min-h-screen object-contain"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Welcome to our website</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
