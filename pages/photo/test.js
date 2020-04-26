import Head from 'next/head'
import Layout from '../../components/layout'
import axios from 'axios'

async function makeGetRequest() {
  
  let res = await axios.get('http://webcode.me');

  let data = res.data;
  console.log(data);
}

makeGetRequest();

export default function test() {
  return (
    <Layout>
      <Head>
        <title>写真</title>
      </Head>
      <h1>写真のページ</h1>
    </Layout>
  )
}