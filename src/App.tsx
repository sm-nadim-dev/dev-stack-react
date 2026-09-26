import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import type { Technology } from "./type/types"
import { Suspense } from "react";
import { LuLoader } from "react-icons/lu";
import ExploreTech from "./components/ExploreTech";

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
        <Suspense fallback={<LuLoader />}>
          <ExploreTech prop={technologyPromis()} />
        </Suspense>
      </header>
    </>
  )
}

export default App
