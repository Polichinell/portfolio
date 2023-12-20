import React from "react"
import CaseStudy from "@/components/CaseStudy"
import Card from "@/components/Projects/ProjectCard"

function Ecommerce() {
  const title = "Mock E-commerce website"
  const desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat imperdiet. Vitae tortor condimentum lacinia quis vel eros donec ac. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Turpis massa sed elementum tempus egestas. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed. Augue mauris augue neque gravida. Nibh cras pulvinar mattis nunc sed. Orci ac auctor augue mauris augue neque gravida in fermentum. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Mollis nunc sed id semper. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Porta lorem mollis aliquam ut porttitor leo a. Lobortis mattis aliquam faucibus purus in massa tempor nec. Rhoncus est pellentesque elit ullamcorper dignissim cras.

  Justo eget magna fermentum iaculis eu non diam. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Interdum velit laoreet id donec ultrices. Sed augue lacus viverra vitae congue. At consectetur lorem donec massa. Imperdiet nulla malesuada pellentesque elit. Sagittis id consectetur purus ut faucibus pulvinar elementum. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dictum sit amet justo donec enim. Lobortis mattis aliquam faucibus purus in massa. Elementum nisi quis eleifend quam. Et tortor at risus viverra adipiscing at in tellus. Est lorem ipsum dolor sit amet. Quam quisque id diam vel quam elementum pulvinar.
  
  In tellus integer feugiat scelerisque. Id aliquet lectus proin nibh nisl condimentum id venenatis. Tortor condimentum lacinia quis vel eros. Leo a diam sollicitudin tempor id eu nisl nunc. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu felis bibendum ut tristique et egestas quis ipsum. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Auctor urna nunc id cursus metus aliquam eleifend mi. Fermentum leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Aliquet porttitor lacus luctus accumsan tortor posuere. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Ipsum a arcu cursus vitae congue mauris rhoncus. Mauris a diam maecenas sed enim ut sem. Natoque penatibus et magnis dis.
 
  Blandit cursus risus at ultrices mi tempus imperdiet nulla. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Tincidunt arcu non sodales neque sodales ut etiam sit. Urna neque viverra justo nec ultrices dui sapien eget. Sem et tortor consequat id. A scelerisque purus semper eget duis at tellus at urna. Vulputate eu scelerisque felis imperdiet. Enim lobortis scelerisque fermentum dui. Consequat ac felis donec et. Congue eu consequat ac felis donec. Id porta nibh venenatis cras sed felis eget. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Purus viverra accumsan in nisl. Arcu non odio euismod lacinia.`
  const website = "no production"

  const team = {
    member: [
      { name: "Hocine B.", site: "https://github.com/hocine1212" },
      { name: "Manel Hasna H.", site: "https://github.com/hasnahadd" },
      { name: "Amel B.", site: "https://github.com/Amel7400" },
      { name: "Youssouf S.", site: "https://github.com/ysergma" },
    ],
    name: "souqDZ",
  }

  return (
    <>
      <div className="min-h-[800px]">
        <div className="pt-[5rem]">
          <CaseStudy
            title={title}
            description={desc}
            team={team}
            website={website}
          />
        </div>
      </div>
    </>
  )
}

export default Ecommerce
