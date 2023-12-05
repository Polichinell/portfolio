import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Blob from "@/components/svg/Blob"

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#f8eee8]" style={{ position: "relative" }}>
      <div className="absolute inset-0 z-5 opacity-70">
        <Blob />
      </div>
      <div className="ml-10 z-40" style={{ position: "fixed" }}>
        <Navbar />
      </div>
      <div className="relative z-30">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  )
}
