import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </section>
  );
}
