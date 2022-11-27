import React from "react";
import { WORK_EXPERIENCE } from "constants/index";

export default function ExperienceList() {
  return (
    <>
      {WORK_EXPERIENCE.map((data) => (
        <article
          key={data.id}
          className="md:grid md:grid-cols-4 md:items-baseline"
        >
          <div className="md:col-span-3 group relative flex flex-col items-start">
            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
              <div>
                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">{data.name}</span>
              </div>
              <div>
                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10 text-xs text-zinc-500 dark:text-zinc-300">
                  {data.dept} {data.career}
                </span>
              </div>
            </h2>
            <time
              className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
              dateTime="2022-09-05"
            >
              <span
                className="absolute inset-y-0 left-0 flex items-center"
                aria-hidden="true"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
              </span>
              {data.startDate}～{data.endDate}
            </time>
            <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {data.description.intro}
              <ul className="list-decimal" style={{ marginLeft: "16px" }}>
                {data.description?.list.map((resItem) => (
                  <li key={resItem} style={{ listStyleType: "decimal" }}>
                    {resItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <time
            className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
            dateTime="2022-09-05"
          >
            {data.startDate}～{data.endDate}
          </time>
        </article>
      ))}
    </>
  );
}
