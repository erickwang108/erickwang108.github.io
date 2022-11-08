import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Avatar() {
  return (
    <div className="flex -space-x-2 overflow-hidden">
      <StaticImage
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src="../../images/icon.png"
        alt=""
      />
    </div>
  );
}
