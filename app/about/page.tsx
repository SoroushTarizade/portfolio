import React from 'react'
import Header from '@/components/header/Header'
import About from '@/components/about/About'
import Capabilities from '@/components/about/Capabilities'
import Experience from '@/components/about/Experience'
import Contact from '@/components/contact/Contact'
export default function pagr() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Capabilities></Capabilities>
      <Experience></Experience>
      <Contact></Contact>
    </>
  )
}
