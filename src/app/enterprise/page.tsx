import React from 'react'
import { OpenModalButton } from '@/context/modal'
import { Button } from '@headlessui/react'
import Collapse from '@/components/Collapse'

const QuestionList = [
  {
    header: '大型企业如何进行管理？',
    text: '企业领导者必须确保他们的合作伙伴具备足够的行业专业知识，了解他们行业的独特需求。尤其是提供技术解决方案的合作伙伴，满足这一点要求尤为重要。Workmins OS  能否解决你所面临的独特问题？我们提供的功能能否为你创造竞争优势？我们的解决方案能否帮助你实现扩展和创新？答案是肯定的。Workmins OS  提供行业特定的产品和服务，旨在满足每个企业的独特需求。我们每天与不同的行业领导者打交道，从他们的反馈中获得灵感和启发，从而不断创新，促进产品更新换代，满足不断变化的客户需求。'
  },
  {
    header: '大型企业如何管理员工？',
    text: 'Workmins OS将以人为本的全新理念融入到了人力资本管理中。借助 Workmins OS 人力资本管理系统应用，企业不仅能够为员工提供良好的体验，让他们感受到自身价值受到重视，还能不断激发员工的工作热情，让他们发挥最佳工作状态。此外，你可以高效地招募、培训和管理你的员工，并且将员工反馈与运营数据相结合，了解员工的感受和背后的原因，最终打造卓越的员工体验。'
  },
  {
    header: '什么是专精特新大型企业？',
    text: '按照工信部的定义，专精特新即“专业化、精细化、特色化、创新型”，而专精特新“小巨人”企业则是其中的佼佼者，是专注于细分市场、创新能力强、市场占有率高、掌握关键核心技术、质量效益优的排头兵企业。2022年5月底，国务院召开稳住经济大盘电视电话会议之后，工业和信息化部于近日又推出《优质大型企业梯度培育管理暂行办法》，明确创新型大型企业、专精特新大型企业、专精特新“小巨人”企业的评价认定标准。 可见，专精特新企业是增强经济发展韧性的中坚力量，更是打赢“稳经济”这场硬仗中的主力军。数字化转型能有效帮助企业完善自身的管理创新、提升运营效率，加强内部转型和治理，加强大型企业的内功修炼，驱动自身创新和高质量的发展。'
  },
  {
    header: '企业如何利用数字化技术应对通货膨胀？',
    text: '根据企业所在的行业和具体情况，通货膨胀带来的影响有所不同，比如，有些企业面临采购压力，有些亟需处理应付账款，有些则是需要优化库存水平等。借助数字化技术，企业可以实现各个部门的互联互通，提高灵活性，更自信地制定决策。'
  },
  {
    header: '什么是业务流程自动化？',
    text: '对于任何企业来说，业务流程自动化都是数字化转型之旅的重要基石。Workmins OS可以与前端和后端应用相集成，简化各个流程，包括供应链、HR、财务和客户服务等等。'
  },
  {
    header: '如何借助技术简化HR合规管理流程？',
    text: `随着企业不断开辟和拓展新市场，HR 合规管理变得越来越复杂。HR 部门必须做好准备，确保在不断变化的环境中遵守法律、法规和合同规定。 
    借助面向大型企业的现代化HCM 和 ERP，企业能够集成并管理整个企业的数据，同时自动实时更新合规信息。`
  },
]

export default function Enterprise() {
  return (
    <>
      <section className="banner-wrapper enterprise-banner">
        <div className="banner-content text-white max-w-[1440px] mx-auto p-[40px_32px]">
          <section className="flex items-center mb-5">
            <span className="text-2xl leading-[40px]">成长型企业</span>
          </section>
          <h1 className="text-4xl md:text-5xl leading-[70px] md:leading-[50px] font-medium">大型企业管理系统</h1>
          <p className="w-4/5 text-4xl mt-6 md:w-3/5">大型企业管理系统能够助力大型企业数字化转型与发展，让成长型企业抓住当下机遇，实现业务增长战略</p>
          <OpenModalButton>
            <Button className="text-white text-2xl mt-20 w-[180px] h-[60px] bg-[#0070ac] rounded-sm md:w-[240px] md:h-[80px] ">立即预约</Button>
          </OpenModalButton>
        </div>
      </section>

      <section className="pt-20 pb-28">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="p-[50px_32px] text-3xl md:text-4xl text-center font-medium mb-10">助力中国大型企业数字化转型与发展</h2>
          <p className="text-xl text-center font-normal mb-10">新时期，中国大型企业面临着迈向专精特新企业、业务出海、快速融资上市(IPO)等诸多挑战。如何实现这些企业发展目标成为成长型企业不断思索的问题。深入分析大型企业发展形势，并对其发展提出深度建议。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1 mt-20">
              <h4 className="text-xl font-bold mb-3">专精特新，保驾护航</h4>
              <p className="text-base font-normal">中国“专精特新”企业必须要进行数字化转型，才能支撑企业实现可持续发展，帮助其在快速变化的环境中抓住机遇，实现跨量级发展。Workmins 助力大型企业实现高质量的数字化转型，为企业提供集成式的企业ERP、CRM、供应链管理及业务技术平台等应用，使企业持续保持领先地位。</p>
            </div>
            <div className="col-span-1 mt-20">
              <h4 className="text-xl font-bold mb-3">通过数字化在重构中脱颖而出</h4>
              <p className="text-base font-normal">关联相关机构发布的《出海企业数字化白皮书》，解析了新形势下，如何增强出海企业的风险抵御力、供应链的韧/弹力、市场开拓力、人才成长力、服务响应力，以及整体竞争力。</p>
            </div>
            <div className="col-span-1 mt-20">
              <h4 className="text-xl font-bold mb-3">IPO那些你应该知道的事儿</h4>
              <p className="text-base font-normal">关联相关机构发布的《成长型企业IPO数字化白皮书》，解析了数字经济和资本市场改革背景下，成长型企业如何通过数字化转型提高自身竞争力，快速融资上市。</p>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1440px] mx-auto text-white">
        <div className="col-span-1 min-h-[400px] pr-[34%] pl-8 bg-cover bg-center bg-no-repeat bg-[url('/images/enterprise01.png')]">
          <h2 className="text-[32px] md:text-4xl  font-medium my-10">成长型企业的十大业务目标</h2>
          <p className="text-m leading-[30px] font-medium">来自不同国家/地区的成长型企业领导者分享了他们的十大业务目标，同时分享了他们对大型企业数字化转型的看法以及对大型企业管理系统在业务管理中价值的理解。</p>
        </div>
        <div className="col-span-1 min-h-[400px] pl-8 pr-[34%] md:pl-[34%] md:pr-8 bg-cover bg-center bg-no-repeat bg-[url('/images/enterprise02.png')]">
          <h2 className="text-[32px] md:text-4xl font-medium my-10">以全新的方式，推动业务增长并提高效率</h2>
          <p className="text-md leading-[30px] font-medium">了解成长型企业如何做好企业管理规划，规避风险，实现数字化转型，保持企业竞争力以及大型企业管理系统在其中充当的角色。</p>
        </div>
      </div>
      <section className="pt-20 pb-28">
        <div className="max-w-[1440px] mx-auto px-8">
          <h1 className="text-3xl md:text-5xl leading-[70px] md:leading-[50px] font-medium text-center">大型企业管理常见问题</h1>
          <p className="text-2xl my-10 text-center">下面列出了有关大型企业管理的常见问题与答案</p>
          <div className=' text-[#727272]'>
            <div className="text-[22px] leading-[40px] border-b border-[#727272]">常见问题：</div>
            {
              QuestionList.map((item, index) => (
                <Collapse key={index} className="border-b border-[#727272]">
                  <Collapse.Trigger>
                    <span className="text-xl">{item.header}</span>
                  </Collapse.Trigger>
                  <Collapse.Content>
                    <div className="text-base">
                      {item.text}
                    </div>
                  </Collapse.Content>
                </Collapse>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}
