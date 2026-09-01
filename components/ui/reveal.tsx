 "use client";
import { useEffect, useRef } from "react";
import anime from "animejs";
export function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=ref.current;if(!el)return; const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){anime({targets:el,opacity:[0,1],translateY:[26,0],duration:750,easing:"easeOutCubic"});obs.disconnect();}}, {threshold:.12});obs.observe(el);return()=>obs.disconnect()},[]);
 return <div ref={ref} className={"opacity-0 "+className}>{children}</div>
}