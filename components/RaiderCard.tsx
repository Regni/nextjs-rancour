
import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const raiderCard = ({name,realm, rank,wowClass,spec,role,lastUpdate, avatarUrl}: {
  name: string
  realm: string
  rank: number
  wowClass: string
  spec: string
  role: string
  lastUpdate: string
  avatarUrl: string

}) => {
  const lastUpdateDate = new Date(lastUpdate)
  const rolePicture = role === "DPS" ? "/icon_3.png" : role === "HEALING" ? "/icon_1.png" : "/icon_2.png"

  const rankName = rank === 1 ? "GM" : rank === 2 ? "Officer" : rank === 4  ? "Raider" : rank=== 7 ? "Raider" :  "Trial" 
  return (
    <Card className="relative overflow-hidden">
    <Image src={avatarUrl} alt='Role Badge' width={48} height={48} className='absolute top-2 right-2 rounded-tr-2xl'/>
    <Image src={rolePicture}  alt='role Badge' width={80} height={80} className='absolute bottom-0 right-0'/>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{`${spec} ${wowClass}`}</CardDescription>
    </CardHeader>
    <CardContent>
      <div>
        <p>Rank: {rankName}</p>
        {name === "Brentdruid" && <p>Reroll?: <span className='text-red-500'>True</span></p>}
         {name === "Nydous" && <p><span className='font-medium'>BIO:</span> Damnboyy's mistress and questionable driver according to Shami </p>}
        {name === "Damnboyy" && <p><span className='font-medium'>BIO: </span>Fury warrior one trick, used to have 5-10 fps on pull, 10 dces each raid day, depleteing keys left right and center, tank prodigy.</p>}
      </div>
    </CardContent>
    <CardFooter>
      <p>update at: {lastUpdateDate.toLocaleString("en-GB")}</p>
    </CardFooter>
</Card>
  )
}

export default raiderCard