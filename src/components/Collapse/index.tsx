import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"
import "./style.css"

export default function Collapse({ children, className }: { children: React.ReactNode, className?: string }) {
  return <Collapsible className={cn("Collapsible", className)}>{children}</Collapsible>
}
Collapse.Trigger = function Trigger({ children }: { children: React.ReactNode }) {
  return (
    <CollapsibleTrigger className="CollapsibleTrigger w-full">
      <div className="flex p-[12px_16px] items-center CollapsibleTrigger">
        <ChevronRightIcon className="size-5 mr-2" />
        {children}
      </div>
    </CollapsibleTrigger>
  )
}
Collapse.Content = function Content({ children }: { children: React.ReactNode }) {
  return <CollapsibleContent className="CollapsibleContent p-[12px_16px]">{children}</CollapsibleContent>
}
