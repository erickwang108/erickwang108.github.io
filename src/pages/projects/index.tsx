import * as React from "react";
import type { HeadFC } from "gatsby";
import ProjectList from "./ProjectList";

const ProjectsPage = () => {
  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-16">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-1xl lg:max-w-5xl">
              <header className="max-w-1xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  知识成就梦想
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  下面只列出了比较重要的项目，经历过这些项目，使我的视野不断开阔，知识面也有了很大的提高。
                </p>
              </header>
              <ProjectList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects</title>;
