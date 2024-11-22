"use client"
import { motion } from "framer-motion"

export const DCAInterface = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="space-y-4">
                {/* Token Input */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-4"
                >
                    <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-400">Total Investment</span>
                        <span className="text-sm text-gray-400">Balance: 0.0</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="bg-transparent text-2xl font-semibold flex-1 outline-none"
                            placeholder="0.0"
                        />
                        <button className="flex items-center space-x-2 bg-white/10 rounded-xl px-3 py-2">
                            <span>TON</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </motion.div>

                {/* Frequency Settings */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-4"
                >
                    <div className="flex justify-between mb-4">
                        <span className="text-sm text-gray-400">Purchase Frequency</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {['Daily', 'Weekly', 'Monthly'].map((freq) => (
                            <button
                                key={freq}
                                className="bg-white/10 hover:bg-white/20 rounded-lg py-2 text-sm"
                            >
                                {freq}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Token Output */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-4"
                >
                    <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-400">Buy Token</span>
                    </div>
                    <div className="flex items-center">
                        <button className="flex items-center space-x-2 bg-white/10 rounded-xl px-3 py-2">
                            <span>DUST</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </motion.div>

                {/* Duration */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-4"
                >
                    <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-400">Duration</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="12"
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-400">
                        <span>1 Month</span>
                        <span>12 Months</span>
                    </div>
                </motion.div>

                {/* Start DCA Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 rounded-xl"
                >
                    Start DCA Strategy
                </motion.button>
            </div>
        </div>
    )
} 