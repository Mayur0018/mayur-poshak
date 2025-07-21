import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import MostTrending from "@/components/MostTrending";
import About from "@/components/About";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <>
   <main>
      <Hero/>
      <Categories/>
      <MostTrending/>
      <About/>
    </main>
    </>
  );
}
