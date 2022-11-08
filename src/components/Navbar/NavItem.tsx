import React, { FC } from "react";
import { Link } from "gatsby";
import Classnames from "classnames";

type NavItemProps = {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavItem: FC<NavItemProps> = ({ children, href, onClick }) => {
  const { pathname } = window.location;
  const active = pathname.includes(href);
  const classes = Classnames(
    "relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400",
    {
      "text-teal-500": active,
      "hover:text-teal-500": !active,
    }
  );
  return (
    <Link className={classes} to={href} onClick={() => onClick?.()}>
      {children}
      {active && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
      )}
    </Link>
  );
};

export default NavItem;
