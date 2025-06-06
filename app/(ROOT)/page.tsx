import Image from "next/image"
import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import { Mail } from 'lucide-react';




export default async function Home() {

 
  return (
    <section className="mx-auto max-w-7xl p-4 bg-background-accent dark:bg-background-accent flex-grow">
      
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 ">
        <div className="flex flex-col gap-4  md:col-span-2">
        <h3 className="text-xl font-bold">Welcome!</h3>
        <p>Rancour is a 3-day raiding guild (2 days in SL), created during Castle Nathria. We have achieved CE since SoD and CE for every active raider on the team since DF. We welcome application from raiders with end-boss prog exp. from the most recent 2 tiers back up by evidence.</p>

      <p className="font-bold">Our goal: CE for every active raider on the team. World ranking is a bonus ONLY</p>
      <p>We look for people who can have fun playing the game while being able to:</p>
      <ul className="list-disc pl-5">
        <li>keep up to date with characters through chores and with game knowledge</li>
        <li>communicate inside and outside the raid effectively and respectfully</li>
        <li>self reflect and own up to your mistakes without ya-di-ya-da excuses</li>
        <li>understand 'fun' in game is built on a degree of hardwork</li>
        <li>abide by the principle: team &gt; you</li>
      </ul>
      <p>If you meet our expectation and are interested, please fill in the short application forms.gle/s37cU2M8LfboRN5BA If we are interested, we should be in touch with you within 2 or 3 days. If you have questions, please contact Shamiao through discord discord.gg/mb5u5nk</p>
      <p>We are open to social members, friends' family and friends, etc.
        We are offering guild raid/mount boosts for gold, contact Shamiao on discord for more info.</p>
      </div>



        <div className="flex flex-col gap-4 mt-8 md:col-start-3 ">
        <h3 className="text-xl font-bold">Apply here</h3>
        <p>If you're motivated, team-focused, and looking to grow with a committed group, submit an application.
           We'll review it and get back to you within 3–4 days.</p>

        <Button>
          <Link href="/apply" className="flex items-center gap-2"><Mail /><p>Apply Here!</p></Link>
        </Button>
        <div id="questions" >
          <h3 className="text-xl font-bold">Questions</h3>
          <p>If you have any question you can contact us on discord.</p>
            <Link href="https://www.discord.gg/mb5u5nk" target="_blank" className='flex items-center justify-center mt-2'>
          <Image src="/socials/Discord-Symbol-Blurple.png" alt="logo" width={45} height={30}/>
        </Link>
        </div>
        <div id="RaidTimes" className="">
          <h3 className="text-xl font-bold">Raid Times</h3>
          <ul>
            <li>monday:   20:00 - 23:00 </li>
            <li>thursday: 20:00 - 23:00 </li>
            <li>sunday:   20:00 - 23:00 </li>
          </ul>
        </div>
        </div>
      <div id="progressBannerSection" className="md:col-span-3 flex flex-col gap-4">
        <h3 className="text-xl font-bold">Progress</h3>
      <iframe 
     className="w-full h-30 md:h-36"
    src="https://raider.io/widgets/boss-progress?raid=latest&name_style=logo&difficulty=mythic&region=eu&realm=draenor&guild=Rancour&boss=latest&period=until_kill&orientation=horizontal&hide=&chromargb=transparent&theme=dragonflight"
    
        ></iframe>
      </div>
        
      </div>

   </section>
  );
}
