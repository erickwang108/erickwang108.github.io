import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "components/Layout";
import ExperienceList from "./ExperienceList";

const WorkExperiencePage = () => {
  return (
    <Layout>
      <main>
        <div className="sm:px-8 mt-16 sm:mt-16">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <header className="max-w-1xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    大数据 ｜ 通讯领域 ｜ 智能设备｜ 保险领域
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    从2008年开始工作到迄今为止，在多个领域从事后端及前端开发工作，同时在移动设备上也有相关的开发经验。
                    参与过多个项目的需求分析、版本迭代、性能优化和项目管理的相关工作，积极推动团队建设。
                  </p>
                </header>
                <div className="mt-16 sm:mt-20">
                  <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="flex max-w-1xl flex-col space-y-16">
                      <ExperienceList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default WorkExperiencePage;

export const Head: HeadFC = () => <title>工作经历</title>;
