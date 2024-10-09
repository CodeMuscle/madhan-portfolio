"use client";

import Image from "next/image";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import FigmaIcon from "@/assets/icons/figma.svg";
import FramerIcon from "@/assets/icons/framer.svg";
import IllustratorIcon from "@/assets/icons/illustrator.svg";
import ChatGPTIcon from "@/assets/icons/chatgpt.svg";
import NotionIcon from "@/assets/icons/notion.svg";
import PhotoshopIcon from "@/assets/icons/photoshop.svg";
import WebflowIcon from "@/assets/icons/webflow.svg";
import AdobeXDIcon from "@/assets/icons/adobe-xd.svg";
import SplineIcon from "@/assets/icons/spline.svg";

import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "Framer",
    iconType: FramerIcon,
  },
  {
    title: "Webflow",
    iconType: WebflowIcon,
  },
  {
    title: "Illustrator",
    iconType: IllustratorIcon,
  },
  {
    title: "ChatGPT",
    iconType: ChatGPTIcon,
  },
  {
    title: "Notion",
    iconType: NotionIcon,
  },
  {
    title: "Photoshop",
    iconType: PhotoshopIcon,
  },
  {
    title: "Adobe XD",
    iconType: AdobeXDIcon,
  },
  {
    title: "Spline",
    iconType: SplineIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "35%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏻‍♀️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Art",
    emoji: "🎨🖌️",
    left: "66%",
    top: "50%",
  },
  {
    title: "Trading",
    emoji: "📊",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Your Vision, My Expertise"
          description="I'm here to add a unique touch of creativity to your project, pushing it beyond what you imagined!"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Certification"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" className="" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Industry Tools"
                description="Explore the technologies and tools I use to craft exceptional
              digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-scroll-left [animation-duration:120s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-scroll-right [animation-duration:120s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond Design"
                description="Explore my hobbies and interests"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smile-memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
