"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const ContactButton = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/contact')
    }
  return (
    <button onClick={handleClick}>Contact</button>
  )
}

export default ContactButton