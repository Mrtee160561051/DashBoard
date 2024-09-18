import React, { useState } from 'react';
import homeSvg from "./assets/home.svg";
import ProfileSvg from "./assets/card-account-details-outline.svg"
import messageSvg from "./assets/message-reply.svg";
import historySvg from "./assets/clock-time-four.svg";
import taskSvg from "./assets/file-multiple.svg";
import communitySvg from "./assets/account-group.svg";
import settingSvg from "./assets/cog.svg";
import supportSvg from "./assets/help-box.svg";
import privacySvg from "./assets/shield-check.svg";
import searchSvg from "./assets/magnify.svg";
import bellRing from "./assets/bell-ring-outline.svg"
import pic1 from "./assets/images/SharkBoy.png"
import pic2 from "./assets/images/TheBoi.png"
import pic3 from "./assets/images/Rabblerouser.png"
import pic4 from "./assets/images/PerformerGirl.png"
import pic5 from "./assets/images/Monke.png"
import eye from "./assets/eye-plus-outline.svg"
import star from "./assets/star-plus-outline.svg"
import fork from "./assets/source-fork.svg"

function App() {
  const userName = "Tiana"
  const Name ="Akinyemi Christiana Favour"
  const navLists = [
    [{id: 1,name: "Home", source:homeSvg},
    {id: 2,name: "Profile", source:ProfileSvg},
    {id: 3,name: "Messages", source:messageSvg},
    {id: 4,name: "History", source:historySvg},
    {id: 5,name: "Task", source:taskSvg},
    {id: 6,name: "Communities", source:communitySvg},],
    [{id: 1,name: "Settings", source:settingSvg},
     {id: 2,name: "Support", source:supportSvg},
     {id: 3,name: "Privacy", source:privacySvg}]
  ]
  const userList =[
    {id: 1,name: "tegan", source:pic2, text: "World Peace Builder"},
    {id: 2,name: "morgan", source:pic3, text: "Super Cool Project"},
    {id: 3,name: "kendall", source:pic4, text: "Life changing App"},
    {id: 4,name: "alex", source:pic5, text: "No Traffic Maker"},
  ]
 const displayList =[
  {id: 1,name: "Super Cool Project", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos..."},
  {id: 2,name: "Less Cool Project", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..."},
  {id: 3,name: "Impossible App", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..."},
  {id: 4,name: "Easy Peasy App", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..."},
  {id: 5,name: "Ad Blocker", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..."},
  {id: 6,name: "Money Maker", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat..."},
]
  return (
    <div className="grid grid-cols-6 min-h-dvh text-[#636B61] bg-[#E3D7FF] ">
      <nav className="bg-[#880e0e] z-10 fixed h-dvh sm:w-1/6 bg-[url('src/assets/images/red-scaletbg.jpg')] text-[#E3D7FF] col-[1] sm:pl-3 pt-3 flex flex-col gap-8">
        <h1 className='flex justify-center sm:justify-start items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="none" />
                <path fill="#f8f7f7" d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1m0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1M13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1" />
            </svg>
              <span className='text-[clamp(9px,1.5vw,1em)] font-black ml-1 sm:block hidden'>DASHBOARD</span>
        </h1>
        <ul className='flex flex-col gap-3'>
           {navLists[0].map(list=>(
            <li key={list.id} className='flex justify-center sm:justify-start items-center'>
              <img className='w-5' src={list.source}/>
              <span className='text-[clamp(8px,1.5vw,0.9em)] font-semibold ml-2 sm:block hidden'>{list.name}</span>
            </li>
           ))}
        </ul>
        <ul className='flex flex-col gap-3'>
            {navLists[1].map(list=>(
                <li key={list.id} className='flex justify-center sm:justify-start items-center'>
                  <img className='w-5' src={list.source}/>
                  <span className='text-[clamp(8px,1.5vw,0.9em)] font-semibold ml-2 sm:block hidden'>{list.name}</span>
                </li>
              ))}
        </ul>
      </nav>
      <main className='sm:col-[2/7] ml-[1.5em] sm:m-0 col-[1/7] text-black flex flex-col'>
       <header className='bg-white px-[3vw] p-[min(1.5vw,0.5em)] shadow-md sticky top-0'>
          <article className='flex gap-3 justify-between items-center'>
              <div className='flex gap-2'>
                  <img className='w-5' src={searchSvg}/> 
                  <input className='w-[min(60vw,25em)] h-6 bg-[#E3D7FF]'/>
              </div>
              <div className='flex gap-[clamp(0.5rem,2vw,0.9rem)] items-center'>
                  <img className='w-5' src={bellRing}/> 
                  <img className='w-[clamp(0.9rem,2vw,1.7rem)] rounded-[50%]'  src={pic1}/>
                  <p className='font-bold text-[min(11px,1.5vw)] hidden xs:block'>{Name.length > 20? `${Name.replace(/^(\w+)\s+(\w+)\s+(\w)\w+$/, '$1 $2 $3.')}`: Name}</p>
              </div>
          </article>
          <article className='flex gap-3 items-center justify-between pt-2'>
              <div className='flex gap-3 items-center'>
                <img className='w-[clamp(1.3rem,4vw,3rem)] rounded-[50%]'  src={pic1}/>
                <div>
                  <p className='text-[min(10px,1.4vw)] font-semibold'>Hi there,</p>
                  <p className='font-black text-[min(15px,2vw)]'>{`${Name.length > 20? Name.replace(/^(\w+)\s+(\w+)\s+(\w)\w+$/, '$1 $2 $3.'): Name} (@${userName})`}</p>
                </div>
              </div>
              <div className='flex gap-2'>
                 <button className='border bg-[#4d0808] text-[min(13px,2vw)] text-white rounded-full py-[0.15rem] px-[min(2em,3vw)]'>New</button>
                 <button className='border bg-[#4d0808] text-[min(13px,2vw)] text-white rounded-full py-[0.15rem] px-[min(2em,3vw)]'>Upload</button>
                 <button className='border bg-[#4d0808] text-[min(13px,2vw)] text-white rounded-full py-[0.15rem] px-[min(2em,3vw)]'>Share</button>
              </div>
          </article>
       </header>
       <section className='text-[clamp(11px,1vw,1em)] px-[1rem] pt-4 bg-[#E3D7FF] grid grid-cols-10 gap-4'>
          <article className=' col-[1/11] xs:col-[1/6] lg:col-[1/8] row-span-2'>
            <h2 className='text-[clamp(15px,3vw,1.2em)] font-semibold'>Your Projects</h2>
              <div  className='flex flex-wrap gap-4'>
               {displayList.map(display=>(
                  <div key={display.id} className='bg-white lg:w-[48.5%] p-7 mt-1 rounded-lg border-[#4d0808] border-l-8'>
                      <h4 className='text-[clamp(12px,3vw,1em)] font-semibold'>{display.name}</h4>
                      <p>{display.text}</p>
                      <div className='flex mt-6 justify-end gap-2'>
                        <img className='w-5' src={star}/>
                        <img className='w-5' src={eye}/>
                        <img className='w-5' src={fork}/>
                      </div>
                   </div>
                 ))}
             </div>
          </article>
          <aside className='col-[1/11] xs:col-[6/11] lg:col-[8/11]'>
               <h2 className='text-[clamp(15px,3vw,1.2em)] font-semibold'>Announcements</h2>
               <div className='bg-white p-5 mt-1 rounded-lg'>
                  <div>
                    <h4 className='text-[clamp(12px,1vw,1.1em)] font-medium'>Site Maintenance</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...</p>
                  </div>
                  <hr className='my-3'/>
                  <div>
                    <h4 className='text-[clamp(12px,1vw,1.1em)] font-medium'>Community Share Day</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...</p>
                  </div>
                  <hr className='my-3'/>
                  <div>
                    <h4 className='text-[clamp(12px,1vw,1.1em)] font-medium'>Updated Privacy Policy</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...</p>
                  </div>
               </div>
               <h2 className='text-[clamp(15px,3vw,1.2em)] mt-6 font-semibold'>Trending</h2>
               <div className='bg-white p-4 mt-1 rounded-lg'>
                 {
                  userList.map(user=>(
                    <div key={user.id} className='flex gap-2 py-2'>
                      <img className='w-[clamp(1rem,3vw,2.4rem)] rounded-[50%]'  src={user.source}/>
                      <div>
                        <p className='font-medium'>{`@${user.name}`}</p>
                        <p>{user.text}</p>
                      </div>
                     </div>
                  ))
                 }
                 
               </div>
          </aside>
          
       </section>
      </main>
    </div>
  );
}

export default React.memo(App);
