import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Menu({items}) {
  return (
    <div className="Menu">
      <h2 className="text-5xl text-black font-bold text-center">
        Menu
      </h2>
      {
        /* items.map(item => {
          return (
            <div key={uuidv4()}>
              <h3>{item.name}</h3>
            </div>
          )
        }) */
      }
    </div>
  );
}