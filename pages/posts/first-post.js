import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <h1>The value of NODE_ENV is: {process.env.NODE_ENV}</h1>
      <h1>The value of TEST_URL is: {process.env.TEST_URL}</h1>
      <h1>The value of RAILWAY_TEST is: {process.env.RAILWAY_TEST}</h1>
    </Layout>
  )
}