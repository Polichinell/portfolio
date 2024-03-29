import "@/styles/globals.css"
import Head from "next/head"
import Navbar from "@/components/Navbar/Navbar"
import Navbar2 from "@/components/CaseStudyMenu"
import Footer from "@/components/Footer"
import Blob from "@/components/svg/Blob"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useMediaQuery } from "@mui/material"
import SmallNav from "@/components/Navbar/SmallNav"
import SmallestNav from "@/components/Navbar/SmallestNav"

export default function App({ Component, pageProps }) {
  const smallScreen = useMediaQuery("(min-width: 500px) and (max-width: 800px)")
  const smallestScreen = useMediaQuery("(max-width: 500px)")

  const MDscreen = smallScreen
  const SMscreen = smallestScreen

  const router = useRouter()
  const hideNavbarOnPages = ["/case-studies/"]

  const shouldHideNavbar = router.pathname.startsWith(hideNavbarOnPages)
  const isCaseStudiesPage = router.pathname === "/case-studies"

  useEffect(() => {
    const button = document.getElementById("back-to-top")

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        button.style.display = "block"
      } else {
        button.style.display = "none"
      }
    }

    window.onscroll = scrollFunction

    return () => {
      window.onscroll = null // Cleanup the event listener on component unmount
    }
  }, []) // Run the effect only once on mount

  const backToTop = () => {
    console.log("Button clicked!")
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div className="bg-[#FEFBF2]" style={{ position: "relative" }}>
      <Head>
        <title>Polichinell | web artist♪</title>
        <meta name="description" content="Developer Portfolio" />
      <meta name="description" content="~ My little side of the Internet ~ Junior Frontend web developer." />
      <meta property="og:title" content="Polichinell | web artist♪" />
      <meta property="og:description" content="Check out my portfolio and explore creative and responsive web projects, demonstrating expertise in HTML, CSS, JavaScript, Next.JS and more. Dive into a showcase of skills and passion for building engaging user experiences. ♪" />
      <meta property="og:image" content="https://louisa-h.vercel.app/low-poly-grid-haikei.png" />

        <link rel="icon" href="/icons-96.png" />
      </Head>
      <button
        type="button"
        class="btn z-50"
        id="back-to-top"
        onClick={backToTop}
      >
        ▲
      </button>
      <div className="hidden absolute inset-0 z-5 opacity-70">
        <Blob />
      </div>
      {smallScreen && !isCaseStudiesPage && !shouldHideNavbar ? (
        <div className="pb-10">
          <SmallNav />
        </div>
      ) : (
        <>
          {smallestScreen && !isCaseStudiesPage && !shouldHideNavbar ? (
            <>
              <div className="pb-20 flex flex-row px-5">
                <SmallestNav />
              </div>
            </>
          ) : (
            <>
              <div className="ml-10 z-40 navBar" style={{ position: "fixed" }}>
                {!isCaseStudiesPage && !shouldHideNavbar && <Navbar />}
              </div>
              <div>
                <div
                  className="ml-10 z-40 mb-[5rem]"
                  style={{ position: "absolute" }}
                >
                  {shouldHideNavbar && (
                    <Navbar2 link="/case-studies" text="Back" />
                  )}
                </div>
                <div
                  className="ml-10 z-40 mb-[5rem]"
                  style={{ position: "absolute" }}
                >
                  {isCaseStudiesPage && <Navbar2 link="/" text="Home" />}
                </div>
                <div className="h-[7rem]"></div>
              </div>
            </>
          )}
        </>
      )}

      <div className="relative z-20">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  )
}
