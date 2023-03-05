import React from "react";
import Image from 'next/image'
import logoImg from '../public/logo.png'

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-10">
      <div className="flex gap-4 items-center">
        <Image src={logoImg} alt='Logo do Cardápio COTEC'
        width={68} height={68}/>

        <h1 className="font-bold text-[2.35rem] text-primary">Cardápio Cotec</h1>
      </div>

      <div className="flex gap-2">
        <button className="text-[2.4rem]">
          <span className="material-symbols-outlined">person</span>
        </button>
        <button className="text-4xl">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);