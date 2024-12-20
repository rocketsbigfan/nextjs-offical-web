import { OpenModalButton } from '@/context/modal'
import { Button } from '@headlessui/react'
import React from 'react'

const SpecialContent = [
  {
    title: '开箱即用',
    description: '注册即可使用：还在填写了资料后等待平台联系确认信息吗？ 注册完成即可开始使用平台应用，免去体验开通等待时间 无需销售环节：还在等待销售预约上门讲解产品及提供方案吗？ 无需预约等待销售，完全由自己掌控，免去销售环节，避免相关套路 全流程引导教程：还在等待销售拿着PPT大致功能流水讲解吗？ 全流程环节新手引导，等于免费业务流程培训，精细化视频教程，各细节讲解一步到位',
  },
  {
    title: '自建应用',
    description: '省略需求沟通：还在为购买了saas软件没有匹配所有业务需求而犯愁？还在花无尽的时间进行需求沟通吗？ 可视化业务流程创建操作，想要的需求拖拖拽拽轻松实现，省去大量的反反复复来来回回的需求沟通、确认时间 缩减等待时间：还在要开发商排期开发耗费时间等待吗？ 可视化业务流程自定义编辑，时间一手掌控，高度代码开源，轻量化编写实现相应需求，普通程序员就能完成，让需求 响应更及时，开发者生态为高难度需求提供1对1开发商，免去等待排期时间 降低成本投入：还在为业务调整无止尽的投入开发成本吗？ 业务应用，业务流程自定义编辑，自定义创建，可以无成本投入，高难度业务调整，开发者生态提供更广泛的，更有针对性的开发商 选择，大大降低开发成本',
  },
  {
    title: '多端渲染',
    description: '多端原生渲染能力，Ios，Android，Web，Windows，MacOS，Linux多端高度统一风格 动态界面，一次配置，多端同步变动 支持专业级数据工程师自由安全得使用数据',
  },
  {
    title: '多方式协同',
    description: '可视化操作：详细的需求无法表达，走开发流程太耗时间？ 可视化操作界面，修改、调整、重来都是可视化操作，不放心直接运行，先在沙箱进行测试后发布 轻量化编写：一边应用使用者难以实现相应需求，一边公司现有程序员空着？ 高度代码开源，轻量化编写实现相应需求，普通程序员都能完成，让需求响应更加及时，同一空间维度的需求沟通，大大降低了时间 成本及容错成本，沙箱测试提供保障 着急的需要新增或调整高难度的业务需求，找不到合适的？ Wm开发者生态，为高难度需求提供更广泛的，更有针对性的开发商选择，通过审核的，对源代码非常熟悉的开发商，1对1 服务，沙箱测试提供验收保障'
  }
]

export default function Special() {
  return (
    <>
      <section className="banner-wrapper special-banner">
        <div className="banner-content text-white max-w-[1440px] mx-auto p-[40px_32px]">
          <section className="flex items-center mb-5">
            <span className="text-2xl leading-[40px]">HCM</span>
          </section>
          <div className="text-[34px] mb-5 md:text-[48px] font-medium">
            <h1>Wm OS</h1>
            <p>让每个 应用实现更轻松</p>
          </div>
          <p className="text-3xl font-normal w-3/5 mt-6">Wm OS 企业管理系统独特之处</p>
          <OpenModalButton>
            <Button className="text-white text-2xl mt-20 w-[180px] h-[60px] bg-[#0070ac] rounded-sm md:w-[240px] md:h-[80px] ">立即预约</Button>
          </OpenModalButton>
        </div>
      </section>
      <div className="special-content pt-20 pb-28 px-8 max-w-[1440px] mx-auto">
        <h2 className="p-[50px_32px] text-3xl md:text-4xl text-center font-medium mb-10">Wm OS 企业管理系统独特之处</h2>
        <p className="text-xl text-center font-normal mb-10">根据本企业的特点自定义模型，建自己的流程</p>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          {SpecialContent.map((item, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-xl leading-[30px] font-bold mb-3">{item.title}</h3>
              <p className="text-base leading-[30px] font-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
