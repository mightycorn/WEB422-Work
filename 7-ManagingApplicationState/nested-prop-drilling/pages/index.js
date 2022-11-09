import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Component1 from '../components/Component1'
import ComponentA from '../components/ComponentA'

export default function Home(props) {
  return (
    <>
      <Component1 count={props.count} />
      <ComponentA setCount={props.setCount} />
    </>
  )
}
