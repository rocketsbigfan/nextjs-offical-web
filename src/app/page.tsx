// 强制动态
// export const dynamic = 'force-dynamic'

import { OpenModalButton } from "@/context/modal";
import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const LinkData = [
  {
    title: '人力资本管理',
    content: '借助下一代人力资本管理系统应用，优化核心 HR、员工分析、员工体验等领域的运营，蓄 势赋能，迎接未来工作模式。',
    link: '/hcm'
  },
  {
    title: '客户关系管理与客户体验',
    content: '借助 Wm OS [CRM] 的客户体验系统应用，你可以轻松整合电子商务、市场营销、销售和服务领域的数据，并利用人工智能在每个客户接触点提供人性化的客户体验。',
  },
  {
    title: '临时员工管理',
    content: '要在不断变化的市场中实现快速发展，企业就必须快速寻找和招聘优秀人才，高效管理员工的工作进度和工资支付情况，并在项目结束时妥善办理员工离职手续和执行员工绩效分析。',
  },
  {
    title: 'ERP',
    content: 'Wm OS [ERP] 采用模块化设计，是一款功能完备的 ERP 应用，并且屡获殊荣。该系统应用内置有 AI 和分析功能，能够帮助企业随时随地实时运营业务。',
  },
  {
    title: '成长型企业',
    content: '大型企业管理系统能够助力大型企业数字化转型与发展，让成长型企业抓住当下机遇，实现业务增长战略。',
    link: '/enterprise'
  },
  {
    title: '数据服务',
    content: '利用出色的数据整合、数据质量管理和数据清理功能，充分挖掘企业所有结构化和非结构化数据的价值。',
    link: '/database'
  },
]

const Uniques = [
  {
    _class: "/images/i6hj34332an1ky.png",
    title: "多端渲染技术",
    des: "多端原生渲染能力，Ios，Android，Web，Windows，MacOS，Linux多端高度统一风格动态界面，一次配置，多端同步变动，支持专业级数据工程师自由安全得使用数据",
    link: "/special",
  },
  {
    _class: "/images/j34332an1ky.png",
    title: "自建应用",
    des: "省略需求沟通：还在为购买了saas软件没有匹配所有业务需求而犯愁？还在花无尽的时间进行需求沟通吗？可视化业务流程创建操作，想要的需求拖拖拽拽轻松实现，省去大…",
    link: "/special",
  },
  {
    _class: "/images/0056hj34332an1ky.png",
    title: "开箱即用",
    des: "注册即可使用：还在填写了资料后等待平台联系确认信息吗？注册完成即可开始使用平台应用，免去体验开通等待时间，无需销售环节：还在等待销售预约上门讲解产品及提供方…",
    link: "/special",
  },
  {
    _class: "/images/v7ri6hj34332an1ky.png",
    title: "多方式协同",
    des: "可视化操作：详细的需求无法表达，走开发流程太耗时间？可视化操作界面，修改、调整、重来都是可视化操作，不放心直接运行，先在沙箱进行测试后发布轻量化编写：一边应…",
    link: "/special",
  },
]

const More = [
  {
    _class: "/images/more_b.png",
    title: "数字化制造",
    des: "Wm [数字化制造]是制造执行系统，基于近乎实时的数据和分析，跟踪并提升生产绩效，高效利用生产设备，帮助企业提高制造运营管理的可视性。",
  },
  {
    _class: "/images/a54fde43aa400b07.png",
    title: "成长型企业",
    des: "Wm OS 大型企业（SME）管理系统能够助力大型企业数字化转型与发展，让成长型企业抓住当下机遇，实现业务增长战略。",
  },
  {
    _class: "/images/more_a.png",
    title: "合同管理",
    des: "Wm [合同管理]能够为企业提供一个智能化的合同管理系统，创建统一、集成的合同数据视图，规范合同管理流程，助力企业实现协定的成本节约目标。",
  },
  {
    _class: "/images/more_c.png",
    title: "可持续发展管理应用",
    des: "Wm OS 可持续发展管理应用提供了企业级功能和行业特定功能，能够帮助企业将运营洞察、体验洞察和财务洞察融入核心业务流程，全面推动可持续发展。​​",
  },
]


const Header = (props: { children: React.ReactNode }) => {
  return <div className="my-10 border-l-4 border-[#0070ac] font pl-4 text-black font-semibold leading-[40px]">{props.children}</div>
}

export default function Home() {
  return (
    <>
      <section className="banner-wrapper home-banner">
        <div className="banner-content max-w-[1440px] mx-auto p-[40px_32px]">
          <section className="flex items-center mb-5">
            <span className="bg-[#0070ac] text-center text-white text-xl md:text-2xl leading-[30px] md:leading-[40px] w-[75px] rounded-sm mr-5">NEW</span>
            <span className="text-[16px]">企业管理系统</span>
          </section>
          <div className="text-[34px] mb-5 md:text-[50px] font-medium">
            <h1>Wm OS</h1>
            <p>助力企业重新掌控效率</p>
          </div>
          <OpenModalButton>
            <Button className="text-white text-2xl mt-8 w-[180px] h-[60px] bg-[#0070ac] rounded-sm md:w-[240px] md:h-[80px] ">立即预约</Button>
          </OpenModalButton>
        </div>
      </section>
      <section className="pt-5 px-8">
        <Header>Wm 企业管理系统，专为你量身打造</Header>
        <div className="flex flex-wrap">
          {LinkData.map((item) => (
            <div className="md:w-1/2 md:odd:pr-4 md:even:pl-4 min-h-[190px] mb-10" key={item.title}>
              {item.link ? <Link href={item.link}>
                <div className="rounded-sm h-full cursor-pointer p-7 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300">
                  <h4 className="text-[20px] font-semibold pb-[10px] ">{item.title}</h4>
                  <p className="text-[16px]">{item.content}</p>
                </div>
              </Link> : <div className="rounded-sm h-full cursor-pointer p-7 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300">
                <h4 className="text-[20px] font-semibold pb-[10px] ">{item.title}</h4>
                <p className="text-[16px]">{item.content}</p>
              </div>}
            </div>
          ))}
        </div>
        <section className="text-center p-[50px_32px] text-4xl font-medium">Wm，领先企业成长和发展的信赖之选</section>
        <Header>Wm简介</Header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="col-span-1 ">
            <h4 className="text-[24px] leading-[40px] md:leading-[50px] md:text-[36px] font-semibold">面向所有企业的管理系统</h4>
            <p className="text-[18px] leading-[40px] font-medium md:text-[24px] ">致力于帮助各行各业、各种规模的企业以可盈利的方式运营业务，不断适应变化，成为全数据的智慧企业、全链接的协同企业、全绿色的可持续发展企业。</p>
            <Button className="text-white mt-9 w-[220px] h-[40px] text-[14px] bg-[#0070ac] md:h-[60px] md:text-[16px]">开启 Wm 体验之旅</Button>
          </div>
          <div className="col-span-1 min-h-[440px]">
            <Image
              src="/images/climbing.png"
              alt="Wm"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-full"
            />
            {/* <p>Wm 是领先的企业管理系统，专为企业成长和发展的信赖之选。</p> */}
          </div>
        </div>
        <Header>深入了解 Wm 独特之处</Header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Uniques.map((item) => (
            <div className="col-span-1 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] p-[30px] h-full leading-[30px]" key={item.title} >
              <div className="relative w-full py-4">
                <Image
                  src={item._class}
                  alt={item.title}
                  width={0} // 无需固定宽度
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
              <h4 className="text-[20px] font-semibold">{item.title}</h4>
              <section className="text-base leading-[30px]">{item.des}</section>
              <Link href={item.link} className="text-[#0070ac] text-base pt-[10px]">{"深入了解  >"}</Link>
            </div>
          ))}
        </div>
        <Header>更多应用，助力企业腾飞</Header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {More.map((item) => (
            <div className="col-span-1 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] p-[30px] h-full hover:scale-105 transition-all duration-300" key={item.title}>
              <div className="relative w-full">
                <Image
                  src={item._class}
                  alt={item.title}
                  width={0} // 无需固定宽度
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
              <h4 className="text-center text-[24px] py-4 font-semibold">{item.title}</h4>
              <section className="text-base leading-[30px] px-4">{item.des}</section>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
