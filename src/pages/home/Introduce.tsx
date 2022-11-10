import * as React from "react";
import styled from "styled-components";
import ModuleLink from "components/ModuleLink";

const DataList = styled.li`
  margin-left: 32px;
  list-style-type: circle;
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
              <ol className="mt-6 text-base text-zinc-600 dark:text-zinc-400 list-decimal">
                <DataList>熟练掌握敏捷开发流程及项目管理</DataList>
                <DataList>通过大学英语6级考试（CET 6）</DataList>
                <DataList>
                  自学并掌握了区块链Dapp开发相关知识：
                  <ModuleLink id="solidity" />,<ModuleLink id="web3js" />,
                  <ModuleLink id="ethersjs" />,<ModuleLink id="truffle" />,
                  <ModuleLink id="hardhat" />,<ModuleLink id="metaMask" />,
                  <ModuleLink id="ganache" />等
                </DataList>
                <DataList>
                  深入阅读
                  <ModuleLink id="openzeppelin" />
                  开源合约项目， 掌握了Tokens: <ModuleLink id="erc20" />/
                  <ModuleLink id="erc721" />/<ModuleLink id="erc777" />/
                  <ModuleLink id="erc1155" />
                  等，新的知识正进一步学习中。
                </DataList>
                <DataList>
                  有扎实的前端基本功（Javascript、Typescript、ES5/6、HTML5、CSS、HTTP、性能及安全等），掌握前端先进的技术理念
                </DataList>
                <DataList>
                  熟练掌握前端
                  <ModuleLink id="react" />/<ModuleLink id="rn" />
                  框架，状态管理模式：
                  <ModuleLink id="redux" />/<ModuleLink id="mobx" />/
                  <ModuleLink id="graphql" />/<ModuleLink id="immerjs" />
                  等，以及丰富的React生态，并在项目中得到具体应用
                </DataList>
                <DataList>
                  熟悉前端常用的构建工具：
                  <ModuleLink id="gulpjs" />，<ModuleLink id="webpack" />
                  等，熟练使用
                  <ModuleLink id="git" />
                </DataList>
                <DataList>
                  熟悉前端工程化、组件化、模块化的开发模式，并具备设计和构建能力
                </DataList>
                <DataList>
                  熟练掌握前后端框架：
                  <ModuleLink id="nodejs" />/<ModuleLink id="expressjs" />/
                  <ModuleLink id="nextjs" />/<ModuleLink id="nestjs" />等
                </DataList>
                <DataList>熟悉数据库MySql, MongooseJS 等</DataList>
                <DataList>
                  熟练使用
                  <ModuleLink id="d3" />, <ModuleLink id="echarts" />
                  可视化图表库
                </DataList>
                <DataList>
                  掌握前端
                  <ModuleLink id="jest" />,<ModuleLink id="rtl" />,
                  <ModuleLink id="chai" />
                  <ModuleLink id="puppeteer" />
                  等测试框架，具备高质量模块及应用开发能力
                </DataList>
                <DataList>具备前端架构设计能力及实践经验</DataList>
                <DataList>熟悉其它语言: Java、C、C++、Object-C</DataList>
                <DataList>
                  性格开朗，善于思考学习，自学和团队协作能力强
                </DataList>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
