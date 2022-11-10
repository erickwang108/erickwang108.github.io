import React from "react";
import { MODULES } from "./data";

export type ModuleLinkProps = {
  id: string;
};

export default function ModuleLink({ id }: ModuleLinkProps) {
  const data = MODULES[id];

  return (
    data && (
      <a
        className="mx-2 text-teal-500 hover:text-teal-300"
        href={data.url}
        target="_blank"
      >
        {data.name}
      </a>
    )
  );
}
