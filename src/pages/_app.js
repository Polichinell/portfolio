import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Navbar2 from "@/components/CaseStudyMenu"
import Footer from "@/components/Footer"
import Blob from "@/components/svg/Blob"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const hideNavbarOnPages = ["/case-studies/"]
  const hideNavbarOnCase = ["/case-studies"]

  const shouldHideNavbar = router.pathname.startsWith(hideNavbarOnPages)
  const shouldHideMenu = router.pathname.startsWith(hideNavbarOnCase)

  return (
    <div className="bg-[#f8eee8]" style={{ position: "relative" }}>
      <div className="hidden absolute inset-0 z-5 opacity-70">
        <Blob />
      </div>
      <div className="ml-10 z-40" style={{ position: "fixed" }}>
        {!shouldHideNavbar && <Navbar /> && !shouldHideMenu}
        {shouldHideNavbar && <Navbar2 />}
      </div>
      <div className="relative z-30">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  )
}
