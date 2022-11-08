import React from "react";
import { Link } from "gatsby";
import { navConfig } from "../Navbar/config";

const Footer = () => {
  return (
    <footer className="mt-8">
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {navConfig.map((item) => {
                      return (
                        item.show && (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="transition hover:text-teal-500 dark:hover:text-teal-400"
                          >
                            {item.label}
                          </Link>
                        )
                      );
                    })}
                  </div>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    © Erick Wang. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
