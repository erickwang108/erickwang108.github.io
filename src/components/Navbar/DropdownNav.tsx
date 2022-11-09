import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import MenuItemIcon from "icons/MenuItem";
import Nav from "./Nav";

export default function DropdownNav() {
  const [show, setShow] = React.useState(false);

  return (
    <div className="pointer-events-auto md:hidden">
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
      >
        菜单
        <MenuItemIcon />
      </button>
      {show && (
        <div>
          <div
            aria-hidden="true"
            className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"
          />
          <div
            tabIndex={-1}
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <button
                aria-label="Close menu"
                className="-m-1 p-1"
                type="button"
                tabIndex={0}
                onClick={() => setShow(false)}
              >
                <AiOutlineClose className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                导航选项
              </h2>
            </div>
            <Nav mobile onClickNavItem={() => setShow(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
