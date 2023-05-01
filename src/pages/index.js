import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import Nav from './nav'
import MenuVistas from './menuvistas'
import Footers from './footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Burger Queen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <MenuVistas></MenuVistas>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
            <h1><Link href="/takeorder" > Ir a Vista Mesero </Link> </h1>
          <h1><Link href="/menuvistas" > Ir a prueba Menu vistas</Link> </h1>
        </div>
      </main>
      <Footers></Footers>
    </>
  )
}
