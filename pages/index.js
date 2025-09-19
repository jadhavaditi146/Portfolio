import Head from 'next/head'
import PortfolioSite from '../components/PortfolioSite'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditi Jadhav - Web Developer & Data Analyst</title>
        <meta name="description" content="Portfolio of Aditi Jadhav - Passionate web developer and data analyst with 4+ years of experience creating innovative digital solutions." />
        <meta name="keywords" content="web developer, data analyst, React, Next.js, Python, portfolio" />
        <meta property="og:title" content="Aditi Jadhav - Web Developer & Data Analyst" />
        <meta property="og:description" content="Crafting digital experiences with data-driven insights" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PortfolioSite />
    </>
  )
}

