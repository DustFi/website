"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { TradingInterface } from "@/components/trading/TradingInterface"
import { LimitInterface } from "@/components/trading/LimitInterface"
import { DCAInterface } from "@/components/trading/DCAInterface"

const tabs = [
    { id: 'swap', label: 'Swap' },
    { id: 'limit', label: 'Limit' },
    { id: 'dca', label: 'DCA' },
]

export const TradingSection = () => {
    const [activeTab, setActiveTab] = useState('swap')

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Advanced Trading <br />
                            <span className="text-orange-500">Made Simple</span>
                        </h2>

                        <p className="text-lg text-gray-500 mb-8">
                            Experience seamless trading with our intuitive interface. Swap tokens,
                            set limit orders, or automate your strategy with DCA.
                        </p>

                        {/* <div className="grid grid-cols-3 gap-6 mb-8 text-500">
                            <div className="rounded-xl p-6">
                                <div className="text-2xl font-bold text-orange-400 mb-2">$10M+</div>
                                <div className=" text-gray-900">Daily Volume</div>
                            </div>
                            <div className="   rounded-xl p-6">
                                <div className="text-2xl font-bold text-orange-400 mb-2">50K+</div>
                                <div className=" text-gray-900">Active Traders</div>
                            </div>
                            <div className="   rounded-xl p-6">
                                <div className="text-2xl font-bold text-orange-400 mb-2">24/7</div>
                                <div className=" text-gray-900">Support</div>
                            </div>
                        </div> */}
                    </motion.div>

                    {/* Right Content - Trading Interface */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="   backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                            {/* Tabs */}
                            <div className="flex space-x-1 mb-6    p-1 rounded-lg">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors
                      ${activeTab === tab.id
                                                ? 'bg-orange-600 text-white'
                                                : ' text-gray-900 hover:text-white hover:  '
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Trading Interfaces */}
                            {activeTab === 'swap' && <TradingInterface />}
                            {activeTab === 'limit' && <LimitInterface />}
                            {activeTab === 'dca' && <DCAInterface />}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 