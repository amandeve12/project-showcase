import { Marquee } from "@/registry/magicui/marquee"
import type { IconType } from "react-icons"
import {  FaReact } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { SiReactquery } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";

const technologies: Array<{
  name: string
  icon: IconType
  color: string
}> = [
  {
    name: "React.js",
    icon: FaReact,
    color: "#61dafb",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#539e43",
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    color: "#11110f",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    color: "#ff4154",
  },
  {
    name: "Shadcn",
    icon: SiShadcnui,
    color: "#ff4154",
  },
]

const TechnologyCard = ({
  icon: Icon,
  name,
  color,
}: {
  icon: IconType
  name: string
  color: string
}) => {
  return (
    <figure
      className="group flex w-32 flex-col items-center gap-3 align-middle justify-center  rounded-2xl "

    >
      <div
        className="grid place-items-center rounded-xl"
        // style={{ boxShadow: `inset 0 0 0 1px ${color}55` }}
      >
        <Icon aria-hidden="true" color={color} size={80} />
      </div>
      <figcaption className="whitespace-nowrap text-center text-xs font-extrabold tracking-tight text-[#252520]">
        {name}
      </figcaption>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative mx-auto flex w-[min(100%,30rem)] flex-col items-center  justify-center overflow-hidden">

      <Marquee reverse className="[--duration:20s]">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.name} {...technology} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute left-0 w-1/4"></div>
      <div className="from-background pointer-events-none absolute  right-0 w-1/4 "></div>
    </div>
  )
}
