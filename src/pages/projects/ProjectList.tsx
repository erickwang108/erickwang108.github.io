import React, { FC } from "react";
import Project from "./Project";
import { getCompanyById, PROJECT_LIST } from "constants/index";

const ProjectList: FC = () => {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="space-y-20">
        {PROJECT_LIST.map(({ cid, projects = [] }) => {
          const company = getCompanyById(cid);
          return (
            company && (
              <section
                key={cid}
                aria-labelledby=":r6:"
                className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
              >
                <div className="grid max-w-1xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                  <h2
                    id=":r6:"
                    className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
                  >
                    {company.name}
                  </h2>
                  <div className="md:col-span-3">
                    <div className="space-y-16">
                      {projects.map((p) => (
                        <article
                          key={p.id}
                          className="group relative flex flex-col items-start"
                        >
                          <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                            <div>
                              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                              <span className="relative z-10">{p.name}</span>
                            </div>
                          </h3>
                          <Project {...p} />
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )
          );
        })}
      </div>
    </div>
  );
};
export default ProjectList;
