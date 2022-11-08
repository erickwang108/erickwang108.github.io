import * as React from "react";
import type { HeadFC } from "gatsby";
import { BsLink } from "react-icons/bs";
import { SiSemanticuireact } from "react-icons/si";

const FeEcosystemPage = () => {
  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-16">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  前端生态展示
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  前端生态越来越丰富，为我们快速构建web程序提供了可能，这里列出一些我在工作中使用到或者已经学习过的一些module，
                  方便以后查询。
                </p>
              </header>
              <div className="mt-16 sm:mt-20">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                  <li className="group relative flex flex-col items-start">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <SiSemanticuireact
                        width="32"
                        height="32"
                        className="h-8 w-8"
                      />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a target="_blank" href="https://reactjs.org/">
                        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">React</span>
                      </a>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      A JavaScript library for building user interfaces
                    </p>
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                      <BsLink className="h-6 w-6 flex-none" />
                      <span className="ml-2">reactjs.org</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeEcosystemPage;

export const Head: HeadFC = () => <title>Articles</title>;
