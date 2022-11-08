import * as React from "react";
import type { HeadFC } from "gatsby";
import {
  AiFillGithub,
  AiFillZhihuCircle,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-16">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <StaticImage
                      alt="Ocean"
                      src="../../images/ocean-2.jpg"
                      className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    我是王义峰，现居住在北京, 这里是我实现梦想的地方。
                  </h1>
                  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <p>
                      从我第一次接触计算机开始，慢慢的就喜欢上编程，因为我喜欢让计算机帮我处理数据。
                      从最初使用windows系列，到近多年开始使用MacBook，计算机使我的工作和工作越来越丰富多彩。
                    </p>
                    <p>
                      我喜欢读书，从工作后慢慢的找到了适合我自己的学习方式：自学。随着新的计算机技术的不断出现，我需要
                      不断更新自己的知识。从最初的web 1.0到web
                      2.0，乃至最近比较活的web3，通过阅读了大量的计算机书籍，
                      去网上搜索较新的资料，我的知识也得到相应的更新。
                    </p>
                    <p>
                      我在读研期间通过了大学英语六级的考试，工作中主要是使用英语进行阅读，平时也在Youtube找一些视频来学，
                      口语水平是弱项，不过不用担心，我已经制定了口语训练计划，相信不久的将来，我能和老外“打成一片"，哈哈！
                    </p>
                    <p>
                      将来我希望继续从事web领域的相关工作，包括区块链等新的领域，不断超越自我！
                    </p>
                  </div>
                </div>
                <div className="lg:pl-20">
                  <ul role="list">
                    <li className="mt-4 flex">
                      <a
                        target="_blank"
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        aria-label="Follow on GitHub"
                        href="https://github.com/erickwang108"
                      >
                        <AiFillGithub
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        />
                        <span className="ml-4">Follow on Github</span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        target="_blank"
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        aria-label="Follow on Zhihu"
                        href="https://www.zhihu.com/people/86-91-47-84/posts"
                      >
                        <AiFillZhihuCircle
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        />
                        <span className="ml-4">知乎文章</span>
                      </a>
                    </li>
                    <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                      <div className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                        <AiFillPhone
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        />
                        <span className="ml-4">13718934258</span>
                      </div>
                    </li>
                    <li className="mt-4 pt-4 dark:border-zinc-700/40 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                        href="mailto:erickwang108@gmail.com"
                      >
                        <AiOutlineMail
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        />
                        <span className="ml-4">erickwang108@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About me</title>;
