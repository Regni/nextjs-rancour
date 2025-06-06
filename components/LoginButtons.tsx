"use client"
import React from 'react'
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

const LoginButtons = () => {
  return (
    <div className="flex gap-2">
     <Button
      onClick={ ()=>{signIn("discord")}}>
      <span>Login discord</span>
      </Button>  
    <Button onClick={()=>  {signIn("battlenet")}}>
      <span>Login battlenet</span>
    </Button>
    </div>
  )
}

export default LoginButtons