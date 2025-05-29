import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from '@/auth'
import { Button } from './ui/button'
import DarkModeButton  from './DarkModeButton'
const navbar = async () => {
  const session = await auth()
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={90} height={30}/>
        </Link>

        <div className="flex-1 mx-4 overflow-hidden">
  <iframe 
     className="w-full h-30 md:h-34 lg:h-38" 
    src="https://raider.io/widgets/boss-progress?raid=latest&name_style=logo&difficulty=mythic&region=eu&realm=draenor&guild=Rancour&boss=latest&period=until_kill&orientation=horizontal&hide=&chromargb=transparent&theme=dragonflight"
    style={{marginBottom: "-8px", marginTop: "-8px"}}
  ></iframe>
</div>
        <div className=' flex gap-5 items-center text-black'>
          {session && session.user ? (
            <>
            <Link href="/startup/create"><span>Create</span></Link>
            <button onClick={async()=>{
              "use server"
              await signOut()}}><span>Logout</span></button>
            <Link href={`/user/${session.user.name}`}><span>{session?.user.name}</span></Link>
           {console.log(session)}
            </>): (
              <Button
               onClick={async ()=>{
                "use server"
                await signIn("discord")}}>
                <span>Login</span>
              </Button>)}
              <Button>
                <Link href="/roster">Roster</Link>
              </Button>
              <DarkModeButton />
        </div>
      </nav>
    </header>
  )
}

export default navbar