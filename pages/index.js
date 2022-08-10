import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Ben. <br />I am a Software Developer, Father and licensed
          Avatar Master. <br />
          You can contact me at{' '}
          <a href="https://www.linkedin.com/in/ben-teiko-marrett/">LinkedIn</a>
        </p>
        <p>
          This is a sample website - I will be building one like this soon with{' '}
          <a href="https://nextjs.org/learn">Next.js</a>
        </p>
      </section>
    </Layout>
  )
}
