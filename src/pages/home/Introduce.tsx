import * as React from "react";
import { AiFillGithub, AiFillZhihuCircle } from "react-icons/ai";
import styled from "styled-components";

const styles = {
  iconClass:
    "h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300",
};

const DataList = styled.li`
  margin-left: 32px;
  list-style-type: decimal;
`;

export default function Introduce() {
  return (
    <div className="sm:px-8 mt-16 sm:mt-16">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="max-w-1xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                前端开发及架构工程师, 敏捷项目管理.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                我是王义峰（Erick），一名前端软件开发工程师，在深圳和北京工作多年，积累了丰富的软件开发、架构以及项目管理工作经验，总结有以下几点个人优势：
              </p>
              <ul className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                <DataList>熟练掌握敏捷开发流程及项目管理</DataList>
                <DataList>通过大学英语6级考试（CET 6）</DataList>
                <DataList>
                  自学并掌握了区块链相关知识：Solidity / Web3.js / Ether.js /
                  Truffle / Hardhat / Chai / MetaMask / Ganache 等
                </DataList>
                <DataList>
                  有扎实的前端基本功（Javascript、Typescript、ES5/6、HTML5、CSS、HTTP、性能及安全等），掌握前端先进的技术理念
                </DataList>
                <DataList>
                  熟练掌握前端React/Vue框架，状态管理模式：Redux / MobX /
                  GraphQL / Immer等，以及丰富的React生态，并在项目中得到具体应用
                </DataList>
                <DataList>
                  熟悉前端常用的构建工具：Gulp，Webpack等，熟练使用git
                </DataList>
                <DataList>
                  熟悉前端工程化、组件化、模块化的开发模式，并具备设计和构建能力
                </DataList>
                <DataList>
                  熟练掌握前后端框架：NodeJS / Express / NestJS / NextJS等
                </DataList>
                <DataList>熟悉数据库MySql, MongooseJS 等</DataList>
                <DataList>熟练使用 d3, echarts 可视化图表库</DataList>
                <DataList>
                  掌握前端Jest、RTL、Puppeteer等测试框架，具备高质量模块及应用开发能力
                </DataList>
                <DataList>具备前端架构设计能力及实践经验</DataList>
                <DataList>熟悉其它语言: Java、C、C++、Object-C</DataList>
                <DataList>
                  性格开朗，善于思考学习，自学和团队协作能力强
                </DataList>
              </ul>
              <div className="mt-6 flex gap-4">
                <a
                  className="group -m-1 p-1"
                  aria-label="Follow on GitHub"
                  href="https://github.com/erickwang108"
                >
                  <AiFillGithub className={styles.iconClass} />
                </a>
                <a
                  className="group -m-1 p-1"
                  aria-label="Follow on Zhihu"
                  href="https://www.zhihu.com/people/86-91-47-84/posts"
                >
                  <AiFillZhihuCircle className={styles.iconClass} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
