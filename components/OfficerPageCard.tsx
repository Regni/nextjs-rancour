
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
import { WeeklyEntry } from '@/types/raider.types'
import  {ScrollArea } from '@/components/ui/scroll-area'


const OfficerPageCard = ({weeklies}: { weeklies: WeeklyEntry }) => {
  
  const {raider: { name, rank, class : wowClass, spec, role, raiderioUpdate : lastUpdate, avatarUrl },runUrls} = weeklies;
  const lastUpdateDate = new Date(lastUpdate)
  const rolePicture = role === "DPS" ? "/icon_3.png" : role === "HEALING" ? "/icon_1.png" : "/icon_2.png"

  const rankName = rank === 1 ? "GM" : rank === 2 ? "Officer" : rank === 4  ? "Raider" : rank=== 7 ? "Raider" :  "Trial" 
  return (
    <Card className="relative overflow-hidden  h-[250px]">
    <Image src={avatarUrl} alt='Role Badge' width={48} height={48} className='absolute top-2 right-2 rounded-tr-2xl'/>
    <Image src={rolePicture}  alt='role Badge' width={80} height={80} className='absolute bottom-0 right-0'/>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{`${spec} ${wowClass}`}</CardDescription>
    </CardHeader>
    <CardContent className='flex-grow'>
      <div>
       {runUrls.length > 0 ? (
          <ScrollArea className="max-h-[100px] overflow-y-auto pr-2">
         <div className='flex flex-col gap-2 '>

          
          {runUrls.map((runUrl, index) => (
            <a key={index + runUrl} href={runUrl} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline '>
             {runUrl.replace(/^.*?-(\d+-.*)$/, '$1').split('-').join(' ')}
            </a>
          ))}
        </div>
          </ScrollArea>
       ) : (
        <p className='text-red-500'>No runs found for this week</p>
       )}
      </div>
    </CardContent>
    <CardFooter>
      <p>update at: {lastUpdateDate.toLocaleString("en-GB")}</p>
    </CardFooter>
</Card>
  )
}

export default OfficerPageCard