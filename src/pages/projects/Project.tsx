import React, { FC } from "react";
import Tag from "components/Tag";
import { LATEST_PROJECT } from "constants/index";

type ProjectProps = typeof LATEST_PROJECT;

const Project: FC<ProjectProps> = (props) => {
  return (
    <>
      <div className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        {props.startDate}-{props.endDate}
      </div>
      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {props.description}
      </div>
      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {props.responsibility}
      </div>
      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {props.technology?.intro}
      </div>
      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        主要职责:
        <ul className="list-decimal" style={{ marginLeft: "16px" }}>
          {props.technology?.list.map((resItem) => (
            <li key={resItem} style={{ listStyleType: "decimal" }}>
              {resItem}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        主要技术栈:
        <div className="flex flex-wrap">
          {props.technology?.stack.map((resItem) => (
            <span key={resItem} style={{ margin: "8px" }}>
              <Tag>{resItem}</Tag>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
