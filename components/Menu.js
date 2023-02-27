import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

export default function Menu({items}) {
  return (
    <div className="Menu">
      <h2 className="text-5xl text-white font-bold text-center">
        Menu
      </h2>
      <div className="cardapio pt-4 m-auto grid gap-4">
        { 
          items.map(item => {
            return (
              <div key={uuidv4()} className="bg-white text-black rounded p-3">
                <h3>{item.nome}</h3>
                <p>${item.preco}</p>
                <p>{item.vendedor.nome_vendedor}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}