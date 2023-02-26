import React from "react";
import Image from 'next/image'
import logoImg from '../public/logo.png'

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-10">
      <div className="flex gap-3 items-center">
        <Image src={logoImg} alt='Logo do Cardápio COTEC'
        width={65} height={65}/>

        <h1 className="text-3xl font-bold text-primary">Cardápio Cotec</h1>
      </div>
      <button className="text-4xl">
        <span className="material-symbols-outlined">shopping_cart</span>
      </button>
    </nav>
  );
}