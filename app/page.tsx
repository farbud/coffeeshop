import HeroSlider from "@/app/components/ui/HeroSlider";
import Section from "@/app/components/Section";
import FeatureCard from "@/app/components/featureCard";
import CoffeeRain from "./components/ui/CoffeeRain";
import { products } from "./data/products";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-screen">
        <CoffeeRain />

        <HeroSlider />

        <Section>
          <h2 className="text-2xl font-bold mb-4">محصولات ویژه</h2>
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <FeatureCard key={p.id} {...p} />
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-center">
            قهوه فقط یک نوشیدنی نیست ☕
          </h2>
        </Section>
      </div>
      <Footer />
    </>
  );
}
