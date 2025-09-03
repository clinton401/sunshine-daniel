import { Rts } from "./Rts";
import { Navbar } from "./layout/navbar";
import { Toaster } from "@/components/ui/sonner"

function App() {

  return (
    <main className=" font-raleway min-h-dvh w-full flex flex-col overflow-hidden">
      <Navbar />
      <Rts />
      <Toaster />
    </main>
  );
}

export default App;
