import React from "react";
import ToggleTheme from "./ToggleTheme";
import DropdownNav from "./DropdownNav";
import Nav from "./Nav";
import Avatar from "../Avatar";

export default function Navbar() {
  return (
    <div className="top-0 z-10 h-16 pt-6">
      <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="relative flex gap-4">
                <div className="flex flex-1">
                  <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                    <a aria-label="Home" className="pointer-events-auto">
                      <Avatar />
                    </a>
                  </div>
                </div>
                <div className="flex flex-3 justify-end md:justify-center">
                  <DropdownNav />
                  <Nav />
                </div>
                <div className="flex justify-end md:flex-1">
                  <div className="pointer-events-auto">
                    <ToggleTheme />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
