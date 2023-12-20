import React from "react"
import CaseStudy from "@/components/CaseStudy"

function Pebble() {
  const title = "Case Study: Capstone Project"
  const desc = `Justo eget magna fermentum iaculis eu non diam. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Interdum velit laoreet id donec ultrices. Sed augue lacus viverra vitae congue. At consectetur lorem donec massa. Imperdiet nulla malesuada pellentesque elit. Sagittis id consectetur purus ut faucibus pulvinar elementum. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dictum sit amet justo donec enim. Lobortis mattis aliquam faucibus purus in massa. Elementum nisi quis eleifend quam. Et tortor at risus viverra adipiscing at in tellus. Est lorem ipsum dolor sit amet. Quam quisque id diam vel quam elementum pulvinar.
  
  In tellus integer feugiat scelers. Tortor condimentum lacinia quis vel eros. Leo a diam sollicitudin tempor id eu nisl nunc. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Dignissim diam quis enim lobortis scelerisque fermentum dui. Arcu felis bibendum ut tristique et egestas quis ipsum. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Auctor urna nunc id cursus metus aliquam eleifend mi. Fermentum leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Aliquet porttitor lacus luctus accumsan tortor posuere. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Ipsum a arcu cursus vitae congue mauris rhoncus. Mauris a diam maecenas sed enim ut sem. Natoque penatibus et magnis dis.
 
  Blandit cursus risus at ultrices mi tempus imperdiet nulla. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Tincidunt arcu non sodales neque sodales ut etiam sit. Urna neque viverra justo nec ultrices dui sapien eget. Sem et tortor consequat id. A scelerisque purus semper eget duis at tellus at urna. Vulputate eu scelerisque felis imperdiet. Enim lobortis scelerisque fermentum dui. Consequat ac felis donec et. Congue eu consequat ac felis donec. Id porta nibh venenatis cras sed felis eget. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Purus viverra accumsan in nisl. Arcu non odio euismod lacinia.`

  const website = "https://pebble-work.vercel.app"

  const team = {
    member: [
      { name: "Takieddine D.", site: "https://github.com/takidilmi" },
      { name: "Manel Hasna H.", site: "https://github.com/hasnahadd" },
      { name: "Halla H.", site: "https://github.com/Halla24" },
      { name: "Youssouf S.", site: "https://github.com/ysergma" },
    ],
    name: "Team 7",
  }

  console.log(team)
  console.log(team.member[0].name)

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

export default Pebble
