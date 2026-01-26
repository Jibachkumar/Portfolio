import { Link } from "react-router-dom";
import AnimatedText from "../components/AminatedText";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Folder,
  Upload,
  Download,
  CheckSquare,
  Users,
  Image as ImageIcon,
  BookOpen,
  PanelLeft,
  X,
  Circle,
  Github,
  Gitlab,
  Ship, 
  Plane, 
  Search, 
  Map, 
  TrendingUp
} from "lucide-react";
import { useInView } from "../hooks/useInView.js";

export default function Home() {
  const firstSection = useInView();
  const secondSection = useInView();

  const buttonContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 4.8, // 👈 starts after paragraph
      },
    },
  };

  const buttonItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  function ChecklistRow({ label, done, active }) {
    return (
      <div className={`flex  items-start gap-2 ${active ? "" : ""}`}>
        {done ? (
          <CheckCircle2 className="w-4 h-4 text-slate-400" />
        ) : (
          <Circle
            className={`w-4 h-4 ${
              active ? "text-slate-700" : "text-slate-300"
            }`}
          />
        )}
        <span
          className={`leading-snug text-[11px] ${
            done
              ? "text-slate-400"
              : active
              ? "text-slate-800 font-medium"
              : "text-slate-600"
          }`}
        >
          {label}
        </span>
      </div>
    );
  }

  function RepoButton({ icon, label }) {
    return (
      <button className="flex gap-1 text-[11px] bg-white border border-slate-200 hover:border-slate-300 px-2 py-1.5 rounded-md shadow-sm">
        {icon}
        {label}
      </button>
    );
  }

  return (
    <div className="w-full h-full from-pink-200 via-pink-100 to-pink-200 font-sans tracking-wide ">
      {/* BLURRED BLOBS */}
      <div className="absolute left-20 top-32 w-64 h-64 bg-pink-50 rounded-full blur-[120px] opacity-60" />
      <div className="absolute right-80 bottom-32 w-72 h-72 bg-rose-50 rounded-full blur-[130px] opacity-60" />
      {/* CENTER CONTENT */}
      <div className="relative w-full  z-10 flex flex-col items-center justify-center  text-center">
        {/* DOT GRID BACKGROUND */}
        {/* <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        /> */}

        {/* CONTENT */}
        <div className="w-full text-center px-6 max-w-5xl">
          {/* MAIN HEADING */}
          <AnimatedText
            text="Hi. I am Jibachh."
            delay={0}
            className="text-[3.5rem] mt-20 italic md:text-[5rem] font-bold leading-tight text-emerald-900"
          />

          <AnimatedText
            text="A full stack Developer."
            delay={1.2} // 👈 now this ACTUALLY waits
            className="text-[3.5rem] italic md:text-[5rem] font-bold leading-tight text-emerald-900"
          />

          {/* SUBTEXT */}
          <AnimatedText
            text="I create meaningful digital experiences through elegant code and innovative solutions, specializing"
            delay={2.2}
            className="mt-6 text-lg font-mono text-emerald-900/80 font-semibold"
          />

          <AnimatedText
            text="in scalable web applications built to perform and grow."
            delay={3.2}
            className="text-lg font-mono text-emerald-900/80 font-semibold"
          />
        </div>

        <motion.div
          variants={buttonContainer}
          initial="hidden"
          animate="visible"
          className="flex gap-3"
        >
          {["React", "Node.js", "GenAI", "Botpress"].map((tech) => (
            <motion.button
              key={tech}
              variants={buttonItem}
              className="mt-6 flex items-center gap-2 rounded-md font-serif text-green-800 border border-gray-800 px-6 py-2 text-sm hover:bg-black hover:text-white transition"
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* case study  */}
      <div>
        {/* first section */}
        <div className="w-full pt-28 flex flex-col items-center text-center">
          {/* Badge */}
          <span className="mb-6 rotate-[8deg]  inline-flex items-center rounded-full bg-[#c7594b] px-7 py-3 text-lg font-mono font-bold text-white shadow-sm">
            Selected work
          </span>

          {/* Title */}
          <h1 className="text-6xl  md:text-7xl font-serif font-semibold text-[#0b5d4b] mb-6">
            Case study
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg text-stone-600 leading-relaxed font-mono font-semibold">
            Here are some examples of how I combine workshop, data and a growth
            mindset to design products.
          </p>
        </div>

        {/* second section */}
        <div className="mt-14 font-serif relative mx-auto w-[960px] h-[520px] rounded-3xl overflow-hidden shadow-md bg-[#faf9f7]">
          {/* Left content */}
          <div className="absolute inset-y-0 -left-6  p-14 flex flex-col justify-center">
            <div className="space-x-6">
              <span className="font-serif items-center gap-2 bg-white/70 text-sm font-medium text-stone-700 px-3 py-1 rounded-full w-fit mb-6">
                #Growth design
              </span>
            </div>

            <h1 className="text-4xl font-semibold text-green-950 italic leading-tight mb-6">
              Redesigning onboarding
            </h1>

            <p className="text-stone-800 text-lg max-w-md mb-10">
              An onboarding redesign that increased activation <br /> rate by{" "}
              <strong>19%</strong> and sign‑up rate by <strong>41%</strong>
            </p>

            <button className="group flex items-center gap-2 text-stone-950 font-semibold font-mono text-lg">
              READ CASE STUDY
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* Right mock UI */}
          <div className="absolute inset-y-0 right-0 w-[45%] rounded-l-3xl shadow-inner">
            {/* main product UI */}
            <div className="relative w-full h-full bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-200 grid grid-cols-[70px_1fr] overflow-hidden">
              {/* Sidebar */}
              <div className="bg-slate-50 border-r border-slate-200 flex flex-col items-center py-4 gap-6">
                <PanelLeft className="w-5 h-5 text-slate-400" />
                <Folder className="w-5 h-5 text-slate-500" />
                <Upload className="w-5 h-5 text-slate-400" />
                <Download className="w-5 h-5 text-slate-400" />
                <CheckSquare className="w-5 h-5 text-slate-400" />
                <Users className="w-5 h-5 text-slate-400" />
                <ImageIcon className="w-5 h-5 text-slate-400" />
                <BookOpen className="w-5 h-5 text-slate-400" />
              </div>

              {/* Editor area */}
              <div className="relative flex flex-col">
                {/* Top navigation bar */}
                <div className="h-14 border-b border-slate-200 flex items-center justify-between px-8">
                  <div className="flex items-center gap-5 text-xs">
                    <span className="text-blue-600 font-semibold">Editor</span>
                    <span className="text-slate-500">Upload</span>
                    <span className="text-slate-500">Download</span>
                    <span className="text-slate-500">Tasks</span>
                    <span className="text-slate-500">Contributors</span>
                  </div>
                </div>

                {/* Content cards */}
                <div className="relative p-8 space-y-6">
                  <div className="bg-stone-50 border border-slate-100 rounded-xl mr-7 p-4 shadow-sm">
                    <div className="h-3 w-32 bg-stone-300 rounded mb-3" />
                    <div className="h-2 w-full bg-stone-200 rounded mb-2" />
                    <div className="h-2 w-2/3 bg-stone-200 rounded" />
                  </div>

                  <div className="bg-white border border-slate-100 rounded-xl mr-7 p-4 shadow-sm">
                    <div className="h-3 w-40 bg-stone-300 rounded mb-3" />
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-stone-200 rounded" />
                      <div className="h-2 w-5/6 bg-stone-200 rounded" />
                      <div className="h-2 w-2/3 bg-stone-200 rounded" />
                    </div>
                  </div>
                </div>

                {/* Floating onboarding card */}
                <div className="absolute left-3 top-37">
                  <div className="w-65 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-slate-200 bg-white">
                    {/* Header */}
                    <div className="bg-blue-50/70 border-b border-slate-200 px-5 py-4 rounded-t-2xl relative">
                      <button className="absolute right-4 top-4 text-slate-400 hover:text-slate-600">
                        <X className="w-4 h-4" />
                      </button>

                      <p className="text-[11px] font-semibold text-slate-800">
                        Getting started
                      </p>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        Here’s your personalized step-by-step checklist
                      </p>

                      {/* Progress */}
                      <div className="mt-3 h-2 w-full bg-white rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-blue-500 rounded-full" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="px-5 py-4 space-y-4 text-xs">
                      <ChecklistRow label="Create first project" done />

                      <div className="space-y-2">
                        <ChecklistRow
                          label="Upload files to translate"
                          active
                        />
                        <p className="text-[11px] text-slate-600 ml-5">
                          Add content from your repository or upload a file.
                        </p>

                        <div className="flex gap-2 ml-2 flex-wrap">
                          <RepoButton
                            icon={<Github className="w-4 h-4" />}
                            label="Github"
                          />
                          <RepoButton
                            icon={
                              <Gitlab className="w-4 h-4 text-orange-500" />
                            }
                            label="Gitlab"
                          />
                        </div>

                        <button className="ml-7 mt-1 inline-flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-md border border-slate-200">
                          <Upload className="w-3.5 h-3.5" />
                          Upload files
                        </button>
                      </div>

                      <ChecklistRow label="Translate your first sentence" />
                      <ChecklistRow label="Export your translations" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* third section */}
      </div>

      {/* my work */}
      <div className="w-full bg-[#f8f8f8] mt-5 py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-5xl font-bold font-serif text-stone-800 leading-tight pb-4  border-b border-slate-400 text-center">
            My Work
          </h2>

          {/* Main Layout */}
          {/* first section */}
          <div className="mt-20  grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* LEFT : Website Mockup Image */}
            <div
              ref={firstSection.ref}
              className={`relative transition-all duration-900 ease-out
                        ${
                          firstSection.showLeft
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-20"
                        }
                      `}
            >
              <div className="rounded-[32px] w-xl h-[376px] bg-gradient-to-br from-slate-200 via-slate-700 to-slate-800 p-4 shadow-2xl">
                <div className="bg-[#0f2233]  rounded-md overflow-hidden">
                  {/* Browser Bar */}
                  <div className="h-12 bg-[#0f2233] text-white/90 font-serif flex flex justify-between items-center px-4 gap-2">
                    <div className="flex gap-1">
                      <span className="inline-block w-3 h-3 rounded-full bg-red-400"></span>
                      <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
                      <span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
                    </div>

                    <div className="flex text-[11px] ml-6 items-center gap-4">
                      <Link to="#" className="hover:text-white">
                        Features
                      </Link>
                      <Link to="#" className="hover:text-white">
                        Resources
                      </Link>
                      <Link to="#" className="hover:text-white">
                        Pricing
                      </Link>
                    </div>

                    <div className="flex items-center text-[11px] gap-4">
                      <Link to="#" className="hover:text-white">
                        Login
                      </Link>
                      <button className="bg-orange-600 hover:bg-orange-700 text-white rounded-md px-2 py-1">
                        Get started
                      </button>
                    </div>
                  </div>

                  {/* Website Content */}
                  <div className="p-2 items-center">
                    {/* Text Area */}
                    <div className="text-center px-6 pb-5 text-white relative overflow-hidden">
                      <h1 className="text-md font-medium font-serif  leading-tight">
                        Your supply chain.
                        <br />
                        Clearer than ever before.
                      </h1>

                      <p className="mt-1 text-white/90 font-serif max-w-sm mx-auto text-[10px]">
                        We create, real-time data across your
                        logistics so you know where your shipments are and what
                        to do next.
                      </p>

                      <div className="mt-4 font-serif flex items-center justify-center gap-4">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-2 py-1">
                          Track your parcels
                        </button>
                        <button className="text-white/80 hover:text-white text-sm">
                          Contact us →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard preview */}
                  <div className="bg-white w-lg mx-auto h-[137px] rounded-t-2xl px-6 pt-3 ">
                    {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="font-serif">
                          <h1 className="text-sm font-semibold">Track</h1>
                          <p className="text-[10px] text-slate-500">Events shown in local time</p>
                        </div>
                        <div className="relative border border-slate-100 rounded-full">
                          <div className="pl-4 py-1 w-[300px] flex items-center gap-3">
                            <Search className="w-3 h-3 text-slate-400" />
                            <input
                            placeholder="search"
                            className="border-0 focus-visible:ring-0 text-sm"
                            />
                            <button className="bg-orange-500 text-white text-[10px] font-serif rounded-r-full absolute py-[7px] px-2 right-0">Search</button>
                          </div>
                        </div>
                      </div>

                    <div className="mt-5 grid md:grid-cols-2 gap-2 text-xs text-gray-600">
                        <div className="rounded-md font-serif h-10 border border-slate-200 flex flex-row items-center justify-between px-1">   
                          <Ship className="w-4 h-4 text-slate-400" />
                          <h2 className="text-[11px] font-medium text-slate-500">Ocean shipments tracked </h2>
                          <button variant="link" className="text-[10px] text-blue-700 font-semibold">View all</button> 
                        </div>

                        <div className="rounded-md font-serif h-10 border border-slate-200 flex flex-row items-center justify-between px-1">   
                          <Plane className="w-4 h-4 text-slate-400" />
                          <h2 className="text-[11px] font-medium text-slate-500">Air shipments tracked </h2>
                          <button variant="link" className="text-[10px] text-blue-700 font-semibold">View all</button> 
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT : Project Description */}
            <div
              className={`space-y-6 transition-all duration-900 ease-out delay-200
                ${
                  firstSection.showRight
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-y-20"
                }
              `}
            >
              <h3 className="text-3xl font-semibold text-stone-800 leading-tight font-serif">
                EXP Website
              </h3>

              <p className="text-stone-950 w-[590px] font-serif font-medium leading-relaxed ">
                Partnering with Future Brand , we developed a sophisticated
                website for SCI Ventures, integrating custom JavaScript and GSAP
                for smooth animations and a unique pre-loader for first-time
                visitors. Despite tight deadlines, we delivered a seamless,
                professional scrolling experience, impressing the client with
                our technical prowess and timely execution.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 font-semibold font-mono text-gray-950 hover:underline"
              >
                VISIT WEBSITE <span>↗</span>
              </a>

              {/* Tags */}
              <div className="flex flex-wrap font-serif gap-3 pt-4 ">
                {[
                  "Attributes",
                  "Client-First",
                  "Figma to Webflow",
                  "Webflow development",
                  "GSAP Animations",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-white border text-sm text-gray-800 shadow-sm hover:bg-gray-950 hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* second section */}
          <div className="w-full mt-12 border-b border-slate-400"> </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* LEFT : Website Mockup Image */}
            <div
              ref={secondSection.ref}
              className={`relative transition-all duration-900 ease-out
                        ${
                          secondSection.showLeft
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-20"
                        }
                      `}
            >
              <div className="rounded-[32px] w-xl h-[376px] bg-gradient-to-br from-[#332D56] via-[#332D56] to-[#332D56] p-6 shadow-2xl">
                {/* bottom section */}
                <div className="bg-[#061E29] ml-2 w-sm h-[17rem] rounded-sm">
                  {/* Browser Bar */}
                  <div className="h-12 flex items-center px-4 gap-2">
                    {/* Top Navigation */}
                    <div className="flex items-center gap-20 justify-between px-2  py-2">
                      <div className="flex items-center gap-2 font-semibold text-sm">
                        <h1 className="text-[#CD1818] font-semibold font-serif">
                          AI
                        </h1>
                      </div>

                      <div className="flex items-center font-serif px-2 py-2 justify-between gap-3 text-[11px] text-gray-500">
                        <Link to="#" className="hover:text-black">
                          Research
                        </Link>
                        <Link to="#" className="hover:text-black">
                          Strategy
                        </Link>
                        <Link to="#" className="hover:text-black">
                          Team
                        </Link>
                        <button className="rounded-full px-2 border">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Website Content */}
                  <div className="p-10 grid grid-cols-2 gap-10 items-center">
                    {/* Text Area */}
                    <div className="space-y-6 text-white/80">
                      <h1 className="text-2xl font-serif">chat with AI</h1>
                      <div className="space-y-2">
                        <h1 className="font-bold bg-red-800 px-2 rounded-full text-xl font-serif">
                          Chatbot
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                {/* top section */}
                <div className="absolute top-20 right-9 bg-white shadow-2xl w-sm h-[17rem]">
                  {/* Browser Bar */}
                  <div className="h-12 flex items-center px-4 gap-2">
                    {/* Top Navigation */}
                    <div className="flex items-center gap-20 justify-between px-2  py-2">
                      <div className="flex items-center gap-2 font-semibold text-sm ">
                        <h1 className="font-serif italic">AI</h1>
                      </div>

                      <div className="flex items-center font-serif px-2 py-2 rounded-full bg-black/5 justify-between gap-3 text-[11px] text-gray-500">
                        <Link to="#" className="hover:text-black">
                          Research
                        </Link>
                        <Link to="#" className="hover:text-black">
                          Strategy
                        </Link>
                        <Link to="#" className="hover:text-black">
                          Team
                        </Link>
                        <button className="rounded-full px-2 border">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Website Content */}
                  <div className="flex px-5 mt-5 font-serif text-sm font-medium">
                    <div>
                      <h2>
                        Connect with <span className="font-mono">genAI</span>{" "}
                      </h2>
                      <p>
                        create your product <span className=""> chatbot</span>{" "}
                      </p>
                      <p className="text-[8px]">
                        An AI-powered chatbot built for Messenger <br /> and
                        Telegram that enables real-time product <br /> inquiries
                        and intelligent, automated responses.
                      </p>
                      <button className="rounded-full mt-2 px-3 py-1 bg-[#c7594b] shadow-md text-white/80 text-[11px] hover:bg-orange-600">
                        Our Strategy
                      </button>
                    </div>

                    <div>
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/020/547/238/large_2x/ai-chat-bot-on-computer-generate-smart-solution-answer-to-user-artificial-intelligence-robot-answer-questions-provide-smart-refinement-conversation-and-ideas-3d-vector.jpg"
                        className="h-28 w-full -rotate-[10deg] object-cover rounded-xl"
                      />
                      <div className="absolute bottom-12 right-12">
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/022/479/092/large_2x/system-artificial-intelligence-chatgpt-chat-bot-ai-technology-smart-robot-ai-chat-gpt-application-software-free-photo.jpg"
                          className="h-20 w-20 rotate-[10deg] object-cover rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT : Project Description */}
            <div
              className={`space-y-6 transition-all duration-900 ease-out delay-200
                ${
                  secondSection.showRight
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-y-20"
                }
              `}
            >
              <h3 className="text-3xl font-semibold text-stone-800 leading-tight font-serif">
                GenAI Chatbot
              </h3>

              <p className="text-stone-950 w-[590px] font-serif font-medium leading-relaxed ">
                We developed Link sophisticated website, integrating custom
                JavaScript and an AI-powered generative RAG chatbot built using
                a LangChain agent. Despite tight deadlines, we delivered a
                seamless, high-performance experience, demonstrating strong
                technical expertise and efficient execution.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 font-semibold font-mono text-gray-950 hover:underline"
              >
                VISIT WEBSITE <span>↗</span>
              </a>

              {/* Tags */}
              <div className="flex flex-wrap font-serif gap-3 pt-4 ">
                {[
                  "Attributes",
                  "Client-First",
                  "Figma to Webflow",
                  "Webflow development",
                  "GSAP Animations",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-white border text-sm text-gray-800 shadow-sm hover:bg-gray-950 hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design and development process */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-5xl font-bold font-serif text-stone-800 leading-tight pb-4 text-center">
          Design and Development solutions
        </h2>
        {/* development solution section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800 font-serif">
          {/* Digital Design */}
          <div className="flex flex-col gap-4">
            <i className="fa-solid fa-pen-nib text-3xl text-black"></i>
            <h3 className="text-lg font-semibold">Digital Design</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              I create sitemaps, wireframes, prototypes, and pixel-perfect Figma
              designs with a focus on usability, intuitive user interactions,
              and turning ideas into engaging digital experiences.
            </p>
          </div>

          {/* Webflow Development */}
          <div className="flex flex-col gap-4 md:pl-8 md:border-l border-gray-200">
            <i className="fa-solid fa-code text-3xl text-black"></i>
            <h3 className="text-lg font-semibold">Webflow Development</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Webflow allows me to develop dynamic websites, featuring
              animations, interactions, and responsive layouts that deliver an
              engaging user experience across all devices.
            </p>
          </div>

          {/* SEO */}
          <div className="flex flex-col gap-4 md:pl-8 md:border-l border-gray-200">
            <i className="fa-solid fa-chart-line text-3xl text-black"></i>
            <h3 className="text-lg font-semibold">SEO</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              I build websites with a focus on SEO, fast loading times, and a
              smooth user experience, all contributing to online success through
              both performance and design.
            </p>
          </div>
        </div>

        {/* development process section */}
        <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT SIDE */}
          <div className="relative">
            <h2 className="text-5xl font-bold font-serif text-stone-800 leading-tight">
              MY PROCESS, FROM CONCEPT TO LAUNCH
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-12 font-serif border-l border-gray-200 pl-10">
            {/* Step 01 */}
            <div className="space-y-3">
              <span className="text-xs tracking-widest text-gray-400 uppercase">
                Discovery / 01
              </span>
              <h3 className="text-lg font-semibold">
                What is the project’s goal?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                We’ll start by outlining the project scope and identifying the
                features needed to achieve our objectives.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Step 02 */}
            <div className="space-y-3">
              <span className="text-xs tracking-widest text-gray-400 uppercase">
                Strategy / 02
              </span>
              <h3 className="text-lg font-semibold">
                How will we reach our goal?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                We’ll develop a strategy to align on objectives, visual style,
                features, and overall appearance.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Step 03 */}
            <div className="space-y-3">
              <span className="text-xs tracking-widest text-gray-400 uppercase">
                Design / 03
              </span>
              <h3 className="text-lg font-semibold">
                Visually appealing website.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                I’ll create a design that not only looks great but also supports
                the website’s strategic goals and purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
