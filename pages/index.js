import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Ben. <br />I am an aspiring software developer, father of
          three beautiful beings and a licensed Avatar Master with Star's Edge.{' '}
          <br />
          You can contact me at{' '}
          <a href="https://www.linkedin.com/in/ben-teiko-marrett/">
            LinkedIn.
          </a>{' '}
          <br />
          Learn about Avatar at{' '}
          <a href="www.theavatarcourse.com">The Avatar Course</a>
        </p>
        <p>
          This is a sample website - I will be building one like this soon with{' '}
          <a href="https://nextjs.org/learn">Next.js</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
