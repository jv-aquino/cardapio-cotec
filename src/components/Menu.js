import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Menu({items}) {
  return (
    <div className="Menu">
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