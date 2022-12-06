import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div >
       
         <nav style={{"display":"flex","alignItems":"center","justifyContent":"space-evenly","fontSize":"larger","fontWeight":"bolder","color":"rebeccapurple","padding":"10px "}}><Link href="/">Home</Link>
         <Link href="/wishlists">Wishlists</Link></nav>
         <br></br>
         <br></br>
         <hr/>
    <Component {...pageProps} />
  </div>
}

export default MyApp
