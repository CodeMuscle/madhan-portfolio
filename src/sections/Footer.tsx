import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Behance",
    href: "https://www.behance.net/madhanv07",
  },
  {
    title: "LinkedIn",
    href: "www.linkedin.com/in/madhan-uiux",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/uiuxmadhan?igsh=MWowZ2F5azVtdDh5eA==",
  },
  // {
  //   title: "Twitter",
  //   href: "#",
  // },
];

export const Footer = () => {
  return (
    <footer className="relative z-0">
      {/* <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div> */}
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between text-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 z-10">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                className="inline-flex gap-1.5 items-center"
                href={link.href}
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
