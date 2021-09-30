import { NextSeo } from "next-seo"

const about = () => {

  const SEO = {
    title: "About page",
    description: "Just your normal about page."
  }

  return (
    <div>
      <NextSeo {...SEO} />
      Im an about page
    </div>
  )
}

export default about
