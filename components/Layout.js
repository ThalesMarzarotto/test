import React from 'react'

function Layout({Component, ...pageProps}) {
  return (
    <div>
     
     <Component {...pageProps}/>

    </div>
  )
}

export default Layout