import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Wigets from '../components/Wigets';
import Head from 'next/head';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='bg-black text-white min-h-screen flex max-w-[1288px] mx-auto'>
        <Sidebar />
        <Component {...pageProps} />
        <Wigets />
      </div>
    </>
  );
}

export default MyApp;
