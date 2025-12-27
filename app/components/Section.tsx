import ScrollReveal from "./ScrollReveal";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-24 px-4">
      <ScrollReveal>{children}</ScrollReveal>
    </section>
  );
}
