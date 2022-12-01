import '../styles/globals.css'
import Link from "next/link"
function MyApp({ Component, pageProps }) {
  return <>
   <div className='navbar'>
    <Link href="/counter">Counter-App</Link>
    <Link href="/todo">Todo-App</Link>
   </div>
  <Component {...pageProps} />
  </>
}

export default MyApp
