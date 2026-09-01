 "use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { faqs } from "@/lib/data";
export function FAQ(){const [open,setOpen]=useState(0);return <section id="faq" className="py-28 md:py-36"><Container><SectionHeading eyebrow="Questions" title="Before you protect it." body="Answer the objections that stop a high-intent visitor from becoming an enquiry."/><div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">{faqs.map(([q,a],i)=><button key={q} onClick={()=>setOpen(open===i?-1:i)} className="block w-full py-6 text-left"><div className="flex items-center justify-between gap-5"><span className="text-base font-semibold">{q}</span><Plus size={18} className={"shrink-0 text-champagne transition "+(open===i?"rotate-45":"")}/></div><div className={"grid transition-[grid-template-rows,opacity] duration-300 "+(open===i?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0")}><div className="overflow-hidden"><p className="pt-4 text-sm leading-6 text-white/45">{a}</p></div></div></button>)}</div></Container></section>}