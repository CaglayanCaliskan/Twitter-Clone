import Head from 'next/head';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Windgets from '../components/Windgets';

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-black text-white min-h-screen flex max-w-[1288px] mx-auto'>
        <Sidebar />
        <Feed />
        <Windgets />
      </main>
    </>
  );
}
