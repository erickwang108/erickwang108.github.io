import React from "react";
import Input from "components/Input";
import Button from "components/Button";
import { MdOutlineMail } from "react-icons/md";

export default function EmailPanel() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MdOutlineMail className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <Input />
        <Button>Join</Button>
      </div>
    </div>
  );
}
