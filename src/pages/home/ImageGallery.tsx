import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const imageItems = [
  {
    id: 1,
    rotate: 2,
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=640&q=75",
  },
  {
    id: 2,
    rotate: -2,
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=640&q=75",
  },
  {
    id: 3,
    rotate: 0,
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=640&q=75",
  },
  {
    id: 4,
    rotate: 2,
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=640&q=75",
  },
  {
    id: 5,
    rotate: -2,
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&w=640&q=75",
  },
];

const Image = styled.img`
  color: transparent;
`;

export default function ImageGallery() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {imageItems.map(({ id, rotate, src }) => {
          const imageContainer = classnames(
            "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
            {
              "rotate-2": rotate === 2,
              "-rotate-2": rotate === -2,
            }
          );
          return (
            <div key={id} className={imageContainer}>
              <Image
                src={src}
                sizes="(min-width: 640px) 18rem, 11rem"
                width="3744"
                height="5616"
                decoding="async"
                data-nimg="1"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
