import React from "react"
import CaseStudy from "@/components/CaseStudy"

function MoviePr() {
  const title = "Movie Catalogue Project"
  const website = "https://cinecoderss.vercel.app"

  const team = {
    member: [
      { name: "Walid B.", site: "https://github.com/walidbelharazem" },
      { name: "Khalil N.", site: "https://github.com/Khalil-NOUIz" },
      { name: "Mounia B.", site: "https://github.com/MouniaBelkheir" },
      { name: "Bushra D.", site: "https://github.com/Bushra369" },
    ],
    name: "cinecoders",
  }

  return (
    <>
      <div className="min-h-[800px]">
        <div className="pt-[5rem]">
          <CaseStudy title={title} team={team} website={website}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              est placerat in egestas erat imperdiet. Vitae tortor condimentum
              lacinia quis vel eros donec ac. Dictum fusce ut placerat orci
              nulla pellentesque dignissim enim. Turpis massa sed elementum
              tempus egestas. Vulputate mi sit amet mauris commodo quis
              imperdiet massa tincidunt. Consectetur adipiscing elit
              pellentesque habitant morbi tristique senectus et netus. Vitae
              elementum curabitur vitae nunc sed. Augue mauris augue neque
              gravida. Nibh cras pulvinar mattis nunc sed. Orci ac auctor augue
              mauris augue neque gravida in fermentum. Odio pellentesque diam
              volutpat commodo sed egestas egestas fringilla. Urna et pharetra
              pharetra massa massa ultricies mi quis hendrerit. Sit amet
              venenatis urna cursus eget nunc scelerisque viverra. Mollis nunc
              sed id semper. Potenti nullam ac tortor vitae purus faucibus
              ornare suspendisse sed. Ullamcorper dignissim cras tincidunt
              lobortis feugiat vivamus at. Porta lorem mollis aliquam ut
              porttitor leo a. Lobortis mattis aliquam faucibus purus in massa
              tempor nec. Rhoncus est pellentesque elit ullamcorper dignissim
              cras. Justo eget magna fermentum iaculis eu non diam. Vel elit
              scelerisque mauris pellentesque pulvinar pellentesque habitant
              morbi tristique. Interdum velit laoreet id donec ultrices. Sed
              augue lacus viverra vitae congue. At consectetur lorem donec
              massa. Imperdiet nulla malesuada pellentesque elit. Sagittis id
              consectetur purus ut faucibus pulvinar elementum. Est pellentesque
              elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dictum
              sit amet justo donec enim. Lobortis mattis aliquam faucibus purus
              in massa. Elementum nisi quis eleifend quam. Et tortor at risus
              viverra adipiscing at in tellus. Est lorem ipsum dolor sit amet.
              Quam quisque id diam vel quam elementum pulvinar. Blandit cursus
              risus at ultrices mi tempus imperdiet nulla. Venenatis cras sed
              felis eget velit aliquet sagittis id consectetur. Tincidunt arcu
              non sodales neque sodales ut etiam sit. Urna neque viverra justo
              nec ultrices dui sapien eget. Sem et tortor consequat id. A
              scelerisque purus semper eget duis at tellus at urna. Vulputate eu
              scelerisque felis imperdiet. Enim lobortis scelerisque fermentum
              dui. Consequat ac felis donec et. Congue eu consequat ac felis
              donec. Id porta nibh venenatis cras sed felis eget. Volutpat
              commodo sed egestas egestas fringilla phasellus faucibus. Pharetra
              magna ac placerat vestibulum lectus mauris ultrices eros in. Purus
              viverra accumsan in nisl. Arcu non odio euismod lacinia.
            </p>
          </CaseStudy>
        </div>
      </div>
    </>
  )
}

export default MoviePr
