import React from 'react'
import PageLayout from '@/components/PageLayout'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <section className="banner-wrapper about-banner">
        <div className="banner-content text-white max-w-[1440px] mx-auto p-[40px_32px]">
          <h1 className="text-4xl md:text-5xl leading-[70px] md:leading-[50px] font-medium">什么是Wm</h1>
          <p className="w-4/5 text-4xl mt-6 md:w-3/5">Wm 为大型企业和中小型企业提供专门的企业管理系统应用，助力中国企业转型成为“新型中国企业”</p>
        </div>
      </section>
      <section className="pt-20 pb-28">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="p-[50px_32px] text-3xl md:text-4xl text-center font-medium mb-10">我们的公司</h2>
          <p className="text-xl text-center font-normal mb-10">Workmins 建立了一个由客户、合作伙伴、员工和思想领袖组成的组织，致力于让世界运转更卓越，让人们生活更美好。</p>
          <div className="flex flex-col md:flex-row md:min-h-[450px] md:items-center">
            <div className="basis-full md:basis-2/5 md:pr-10">
              <h4 className="text-3xl md:text-4xl font-bold mb-3">关于 Wm</h4>
              <p className="text-base md:text-2xl font-normal">了解我们的管理团队、发展历程、可持续发展理念、多元文化、常见问题解答等内容。</p>
            </div>
            <div className="basis-full md:basis-3/5">
              <div className="w-full">
                <Image
                  src="/images/company.png" 
                  alt="about" 
                  width={0} 
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
