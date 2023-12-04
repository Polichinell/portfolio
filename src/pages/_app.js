import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#f5eacf]">
      <div className="ml-10 z-20" style={{ position: "fixed" }}>
        <Navbar />
      </div>
      <Component {...pageProps} className="z-10" />
    </div>
  );
}
