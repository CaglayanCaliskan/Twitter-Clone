import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import Wigets from '../components/Wigets';

function MyApp({Component, pageProps}) {
  return (
    <div className='bg-black text-white min-h-screen flex max-w-[1288px] mx-auto'>
      <Sidebar />
      <Component {...pageProps} />
      <Wigets />
    </div>
  );
}

export default MyApp;
