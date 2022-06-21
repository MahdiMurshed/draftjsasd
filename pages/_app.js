import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {

    window.MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [["$","$"],["\\(","\\)"]],
        displayMath:[["$$", "$$"], ["\\[","\\]"]]
      },
      showMathMenu: false,
      messageStyle: "none"
    })

  }, []);
  return <Component {...pageProps} />
}

export default MyApp
