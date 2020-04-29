import Head from 'next/head'
import Layout from '../../components/layout'

export default function test() {
  return (
    <Layout>
      <Head>
        <title>写真</title>
      </Head>
      <h1>写真のページ</h1>
      { images }
    </Layout>
  )
}