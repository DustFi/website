"use client"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { TradingInterface } from "../TradingInterface"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary-500/30 rounded-full filter blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-glow" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-full px-4 py-1.5 text-sm inline-flex items-center mb-6"
            >
              <span className="text-primary-400">Trading Program</span>
              <span className="ml-2 text-gray-300">Learn how it works →</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              First DEX on{" "}
              <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">
                TON
              </span>{" "}
              with Advanced Trading
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 mb-8"
            >
              Trade with confidence on TON's most advanced DEX. Access deep liquidity, 
              limit orders, DCA strategies, and create custom vaults.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <Button size="lg">Launch App</Button>
              <Button variant="outline" size="lg">Join Discord</Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Trading Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="animate-float">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <TradingInterface />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 