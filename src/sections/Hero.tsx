import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";

import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-52 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit
          rotation={-72}
          size={800}
          children={<StarIcon className="size-28 text-emerald-300" />}
          orbit
          orbitDuration="300s"
          spin
          spinDuration="40s"
        />

        <HeroOrbit
          rotation={20}
          size={550}
          children={<StarIcon className="size-12 text-emerald-300" />}
          orbit
          orbitDuration="302s"
          spin
          spinDuration="40s"
        />

        <HeroOrbit
          rotation={98}
          size={590}
          children={<StarIcon className="size-8 text-emerald-300" />}
          orbit
          orbitDuration="204s"
          spin
          spinDuration="100s"
        />

        <HeroOrbit
          rotation={-14}
          size={430}
          children={<SparkleIcon className="size-8 text-emerald-300/20" />}
          orbit
          orbitDuration="206s"
        />

        <HeroOrbit
          rotation={79}
          size={440}
          children={<SparkleIcon className="size-5 text-emerald-300/20" />}
          orbit
          orbitDuration="208s"
          spin
          spinDuration="30s"
        />

        <HeroOrbit
          rotation={178}
          size={530}
          children={<SparkleIcon className="size-10 text-emerald-300/20" />}
          orbit
          orbitDuration="200s"
        />

        <HeroOrbit
          rotation={144}
          size={710}
          children={<SparkleIcon className="size-14 text-emerald-300/20" />}
          orbit
          orbitDuration="202s"
          spin
          spinDuration="60s"
        />

        <HeroOrbit rotation={85} size={720} orbit orbitDuration="404s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit rotation={-41} size={520} orbit orbitDuration="406s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit rotation={-5} size={650} orbit orbitDuration="308s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          {/* <Image
            src={memojiImage}
            alt="Person peeking"
            className="size-[100px]"
          /> */}
          <div className="bg-gray-950 border border-gray-800 px-6 py-4 inline-flex items-center gap-4 rounded-full">
            <div className="flex items-center justify-center relative">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 inset-0 rounded-full animation-delay-600 absolute animate-ping-large"></div>
              </div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-[52rem] mx-auto flex flex-col items-center">
          <h1 className="font-sans text-3xl md:text-6xl md:leading-[65px] md:font-semibold text-center mt-8 tracking-wide">
            Innovative UX/UI Designer & No-Code Developer
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg max-w-[60%]">
            I'm driven by creating eye-catching designs that resonate with
            audiences. Let&apos;s collaborate!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </a>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋🏼</span>
            <span className="font-semibold">
              <a href="mailto:madhanuiux@gmail.com">Let's Connect</a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
