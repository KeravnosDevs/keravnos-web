import Image from "next/image";
import { project0, project1, project2 } from "@/public/assets";
import SectionTitle from "./SectionTitle";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

export const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things We Have Built" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project One */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="http://keravnos0.great-site.net/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={project0}
                  alt="project0"
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2x1 font-bold">White Label Project</h3>
              <p className="bg-[#404040] text-sm md:text-base p-2 md:p-6 rounded-md">
                Designed for a mobile photography application, this landing page
                stands out with its sleek and{" "}
                <span className="text-textGreen">modern design, </span>
                showcasing the apps benefits and features in an attractive and{" "}
                <span className="text-textGreen">easy-to-navigate format.</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>WordPress</li>
                <li>Elementor</li>
              </ul>
              <div className="text-2xl flex gap-4">
                {/* <a
                className="hover:text-textGreen duration-300"
                href="https://github.com"
                target="_blank"
              >
                <TbBrandGithub />
              </a> */}
                <a
                  className="hover:text-textGreen duration-300"
                  href="http://keravnos0.great-site.net/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Two */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="http://keravnos2.rf.gd/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={project1}
                  alt="project1"
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2x1 font-bold">White Label Project</h3>
              <p className="bg-[#404040] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                A Landing Page Developed with a design team in mind, this page
                showcases a{" "}
                <span className="text-textGreen">
                  sleek and creative design{" "}
                </span>
                that highlights the portfolio and skills of a team of{" "}
                <span className="text-textGreen">graphic designers.</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>WordPress</li>
                <li>Elementor</li>
              </ul>
              <div className="text-2xl flex gap-4">
                {/* <a
                className="hover:text-textGreen duration-300"
                href="https://github.com"
                target="_blank"
              >
                <TbBrandGithub />
              </a> */}
                <a
                  className="hover:text-textGreen duration-300"
                  href="http://keravnos2.rf.gd/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Three */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://fincadonsuarez.com/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={project2}
                  alt="project2"
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2x1 font-bold">Finca Don Suarez Web</h3>
              <p className="bg-[#404040] text-sm md:text-base p-2 md:p-6 rounded-md">
              Website designed, developed, and maintained for a{" "}
                <span className="text-textGreen">regional family, </span>
                including ecommerce, blogging, and booking features, for a{" "}
                <span className="text-textGreen">high-demand tourism operator.</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>WordPress</li>
                <li>Elementor</li>
              </ul>
              <div className="text-2xl flex gap-4">
                {/* <a
                className="hover:text-textGreen duration-300"
                href="https://github.com"
                target="_blank"
              >
                <TbBrandGithub />
              </a> */}
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://fincadonsuarez.com/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
