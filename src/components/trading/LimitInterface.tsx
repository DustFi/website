"use client"
import { motion } from "framer-motion"

export const LimitInterface = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="space-y-4">
                {/* Token Input */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-4"
                >
                    <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-400">You pay</span>
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

                {/* Price Input */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-4"
                >
                    <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-400">Limit Price</span>
                        <span className="text-sm text-orange-400">Market: 1.234</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="bg-transparent text-2xl font-semibold flex-1 outline-none"
                            placeholder="0.0"
                        />
                        <span className="text-gray-400">DUST/TON</span>
                    </div>
                </motion.div>

                {/* Token Output */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 rounded-xl p-4"
                >
                    <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-400">You receive</span>
                        <span className="text-sm text-gray-400">Balance: 0.0</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="bg-transparent text-2xl font-semibold flex-1 outline-none"
                            placeholder="0.0"
                            readOnly
                        />
                        <button className="flex items-center space-x-2 bg-white/10 rounded-xl px-3 py-2">
                            <span>DUST</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </motion.div>

                {/* Place Order Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 rounded-xl"
                >
                    Place Limit Order
                </motion.button>
            </div>
        </div>
    )
} 