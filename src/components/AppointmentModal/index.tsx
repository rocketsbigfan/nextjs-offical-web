'use client'
import React, { useState } from "react"
import { useModalContext } from "@/context/modal"
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import { XMarkIcon, ArrowPathIcon } from "@heroicons/react/24/outline"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { toast } from "@/hooks/use-toast"
import { sleep } from "@/lib/utils"

export const AppointmentModal = () => {
  const { open, setOpen } = useModalContext()

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    await sleep(1000)
    toast({
      title: '预约成功',
      description: (
        <div>
          <p>我们将尽快与您联系！</p>
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        </div>
      ),
      variant: 'default',
      duration: 3000,
    })
    setOpen(false)
  }
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/45 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-[calc(100%-10px)] sm:my-8 md:max-w-screen-md data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white pb-4 pt-4 px-6">
              <div className="flex items-center justify-between text-center sm:mt-0 sm:text-left ">
                <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                  预约演示
                </DialogTitle>
                <div onClick={() => setOpen(false)} className="inline-flex items-center justify-center size-8 cursor-pointer text-black/45 hover:text-black transition-colors duration-300">
                  <XMarkIcon className="size-6" />
                </div>
              </div>
            </div>
            <div className="px-10 py-5">
              <section className="text-[30px] leading-[44px] text-center lg:text-[40px] lg:leading-[54px]">感谢您预约 Workmins 企业管理系统的演示！</section>
              <section className="text-[18px] leading-[44px] text-center">请填写下表，我们将尽快与您联系。</section>
              <AppointmentForm
                onSubmit={handleSubmit}
              />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

const FormSchema = z.object({
  lastname: z.string().min(1, {
    message: "请输入您的姓氏",
  }),
  firstname: z.string().min(1, {
    message: "请输入您的名字",
  }),
  email: z.string().email({
    message: "请输入有效的电子邮件地址",
  }),
  phone: z.string().regex(/^[0-9]+$/, {
    message: "请输入有效的电话号码",
  }).min(1, {
    message: "请输入您的电话号码",
  }),
  area: z.string(),
  industry: z.string(),
})
const Industry = [
  { value: '专业服务', label: '专业服务' },
  { value: '体育与休闲娱乐', label: '体育与休闲娱乐' },
  { value: '保险', label: '保险' },
  { value: '公共部门（政府）', label: '公共部门（政府）' },
  { value: '公用事业及废弃物处理', label: '公用事业及废弃物处理' },
  { value: '化工', label: '化工' },
  { value: '医疗', label: '医疗' },
  { value: '国防', label: '国防' },
  { value: '工程建筑与运营', label: '工程建筑与运营' },
  { value: '建筑产品', label: '建筑产品' },
  { value: '批发', label: '批发' },
  { value: '旅游与运输行业', label: '旅游与运输行业' },
  { value: '机械制造', label: '机械制造' },
  { value: '汽车', label: '汽车' },
  { value: '消费品', label: '消费品' },
  { value: '生命科学', label: '生命科学' },
  { value: '电信', label: '电信' },
  { value: '石油与天然气', label: '石油与天然气' },
  { value: '航空与国防', label: '航空与国防' },
  { value: '零售', label: '零售' },
  { value: '高科技与电子', label: '高科技与电子' },
  { value: '高等教育与研究', label: '高等教育与研究' },
]

const Area = [
  { value: '中国', label: '中国' },
]

const AppointmentForm = (
  props: {
    onSubmit: (data: z.infer<typeof FormSchema>) => Promise<void>;
  }
) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      area: "中国",
      lastname: "",
      firstname: "",
      email: "",
      phone: "",
      industry: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const timer = setTimeout(() => {
      setIsSubmitting(true)
    }, 100)
    props.onSubmit(data).finally(() => {
      clearTimeout(timer)
      setIsSubmitting(false)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormControl>
                      <Input placeholder="请输入您的姓氏" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="请输入您的名字" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="请选择您的地区" />
                      </SelectTrigger>
                      <SelectContent>
                        {Area.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="请输入您的电话号码" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="请输入您的电子邮件" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="请选择您的行业" />
                      </SelectTrigger>
                      <SelectContent>
                        {Industry.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="text-center mt-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#0070ac] inline-flex items-center gap-2 text-white px-7 py-2 rounded-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none"
          >
            {isSubmitting && <ArrowPathIcon className="size-4 animate-spin" />}
            提交
          </button>
        </div>
      </form>
    </Form>
  )
}