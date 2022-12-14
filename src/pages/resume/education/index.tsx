import * as React from "react";
import type { HeadFC } from "gatsby";

const EducationPage = () => {
  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-16">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mt-16 sm:mt-20">
                <div className="space-y-20">
                  <section
                    aria-labelledby="edu_01"
                    className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                  >
                    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                      <h2
                        id="edu_01"
                        className="text-base font-semibold text-zinc-800 dark:text-zinc-100"
                      >
                        安徽理工大学(本科)
                        <div>2001.09-2005.06</div>
                      </h2>
                      <div className="md:col-span-3">
                        <ul role="list" className="space-y-16">
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-sm font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              测绘工程
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              主修地图制图学，C语言程序设计，地理信息系统（GIS）等
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <section
                    aria-labelledby="edu_02"
                    className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                  >
                    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                      <h2
                        id="edu_02"
                        className="text-base font-semibold text-zinc-800 dark:text-zinc-100"
                      >
                        桂林工学院(硕士研究生)
                        <div>2005.09-2008.06</div>
                      </h2>
                      <div className="md:col-span-3">
                        <ul role="list" className="space-y-16">
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-sm font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              GIS / 大地测量学与测量工程
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              主修地图制图学，GPS精密定位设计及原理，C++程序设计等
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EducationPage;

export const Head: HeadFC = () => <title>教育背景</title>;
