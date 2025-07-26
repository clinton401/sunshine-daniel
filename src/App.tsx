import { Rts } from "./Rts";
import { Navbar } from "./layout/navbar";
import { Toaster } from "@/components/ui/sonner"

function App() {

  return (
    <main className=" font-sora w-full overflow-hidden">
      <Navbar />
      <Rts />
      <Toaster />
    </main>
  );
}

export default App;
