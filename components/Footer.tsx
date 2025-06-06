import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Footer = async () => {

  return (
    <footer className='px-5 py-3 bg-[#5ec452] dark:bg-[#344a26] text-black dark:text-white shadow-sm font-work-sans flex items-center justify-between'>
     
              <div className="">
            <span className="text-secondary">© 2025 - Rancour Guild</span>
          </div>
                
              
    
    <div id='socials' className='flex justify-center gap-5 mt-3'>
       <Link href="https://raider.io/guilds/eu/draenor/Rancour" target="_blank">
          <Image src="/socials/RIO_icon.png" alt="logo" width={45} height={30}/>
        </Link>
        <Link href="https://worldofwarcraft.blizzard.com/en-gb/guild/eu/draenor/rancour" target="_blank">
          <Image src="/socials/WOW_icon.png" alt="logo" width={45} height={30}/>
        </Link>
<Link href="https://www.warcraftlogs.com/guild/eu/draenor/Rancour" target="_blank">
          <Image src="/socials/WLogs_icon.png" alt="logo" width={45} height={30}/>
        </Link>
        <Link href="https://www.discord.gg/mb5u5nk" target="_blank" className='flex items-center justify-center'>
          <Image src="/socials/Discord-Symbol-Blurple.png" alt="logo" width={45} height={30}/>
        </Link>


    </div>
    </footer>
  )
}

export default Footer