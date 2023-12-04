import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#f8eee8]">
      <div className="ml-10 z-20" style={{ position: "fixed" }}>
        <Navbar />
      </div>
      <Component {...pageProps} className="z-10" />
      <div className="mt-[7rem]">
        <Footer />
      </div>
    </div>
  )
}
