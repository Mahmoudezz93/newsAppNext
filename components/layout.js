import React from 'react'
import Head from 'next/head'

export default function Layout({title, keywords, description,children }) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/> 
            <meta name='keywords' content={keywords}/>
        </Head>

        <div className=' m-60px m-auto max-w-lg' >
        {children}
        </div>
    </div>
  )
} 
Layout.defaultProps = {
    title: 'News App | check the latest news  ',
    description:'Get to know all the recent news around you',
    keywords:'News, Tech, World'
}
