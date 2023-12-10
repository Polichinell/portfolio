import React from "react"

function Footer() {
  return (
    <div>
      <div className="footerSVG">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
          <path
            fill="#905e53"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,165.3C672,203,768,245,864,240C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-[#905E53] text-center text-[#f8eee8] pb-[20px] w-full">
        <p>&copy; 2023 Fooooooooooooooooooooooter</p>
      </div>
    </div>
  )
}

export default Footer
