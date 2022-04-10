import Head from 'next/head';
import Feed from '../components/Feed';

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Feed />
      </main>
    </>
  );
}
