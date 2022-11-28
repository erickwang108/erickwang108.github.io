import React, { useState } from "react";
import { Link } from "gatsby";
import { AiOutlineMenu } from "react-icons/ai";
import HomeHelmet from "./HomeHelmet";

type LayoutProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: LayoutProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <HomeHelmet />
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 px-4">
            <div className="relative flex items-center">
              <a
                className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
                href="/"
              >
                <span className="sr-only">Github pages</span>
              </a>
              <div className="relative hidden lg:flex items-center ml-auto">
                <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    <li>
                      <a
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        href="/resume"
                      >
                        个人简历
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                  <label
                    className="sr-only"
                    id="headlessui-listbox-label-3"
                    data-headlessui-state=""
                  >
                    Theme
                  </label>
                  <button
                    type="button"
                    id="headlessui-listbox-button-4"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-headlessui-state=""
                    aria-labelledby="headlessui-listbox-label-3 headlessui-listbox-button-4"
                  >
                    <span className="hidden dark:inline">
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                          className="fill-transparent"
                        ></path>
                        <path
                          d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                          className="fill-slate-400 dark:fill-slate-500"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                          className="fill-slate-400 dark:fill-slate-500"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Search</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
              </button>
              <div className="ml-2 -my-1 lg:hidden">
                <button
                  type="button"
                  className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Navigation</span>
                  <svg width="24" height="24" fill="none" aria-hidden="true">
                    <path
                      d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
