import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About</h1>
    <p>I'm Shizuka, a data analyst.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <p>I am currently a data analyst with ten years of industry experience in small to large e-commerce companies. The first step in my career was a marketing associate at Rakuten, which is Japan’s largest e-commerce company, where I was responsible for analyzing customer transaction data for financial services. After four years at the company, I joined an early stage start-up as a marketing director and established a wide range of teams including data analysis, CRM, PR, and business development. I also learned programming in Python and SQL on my own, to automate and analyze data efficiently. That experience made me certain that I want to deepen my knowledge and skills on product development.</p>

    <p>Besides work, I am a mother of two children. We have moved from Japan to New York in 2019 and will move again to Toronto in 2021 for my husband's new job there (Back-end engineering at Shopify!). I knew that this program was the perfect path for me because I was already considering going back to college to study Computer Science in the first place. Although I have a master’s degree in Bioinformatics and already know the basics, I am excited to apply for this amazing opportunity to gain the latest knowledge and work experience in this new field at the same time.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
