import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import type { Technology } from "./type/types"
import { Suspense } from "react";
import ExploreTech from "./components/ExploreTech";
import Footer from "./components/Footer";
import { BiLoaderCircle } from "react-icons/bi";

const technologyPromis = async (): Promise<Technology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {

  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="flex justify-center font-">
          <BiLoaderCircle />
        </div>}>
          <ExploreTech prop={technologyPromis()} />
        </Suspense>
        < Footer/>
      </header>
    </>
  )
}

export default App
