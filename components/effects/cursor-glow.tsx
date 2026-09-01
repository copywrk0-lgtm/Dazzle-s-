 "use client";
import { useEffect } from "react";
export function CursorGlow(){useEffect(()=>{const move=(e:MouseEvent)=>document.documentElement.style.setProperty("--mx",`${e.clientX}px`);window.addEventListener("mousemove",move);return()=>window.removeEventListener("mousemove",move)},[]);return null}