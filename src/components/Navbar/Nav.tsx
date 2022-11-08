import React, { FC } from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { navConfig } from "./config";

type NavProps = {
  mobile?: boolean;
  onClickNavItem?: () => void;
};

const Nav: FC<NavProps> = ({ mobile = false, onClickNavItem }) => {
  const navClassnames = classnames({
    "mt-6": mobile,
    "pointer-events-auto hidden md:block": !mobile,
  });
  const listClassnames = classnames({
    "flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10":
      !mobile,
    "-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300":
      mobile,
  });

  return (
    <nav className={navClassnames}>
      <ul className={listClassnames}>
        {navConfig
          .filter(({ show }) => show)
          .map(({ href, label }) => {
            const { pathname = "" } =
              typeof window !== "undefined" ? window.location : {};
            const active = pathname.includes(href);
            const classes = classnames(
              "relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400",
              {
                "text-teal-500": active,
                "hover:text-teal-500": !active,
              }
            );

            return (
              <li key={href}>
                <Link className={classes} to={href} onClick={onClickNavItem}>
                  {label}
                  {active && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                  )}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Nav;
