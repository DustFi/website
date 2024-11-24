"use client"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-dark-900 overflow-hidden text-black">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Floating Circles */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-orange-400 rounded-full"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-orange-400 rounded-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/10 backdrop-blur-lg rounded-full px-4 py-1.5 text-sm inline-flex items-center mb-8"
            >
              <span className="text-orange-400">Using DeDust Protocol</span>
              <Link href="https://docs.dedust.io/docs/introduction">
                <span className="ml-2 text-gray-500 flex items-center">
                  Learn how it works
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>

            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Innovative<br />
              <span className="text-orange-400">SuperDEX</span><br />
              on Ton Blockchain
            </motion.h1>

            {/* Features */}
            <div className="grid grid-cols-3 gap-8 my-12 text-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className=" text-sm">profit split up</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400"> 1 Token</div>
                <div className=" text-sm"> Is all you need to start</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className=" text-sm"> Community Focussed</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 mb-8"
            >
              Just start trading with DustFi and elevate your trading experience to the next level on Ton Blockchain.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700"
                onClick={() => window.open("https://app.dustfi.xyz")}
              >
                Try App
              </Button>
              <Button variant="outline" size="lg" className="bg-white/5 hover:bg-black"
                onClick={() => window.open("https://t.me/dustfidex")}
              >
                Join Community
              </Button>
            </motion.div>

            {/* Floating Hand Image */}
            {/* <div className="absolute -bottom-20 right-0 w-72 h-72 opacity-80">
              <Image
                src="/phone-bg.jpg" // Make sure to add this image to your public folder
                alt="Trading Interface"
                width={400}
                height={400}
                className="object-contain"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
} 