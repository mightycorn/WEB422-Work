import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SimpleForm from '../components/SimpleForm'
import UserForm from '../components/UserForm'
import FormWithValidation from '../components/FormWithValidation'

export default function Home() {
  return (
    <>
      <SimpleForm />
      <UserForm />
      <FormWithValidation />
    </>
  )
}
