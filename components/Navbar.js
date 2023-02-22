import React from "react";
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-5 px-10
    light:bg-red-50
    dark:bg-zinc-900">
      <div className="flex gap-2 items-center">
        <Image src='/logo.png' alt='Logo do Cardápio COTEC'
        width={50} height={50}/>

        <h1>Cardápio Cotec</h1>
      </div>
      <ul>
        <li>Menu</li>
      </ul>
    </nav>
  );
}