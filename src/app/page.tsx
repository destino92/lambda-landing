import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "@/components/CustomButton"
import { Grid3x3, Zap, Database, CuboidIcon as Cube, BinaryIcon, PiggyBankIcon } from 'lucide-react'
import MagnetLines from '@/components/MagnetLines/MagnetLines'

export default function Home() {
  const gpus = [
    {
      title: "NVIDIA H100",
      image: "/h100.jpg",
      description: "AI Scaler is one of the first cloud providers to make NVIDIA H100 Tensor Core GPUs available on-demand in a public cloud."
    },
    {
      title: "NVIDIA H200",
      image: "/h200.webp",
      description: "AI Scaler Private Cloud is now available with the NVIDIA H200 Tensor Core GPU. H200 is packed with 141GB of HBM3e running at 4.8TB/s."
    },
    {
      title: "NVIDIA GH200",
      image: "/h300.webp",
      description: "AI Scaler Private Cloud is now available with the NVIDIA GH200 Grace Hopper™ Superchip. A single GH200 has 576 GB of coherent memory."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      {/* <div className="bg-[#4339F2] p-3 text-center text-sm text-white">
        <p>
          Don&apos;t miss out on NVIDIA Blackwell!{" "}
          <Link href="#" className="underline">
            Join the waitlist.
          </Link>
        </p>
      </div> */}

      {/* Navigation */}
      {/* <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-6 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="lamb.webp" alt="Lambda Logo" width={120} height={40} />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Cloud</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Data Center</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Desktops</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Company</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Resources</Link>
          </div>

          <div className="flex items-center space-x-4">
            <CustomButton variant="secondary">
              Login
            </CustomButton>
            <CustomButton variant="primary">
              Create account
            </CustomButton>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl font-mono leading-tight">
                The{" "}
                <span className="bg-black text-white px-2 inline-block">
                  AI Developer
                </span>
                <br />
                Cloud
              </h1>
              <p className="text-black text-xl">
                On-demand NVIDIA GPU instances & clusters for AI training & inference.
              </p>
              <div className="flex flex-wrap gap-6">
                <CustomButton variant="primary" href="#">
                  Launch GPU instance
                </CustomButton>
                <CustomButton variant="secondary" href="#">
                  Contact sales
                </CustomButton>
              </div>
            </div>
            <div className="hidden md:block max-w-sm">
              <MagnetLines />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center w-full">
                <BinaryIcon strokeWidth={1} absoluteStrokeWidth className="h-80 w-60 text-white mx-auto" />
              </div>
              <div>
                <h2 className="text-4xl md:text-6xl font-mono text-white">
                  The only Cloud focused on{" "}
                  <span className="bg-white text-black px-2 inline-block max-w-sm">
                    enabling AI developers
                  </span>
                </h2>
              </div>
            </div>
            <div className="space-y-12">
              <div className="flex gap-6 items-start group">
                <div className="p-2 bg-[#4027ff]">
                  <Grid3x3 className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2 pb-12 border-b-2 border-dotted border-white group-last:border-0">
                  <h3 className="text-2xl font-mono text-white">1-Click Clusters</h3>
                  <p className="text-white">
                    On-demand GPU clusters featuring NVIDIA H100 Tensor Core GPUs with NVIDIA Quantum-2 InfiniBand. No long-term contract required.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="p-2 bg-[#4027ff]">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2 pb-12 border-b-2 border-dotted border-white group-last:border-0">
                  <h3 className="text-2xl font-mono text-white">On-Demand Instances</h3>
                  <p className="text-white">
                    Spin up on-demand GPU Instances billed by the hour. NVIDIA H100 instances starting at $2.49/hr.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="p-2 bg-[#4027ff]">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2 pb-12 border-b-2 border-dotted border-white group-last:border-0">
                  <h3 className="text-2xl font-mono text-white">Private Cloud</h3>
                  <p className="text-white">
                    Reserve thousands of NVIDIA H100s, H200s, GH200s, B200s and GB200s with Quantum-2 InfiniBand Networking.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="p-2 bg-[#4027ff]">
                  <PiggyBankIcon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-mono text-white">The lowest-cost AI inference</h3>
                  <p className="text-white">
                    Access the latest LLMs through a serverless API endpoint with no rate limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GPU Cards Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-32">
          <h2 className="text-5xl md:text-6xl font-mono text-center mb-16 max-w-4xl mx-auto leading-tight">
            Get the most coveted and highest performing{" "}
            <span className="bg-black text-white px-2 inline-block">NVIDIA GPUs</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {gpus.map((gpu, index) => (
              <div key={index} >
                <Link 
                  href="#"
                  className="block w-full max-w-[320px] h-auto leading-[0] mb-20 font-semibold relative border-2 border-dotted border-[#4027ff] transition-colors duration-300 ease-out text-black hover:bg-[#4027ff] hover:text-white group"
                >
                  <h5 className="absolute left-4 top-4 z-10 transition-colors duration-300 ease-out font-mono">
                    {gpu.title}
                  </h5>
                  <div className="relative w-full">
                    <Image
                      src={gpu.image || "/placeholder.svg"}
                      alt={gpu.title}
                      width={320}
                      height={320}
                      className="w-full h-auto m-0 max-w-[320px] translate-x-9 translate-y-14"
                    />
                  </div>
                </Link>
                <p className="text-center text-lg font-semibold mt-4">
                  {gpu.description}
                </p>
              </div>  
            ))}
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="bg-black">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-mono text-white">
                AI Scaler is used by more than{" "}
                <span className="bg-white text-black px-2">50k ML teams</span>
              </h2>
              <p className="text-white">
                One-line installation and managed upgrade path for: PyTorch®, TensorFlow, NVIDIA® CUDA®, NVIDIA CuDNN®, and NVIDIA Drivers
              </p>
              <CustomButton variant="primary" href="#">
                Learn more
              </CustomButton>
            </div>
            <div className="hidden md:block w-full">
              <Cube strokeWidth={1} absoluteStrokeWidth className="h-80 w-60 text-white mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-black">
        <div className="container mx-auto">
          <div className="border-2 border-dotted border-white">
            <div className="border-b-2 border-dotted border-white grid grid-cols-1 sm:grid-cols-2 p-8 md:p-[30px]">
              <div>
                <h2 className="text-2xl md:text-4xl font-mono text-white max-w-[768px] mx-auto">
                  Ready to{" "}
                  <span className="bg-white text-black px-2 inline-block">
                    get started?
                  </span>
                </h2>
              </div>
              <div>
                <p className="text-white text-lg max-w-[850px] mx-auto">
                  Create a cloud account instantly to spin up GPUs today or contact us to secure a long-term contract for thousands of GPUs
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="w-full sm:w-1/2 p-[30px] sm:p-14 text-left sm:text-center">
                <CustomButton 
                  variant="primary" 
                  href="https://cloud.lambdalabs.com/sign-up"
                >
                  Launch GPU instances
                </CustomButton>
              </div>
              <div className="w-full sm:w-1/2 p-[30px] sm:p-14 text-left sm:text-center sm:border-l-2 sm:border-dotted sm:border-white">
                <CustomButton 
                  variant="secondary" 
                  href="https://lambdalabs.com/talk-to-an-engineer?hsLang=en"
                >
                  Contact sales
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

