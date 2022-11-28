export const WORK_EXPERIENCE = [
  {
    id: "cid_0",
    name: "合伙创业",
    startDate: "2022年05月",
    endDate: "迄今",
    dept: "技术部",
    career: "负责人",
    description: {
      intro: "主要职责:",
      list: [
        "产品需求分析",
        "产品架构",
        "产品开发",
        "技术突破",
        "性能优化",
        "业务沟通",
      ],
    },
  },
  {
    id: "cid_1",
    name: "慧科讯业（北京）网络科技有限公司",
    startDate: "2014年11月",
    endDate: "2022年06月",
    dept: "研发部",
    career: "资深软件工程师",
    description: {
      intro: "主要职责:",
      list: [
        "Scrum Master",
        "团队研发管理",
        "系统设计及开发",
        "将前沿web运用到系统开发中，培训和指导其他同事开发工作",
        "解决系统开发和运行中出现的重大问题",
        "学习及推动团队web前端及node相关技术",
        "对web系统进行性能优化",
        "提出有助于提升用户web体验的意见",
        "推动前端自动化测试及部署",
      ],
    },
  },
  {
    id: "cid_2",
    name: "爱立信（中国）通信有限公司",
    startDate: "2012年06月",
    endDate: "2014年11月",
    dept: "通讯事业部",
    career: "高级软件工程师",
    description: {
      intro: "主要职责:",
      list: [
        "负责通讯网络端架构设计（5G基站监控）",
        "SVG基站网络绘制，消息通知等",
        "后端数据模型设计",
        "内部框架（JsCore）维护，组件开发及应用",
      ],
    },
  },
  {
    id: "cid_3",
    name: "拓普康(北京)",
    startDate: "2010年03月",
    endDate: "2012年06月",
    dept: "研发部",
    career: "高级软件工程师",
    description: {
      intro: "主要职责:",
      list: [
        "需求分析、测试、技术支持等相关工作",
        "开发基于Web的地图服务",
        "开发支持移动设备的管理及监控",
        "开发基于移动设备的数据处理软件",
        "文档",
      ],
    },
  },
  {
    id: "cid_4",
    name: "民太安保险公估股份有限公司(深圳)",
    startDate: "2008年06月",
    endDate: "2010年03月",
    dept: "IT研发中心",
    career: "软件工程师",
    description: {
      intro:
        "对公司整个作业流程了解与分析，开发GPS车险快速调度系统，同时考虑数据传输的安全性，保护用户信息；在系统开发完并正常运行过程中，还从事GPS硬件设备的维护、软件的升级与功能增强；该平台的研发成功，提升了公司的形象，提高了客户的满意度，系统曾获2009年深圳市金融创新奖三等奖。",
      list: [
        "负责GPS车险快速调度系统的需求分析、设计、研发、部署及维护的相关工作",
        "解决开发过程中遇到的技术问题",
        "参与公司其它相关业务系统的需求分析及开发",
        "文档编写",
      ],
    },
  },
];

export const LATEST_PROJECT = {
  id: "wisers_p1",
  name: "WBI",
  startDate: "2019/9",
  endDate: "2022/6",
  description:
    "对用户输入的关键词，可选的Label等模块就进行搜索，实现搜索结果及文章聚类的展示、Dashboard的相关展示，下载和导出功能、在结果中筛选等功能。",
  responsibility:
    "在项目中主要是作为系统架构师的角色维护系统的开发及性能优化等工作。",
  technology: {
    intro:
      "系统使用Express控制客户端的请求，Node Server做服务器端渲染、前端使用React展示可复用的组件、Redux用来控制组件状态(包括从API Server相应的数据)，NextJS展示不同的页面和相应的组件，使用Webpack对模块进行打包等。",
    list: [
      "系统开发环境的搭建、维护升级、系统模块设计、重要模块的开发，以及性能优化",
      "不断学习新技术，指导和培训其它同事进行开发，推动部门整体技术水平的提高",
      "解决开发环境中遇到的问题",
      "CI/CD",
      "制定自动化测试流程",
    ],
    stack: [
      "React",
      "React Query",
      "NextJS",
      "Typescript",
      "Axios",
      "Immer",
      "Redux",
      "React Redux",
      "Bluebird",
      "Jest",
      "d3",
      "Echarts",
      "ExpressJS",
      "Webpack",
      "Styled-Components",
      "Docker",
      "Kubernetes",
    ],
  },
};

export const BUSINESS_PROJECT = {
  cid: "cid_0",
  projects: [
    {
      id: "business_p0",
      name: "Syncon Hub Order",
      startDate: "2022/5",
      endDate: "迄今",
      description:
        "由于马斯基海运业订单舱位开放时间未知，部分航线舱位紧张，普通用户需要不断刷新页面来确认是否有新的舱位，手动刷新很难预定到理想的舱位。该系统使用Puppeteer实现了用户自动登录、表单自动填充与提交、订单流程的自动化和任务流程化。用户在登录该系统平台后，输入预定舱位的表单数据，检查完整后，可通过Chrome浏览器插件将数据实时保存到该系统。新建/更新/删除的订单将与实时队列（Redis-based）同步：过期或已删除的订单任务将被终止，新创建或更新的订单将根据其状态同步到队列。成功订舱的数据将会保存到历史记录，并通过实时发送短信和邮件信息给客户。",
      responsibility: "",
      technology: {
        intro: "",
        list: [
          "系统设计及架构",
          "开发",
          "代码审查",
          "技术突破",
          "文档编写与维护",
        ],
        stack: [
          "NextJS",
          "Antd",
          "NestJS",
          "D3",
          "Bull",
          "Redis",
          "NodeJS",
          "Mongoose",
          "Puppeteer",
          "Styled-Components",
        ],
      },
    },
    {
      id: "business_p1",
      name: "Syncon Hub Chrome Extension",
      startDate: "2022/5",
      endDate: "迄今",
      description:
        "马斯基用户登录马斯基订舱平台后，查询和填充完整的海运清单后，通过该插件，将表单数据发送到订单服务器，订单服务器将根据订单的状态开启实时任务，进行表单的自动查询及提交。",
      responsibility: "",
      technology: {
        intro: "",
        list: ["系统设计及架构", "研发"],
        stack: [
          "React",
          "Webpack",
          "Axios",
          "Jest",
          "Styled-Components",
          "Typescript",
        ],
      },
    },
  ],
};

export const WISERS_PROJECT = {
  cid: "cid_1",
  projects: [
    LATEST_PROJECT,
    {
      id: "wisers_p2",
      name: "网红榜单 (Influencer)",
      startDate: "2016/8",
      endDate: "2019/9",
      description:
        "该项目主要对当前比较知名或者收藏的网红进行分析和比较。首页会按照日期细分展示不同行业的网红榜单，用户可以通过指定关键词、媒体、选择不同的年龄段或不同的行业进一步进行筛选，筛选结果通过图表及数据列表的形式展示。同时用户可以对两个或多个网红进行对比（比如：点赞数/收藏数/转发数等指标），对比结果可通过多图表的或下载原始数据的形式进行分析。",
      responsibility: "",
      technology: {
        intro: "",
        list: ["系统设计及架构", "可复用组件/图表开发", "代码审查及新技术培训"],
        stack: [
          "React",
          "GraphQL",
          "d3",
          "Redis",
          "Webpack",
          "Apollo Client",
          "Apollo Server Express",
          "Styled-Components",
        ],
      },
    },
    {
      id: "wisers_p3",
      name: "WSEARCH",
      startDate: "2014/11",
      endDate: "2016/8",
      description:
        "该项目的主要功能是展示全媒体的文章搜索结果。用户可以通过关键词、选择不同行业标签、指定不同的媒体，选择两个或多个行业，结果页面以图表和列表的形式呈现给用户，数据可以PDF或Excel格式下载或导出，客户也可以通过电子邮件订阅的方式接收数据。",
      responsibility: "",
      technology: {
        intro: "",
        list: ["系统设计及架构", "可复用组件/图表开发", "代码审查及新技术培训"],
        stack: [
          "React",
          "Fluxible",
          "Bootstrap",
          "Axios",
          "d3",
          "q",
          "ExpressJS",
          "Webpack",
          "Redis",
          "jQuery",
        ],
      },
    },
  ],
};

export const ERICSSON_PROJECT = {
  cid: "cid_2",
  projects: [
    {
      id: "ericsson_p4",
      name: "PAU6000 LCT",
      startDate: "2012/6",
      endDate: "2014/11",
      description:
        "LCT向Agent请求拓扑关系数据列表，服务器端实时处理响应的数据流，经过逻辑运算生成拓扑关系对象模型，Server端使用推送技术实时将数据推送Web端，在浏览器展示系统拓扑图。LCT可订阅网关告警信息，Server可实时查询新的告警信息并将该信息推送到前端，Web将该信息（端口或者卡的告警信息）映射到相关的拓扑对象，实现告警，配置等模块功能。",
      responsibility:
        "本人在该项目中主要负责系统开发环境的搭建，新技术的学习及培训等工作，并参与需求分析及探讨等环节中。",
      technology: {
        intro: "",
        list: [
          "SVG展示网络拓扑关系图",
          "Rest API",
          "AMD定义模块化的组件，提高可复用性",
          "内部框架（JsCore)开发及版本升级",
          "系统性能优化",
          "实时告警",
        ],
        stack: [
          "RequireJS",
          "JsCore",
          "Bootstrap",
          "Struts2",
          "Spring",
          "JSP",
          "jQuery",
        ],
      },
    },
  ],
};

export const TOPCENTER_PROJECT = {
  cid: "cid_3",
  projects: [
    {
      id: "topcon_p5",
      name: "TopCenter",
      startDate: "2010/3",
      endDate: "2012/6",
      description:
        "系统中心在接收到移动手持设备回传的数据后，先将数据进行解析后保存到数据库，同时把不同类型的数据分发到相应的服务器进行处理：定位数据、告警、超边界等，数据处理完毕后将结果回传到中心服务器。登录用户通过web的方式访问系统页面，用户登录后与系统中心建立Socket连接，将定位数据和告警等信息及时的推动到客户端。同时客户端通过OpenLayers访问数据中心地图服务器（GeoServer），地区服务器为不同的分组用户加载不同的地图资源。地图区域可以查看整个区域设备的概况（图标和颜色区分），包括设备的运行状态、在线时长、值班联系人，以及告警的处理状态等。系统管理员可对设备进行管理：添加或修改设备信息、设定速度限制、圈定可移动范围、修改告警状态和历史轨迹回放等。该系统的实现，很好的解决了设备的管理、各设备协同工作、工作人员的工作监控、任务实时传达以及为后续工作流程的完善等，提供了有力的保证。",
      responsibility: "",
      technology: {
        intro: "",
        list: ["前期项目需求分析", "前端页面及模块开", "系统维护功能完善"],
        stack: [
          "GeoServer",
          "OpenLayers",
          "Javascript",
          "Spring",
          "Hibernate",
          "HTML",
          "CSS",
          "JSP",
          "jQuery",
        ],
      },
    },
  ],
};

export const MINTAIAN_PROJECT = {
  cid: "cid_4",
  projects: [
    {
      id: "mintaian_p6",
      name: "GPS车辆监控系统",
      startDate: "2018/6",
      endDate: "2010/3",
      description:
        "GPS智能设备安装在查勘车上，设备将在一定的时间间隔内（后台可以设置）将定位数据通过HTTP或TCP/IP协议发送到服务器，服务器中心软件将数据解析后保存到数据库。客服中心运行人员通过浏览器登录到web系统，不同的账户可以控制和显示一个或多个群组定位的车辆，主页面将在地图上展示不同车辆的位置、状态、速度、方向等信息，同时可以设置每台设备的参数：上传时间间隔、更新固件、圈定可形式范围等。当有案件发生时，客服中心可在第一时间查看客户周围空闲的查勘车，快速及时的让查勘人员到达现场，提高案件的处理效率和用户的满意度。该系统曾获2009年深圳市金融创新奖。",
      responsibility: "",
      technology: {
        intro: "",
        list: [
          "整个系统的设计",
          "服务器和客户端web的开发及测试",
          "进度跟踪在项目中主要完成以下工作",
        ],
        stack: [
          "Java",
          "JSP",
          "Spring",
          "Struts",
          "Hibernate",
          "ExtJs",
          "Javascript",
          "HTML",
          "CSS",
          "jQuery",
        ],
      },
    },
  ],
};

export const PROJECT_LIST = [
  BUSINESS_PROJECT,
  WISERS_PROJECT,
  ERICSSON_PROJECT,
  TOPCENTER_PROJECT,
  MINTAIAN_PROJECT,
];

export function getCompanyById(cid: string) {
  return WORK_EXPERIENCE.find(({ id }) => id === cid);
}
