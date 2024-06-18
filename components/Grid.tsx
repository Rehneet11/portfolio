
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/constants";

export default function Grid() {
  return (
    <BentoGrid>
      {gridItems.map((item,i) => (
        <BentoGridItem
        id={i}
        key={i}
        title={item.title}
        description={item.description}
        img={item.img}
        icon={item.icon}
        className={i === 3 || i === 5 ? "md:col-span-2" : ""}
        imgClassName={item.imgClassName}
          
        />
      ))}
    </BentoGrid>
  );
}
