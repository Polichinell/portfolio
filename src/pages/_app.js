import "@/styles/globals.css"
import Head from "next/head"
import Navbar from "@/components/Navbar"
import Navbar2 from "@/components/CaseStudyMenu"
import Footer from "@/components/Footer"
import Blob from "@/components/svg/Blob"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const hideNavbarOnPages = ["/case-studies/"]

  const shouldHideNavbar = router.pathname.startsWith(hideNavbarOnPages)
  const isCaseStudiesPage = router.pathname === "/case-studies"

  return (
    <div className="bg-[#f8eee8]" style={{ position: "relative" }}>
      <Head>
        <title>Polichinell | web artist♪</title>
        <meta name="description" content="Developer Portfolio" />
        <link rel="icon" href="/icons-96.png" />
      </Head>
      <div className="hidden absolute inset-0 z-5 opacity-70">
        <Blob />
      </div>
      <div className="ml-10 z-40" style={{ position: "fixed" }}>
        {!isCaseStudiesPage && !shouldHideNavbar && <Navbar />}
      </div>
      <div className="ml-10 z-40" style={{ position: "absolute" }}>
        {shouldHideNavbar && <Navbar2 link="/case-studies" text="Back" />}
      </div>
      <div className="relative z-30">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  )
}
