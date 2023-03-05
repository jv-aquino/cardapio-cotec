import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

export default function Menu({items}) {
  return (
    <div className="Menu">
      <h2 className="text-5xl text-white font-bold text-center">
        Menu
      </h2>
      <div className="cardapio pt-6 m-auto grid gap-6">
        { 
          items.map(item => {
            return (
              <div key={uuidv4()} className="bg-white text-black rounded-md p-3">
                <h3 className="font-bold">{item.nome}</h3>
                <p className="text-gray-600">R$ {item.preco.toFixed(2)}</p>
                <p>{item.vendedor.nome_vendedor}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}