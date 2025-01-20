import { CustomButton } from "@/components/CustomButton"
import { BookOpenCheck, Brain, Calendar, CheckIcon, FileCode, GitBranch, GraduationCap } from 'lucide-react'
import { Programs } from "@/components/ui/accordion-with-chevron"
import Image from "next/image"

export default function Home() {
  const features = [
    {
      icon: BookOpenCheck,
      title: "Learn from globally recognized faculty",
      description: "Learn from UC Berkeley's globally recognized faculty",
    },
    {
      icon: GraduationCap,
      title: "Earn a certificate of completion",
      description: "Earn a certificate of completion from UC Berkeley Executive Education",
    },
    {
      icon: Brain,
      title: "Explore advanced topics",
      description: "Explore advanced topics such as generative AI (GenAI)",
    },
    {
      icon: GitBranch,
      title: "Learn implementation",
      description: "Learn how to implement the ML/data science lifecycle within your own organization",
    },
    {
      icon: FileCode,
      title: "Build your portfolio",
      description: "Build a GitHub portfolio to share with recruiters and potential employers",
    },
  ]

  const careerServices = [
    "Crafting your elevator pitch",
    "Navigating your job search",
    "LinkedIn profile guidance",
    "Interview tips and preparation",
    "Resume/cover letters",
    "Negotiating salary",
  ]

  const careerExercises = [
    "Job search and interviewing for ML/AI positions",
    "Communicating ML/AI concepts through presentation skills",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex gap-8 items-center justify-center flex-col">
            <div className="space-y-8 text-center">
              <h1 className="text-4xl md:text-6xl font-mono leading-tight">
                Professional Certificate in
                <br />
                <span className="bg-black text-white inline-block">
                    Artificial Intelligence
                </span>
              </h1>
              <p className="text-black text-xl">
                Advance your business problem-solving skills with ML/AI.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
                <CustomButton variant="primary" href="#">
                    Download brochure
                </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black py-3 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm">LAST DAY TO ENROLL</p>
              <p className="font-bold text-lg">February 1st, 2025</p>
            </div>
            {/* <div className="hidden md:block border-l-2 border-dotted border-white h-20"></div> */}
            <div className="text-center md:border-l-2 md:border-dotted md:border-r-2 md:border-white h-20">
              <p className="text-sm">DURATION</p>
              <p className="font-bold text-lg">6 months, online</p>
              <p className="text-sm">15–20 hours per week</p>
            </div>
            {/* <div className="hidden md:block border-r-2 border-dotted border-white h-20"></div> */}
            <div className="text-center">
              <p className="text-sm">PROGRAM FEE</p>
              <p className="font-bold text-lg">300000 Cfa</p>
            </div>
          </div>
        </div>
      </section>

      {/* GPU Cards Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-32">
          <h2 className="text-3xl md:text-4xl font-mono text-center mb-16 max-w-4xl mx-auto leading-tight">
            Launch Your Career in{" "}
            <span className="bg-black text-white px-2 inline-block">AI</span>
          </h2>
          <div className="w-2/3 mx-auto">
            <p className="mb-6">
                Industries across the globe are undergoing a transformation driven by machine learning (ML) and artificial intelligence (AI). 
                These technologies are fundamentally changing how businesses operate and how consumers experience the world. 
                This change is fueling global demand for skilled professionals who can develop the next generation of AI/ML innovations, 
                including generative AI (GenAI) tools.
            </p>
            <p className="mb-6">
                The <span className="bg-black text-white px-2 inline-block font-bold">Professional Certificate in Artificial Intelligence</span> 
                provides you with the tools and knowledge to thrive in this evolving field. 
                This program equips you with a comprehensive foundation in ML/AI as well as advanced knowledge in data analytics, 
                deep neural networks, natural language processing (NLP), and generative AI. 
                You will gain practical insights into the business applications of these technologies and discover the full extent of their potential.
            </p>
            <p className="mb-6">
                You will learn from the world-class faculty of Berkeley Executive Education, a prestigious institution ranked among the top five in the U.S. 
                News & World Report Best Global Universities Rankings, through a program developed in collaboration with UC Berkeley&apos;s College of Engineering 
                and the Haas School of Business. Throughout this six-month program, you will develop practical, hands-on experience using cutting-edge ML/AI 
                tools and platforms. In addition, you will receive valuable career guidance to help you navigate and succeed in this fast-paced industry. 
                This program is designed to equip you with the market-ready skills you need to launch a fulfilling career in ML/AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-mono font-bold text-[#4027ff]">$15.7 tn</h1>
                    <p className="mb-2">is the potential contribution from AI to the global economy by 2030.</p>
                    <p className="text-xs">SOURCE: Forbes</p>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-mono font-bold text-[#4027ff]">33%</h1>
                    <p className="mb-2">of organizations are already applying AI across business units</p>
                    <p className="text-xs">SOURCE: Gartner</p>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-mono font-bold text-[#4027ff]">97 mn</h1>
                    <p className="mb-2">jobs are projected to be created due to AI.</p>
                    <p className="text-xs">SOURCE: Forbes</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="bg-black ">
        <div className="container mx-auto px-4 py-32">
            <h2 className="text-3xl md:text-4xl font-mono text-center mb-16 max-w-4xl mx-auto leading-tight text-white">
                Who Is This Program For?
            </h2>
            <div className="w-2/3 mx-auto text-white">
                <p className="">
                    This program is designed to provide participants with the essential knowledge and practical applications of ML/AI
                    tools and frameworks needed to transition into a high-demand career in this field. This program is open to everyone.
                </p>
            </div>
          </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-32">
            <h2 className="text-3xl md:text-4xl font-mono text-center mb-16 max-w-4xl mx-auto leading-tight text-black">
                Key takeways?
            </h2>
            <div className="w-2/3 mx-auto text-black">
                <ul>
                    <li className="list-none mb-4">
                        <span className="p-2 bg-[#4027ff] inline-block align-middle mr-8"><CheckIcon className="w-6 h-6 text-white" /></span>
                        Cloud Infrastructure Management
                    </li>
                    <li className="list-none mb-4">
                        <span className="p-2 bg-[#4027ff] inline-block align-middle mr-8"><CheckIcon className="w-6 h-6 text-white" /></span>
                        AI Model Development and Deployment
                    </li>
                    <li className="list-none mb-4">
                        <span className="p-2 bg-[#4027ff] inline-block align-middle mr-8"><CheckIcon className="w-6 h-6 text-white" /></span>
                        Automation and Scripting
                    </li>
                    <li className="list-none mb-4">
                        <span className="p-2 bg-[#4027ff] inline-block align-middle mr-8"><CheckIcon className="w-6 h-6 text-white" /></span>
                        Cybersecurity and Compliance
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-32 border-t border-black border-dashed">
            <h2 className="text-3xl md:text-4xl font-mono text-center mb-16 max-w-4xl mx-auto leading-tight text-black">
                Program Topics
            </h2>
            <div className="w-2/3 mx-auto text-black">
                <p className="mb-4">
                    This program introduces learners to the fundamental applications of automation and machine learning, 
                    while also allowing them to explore the current capabilities and potential of generative AI.
                </p>
                <Programs />
            </div>
            <div className="flex flex-col items-center text-black">
                <div className="mt-4">
                    <CustomButton variant="primary" href="#">
                        Download brochure
                    </CustomButton>
                </div>
            </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-32 border-t border-black border-dashed">
            <h2 className="text-3xl md:text-4xl font-mono text-center mb-16 max-w-4xl mx-auto leading-tight text-black">
                Hands on training
            </h2>
            <div className="w-2/3 mx-auto text-black">
              <p className="mb-4">
                From day one, you&apos;ll dive into building a real-world project for a startup as an intern, gaining hands-on experience that sets you apart. 
                Along the way, you&apos;ll collaborate with and learn from industry experts from Silicon Valley and around the globe, 
                helping you identify a specific problem in your field. Leveraging their expertise and the cutting-edge concepts, models, 
                and tools taught in the program, you&apos;ll craft innovative solutions. By the end of the bootcamp, 
                you&apos;ll have a professional-grade GitHub portfolio presentation to showcase on LinkedIn or to potential employers, 
                proving your readiness to excel in the AI industry.
              </p>
            </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-4 py-32 border-t border-black border-dashed">
            <h2 className="text-3xl md:text-4xl font-mono text-center mb-16 max-w-4xl mx-auto leading-tight text-black">
              Program Experience
            </h2>
            <div className="w-2/3 mx-auto text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`relative flex md:flex-col md:items-center ${index >= 3 ? "md:col-span-2 lg:col-span-1" : ""}`}
                  >
                    {/* Mobile layout (horizontal) */}
                    <div className="flex gap-4 md:flex-col md:items-center md:text-center">
                      <div className="p-3 bg-[#4027ff] shrink-0">
                        <feature.icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="flex flex-col justify-center md:items-center">
                        <p className="text-base sm:text-lg leading-relaxed max-w-[300px]">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:basis-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-mono text-white">
                Explore the Potential of {" "}
                <span className="bg-white text-black px-2">Generative AI</span>
              </h2>
              <p className="text-white">
                Embark on an exciting journey to understand, build, and deploy generative AI. Embark on an exciting journey to understand and deploy generative AI. With a dedicated module on generative AI fundamentals, you will grasp the limitations and potential of these technologies for real-world applications. You will learn how to use generative AI models for innovative business use cases, seamlessly integrate APIs on current platforms, and run small image generators or language models locally. By the end, you will be equipped with the skills to use cutting-edge AI tools and lead in the dynamic AI-driven world.
              </p>
            </div>
            <div className="order-first md:order-last md:basis-1/3 w-full">
              <Image src='/ai.png' alt="Image by rawpixel.com on Freepik" width="416" height="310" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-4 py-32">
            <h2 className="text-3xl md:text-4xl font-mono text-center mb-16 max-w-4xl mx-auto leading-tight text-black">
              Career Preparation and Guidance
            </h2>
            <div className="flex gap-8 items-center justify-center flex-col w-2/3 mx-auto text-black">
              <p className="mb-8">
                Transitioning to a career in ML/AI engineering requires a variety of hard and soft skills. This program guides
                you as you navigate your journey to your new career path, including crafting an elevator pitch and
                communication tips. These services are provided by Emeritus, our learning collaborator for this program. The
                program support team includes program facilitators who will help you reach your learning goals and career
                coaches to guide you through your job search. Our primary goal is to give you the skills needed to be prepared
                for a job in this field; however, job placement is not guaranteed.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Emeritus provides the following career preparation services:</h3>
                  <ul className="space-y-4">
                    {careerServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="p-2 bg-[#4027ff] inline-block align-middle mr-8"><CheckIcon className="w-6 h-6 text-white" /></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Career exercises focused on launching a career in ML/AI:</h3>
                  <ul className="space-y-4">
                    {careerExercises.map((exercise, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="p-2 bg-[#4027ff] inline-block align-middle mr-8"><CheckIcon className="w-6 h-6 text-white" /></span>
                        <span>{exercise}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <CustomButton variant="primary" href="#">
                  Download brochure
                </CustomButton>
              </div>
            </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-4 py-20 border-t border-black border-dashed">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:basis-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-mono text-black">
                <span className="bg-black text-white px-2">Certificate</span>
              </h2>
              <p className="text-black">
                Earn a professional certificate accredited by the United Kingdom CPD Certification Service
              </p>
              <div className="flex flex-wrap gap-6">
                <CustomButton variant="primary" href="#">
                  Download brochure
                </CustomButton>
              </div>
            </div>
            <div className="order-first md:order-last md:basis-1/3 w-full">
              <Image src='/certif.jpeg' alt="Image by rawpixel.com on Freepik" width="416" height="310" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="container mx-auto">
          <div className="p-8">
            <div className="flex flex-col items-center border-2 border-dotted border-white p-8 md:p-[30px]">
              <div>
                <h2 className="text-2xl md:text-4xl font-mono text-white text-center max-w-[768px] mx-auto mb-8">
                  Early registrations are encouraged.{" "}
                  <span className="bg-white text-black px-2 inline-block">
                    Seats fill up quickly!
                  </span>
                </h2>
              </div>
              <div>
                <p className="text-white text-lg max-w-[850px] mx-auto mb-4">
                  <Calendar className="inline-block" /> Last Day to Enroll January 23, 2025 12:59 AM
                </p>
              </div>
              <CustomButton 
                variant="primary" 
                href="tel:+242 06 965 9379"
              >
                APPLY NOW
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}