"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'

const OfficerTabButton = ({mode}: {mode:string}) => {

   const router = useRouter()
    const searchParams = useSearchParams()

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString())
      console.log("current params", params.toString())
      params.set('mode', mode)
    router.push(`?${params.toString()}`)

    
  }
  return (
    <Button onClick={handleClick} variant={"link"}>{`${mode}`} </Button>
  )
}

export default OfficerTabButton