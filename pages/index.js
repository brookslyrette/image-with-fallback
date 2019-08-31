import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import renderImage from '../components/renderImage'

const Home = () => (
  <div style={{ textAlign: 'center' }}>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Next.js SSR image with a fallback</h1>

      <h3>Image found</h3>
      {renderImage('/static/image.jpg', '/static/fallback.jpg')}

      <h3>Image not found, fallback to other image</h3>
      {renderImage('/static/not-found.jpg', '/static/fallback.jpg')}

    </div>
  </div>
)

export default Home
