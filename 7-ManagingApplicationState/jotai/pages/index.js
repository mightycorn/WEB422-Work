import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Country from '../components/Country'
import Component1 from '../components/Component1'
import ComponentA from '../components/ComponentA'

export default function Home() {
  return (
    <>
      <Country />
      <Component1 /><br />
      <ComponentA />
    </>
  )
}
