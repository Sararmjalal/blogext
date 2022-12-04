import { useEffect } from "react"
import { useRef } from "react"

const Test = () => {

  const myRef = useRef(null)

  const data = '<div id="myID"><div><div><h1>How Lighthouse calculates oversized images</h1><div><p>For each image on the page, Lighthouse compares the size of the rendered image against the size of the actual image. The rendered size also accounts for device pixel ratio. If the rendered size is at least 4KiB smaller than the actual size, then the image fails the audit.</p></div><div>#Strategies for properly sizing imagesIdeally, your page should never serve images that are larger than the version thats rendered on the users screen. Anything larger than that just results in wasted bytes and slows down page load time.</div></div></div></div>'

  useEffect(() => {
    if (myRef.current) {
      const currentContent = myRef.current.innerText
      myRef.current.innerText = currentContent.slice(0,30) + '...'
    }
  } , [myRef.current])

  return (
    <div>
      <h1>Dalam</h1>
      {/* <div >Age kareto dorost anjam bedi in inja nist</div> */}
      <div ref={myRef} />
    </div>
  )
}

export default Test