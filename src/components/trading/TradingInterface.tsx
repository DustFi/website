import { motion } from "framer-motion"

export const TradingInterface = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Swap</h3>
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>

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

                {/* Swap Icon */}
                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/10 p-2 rounded-full"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                    </motion.button>
                </div>

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

                {/* Swap Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-xl"
                >
                    Connect Wallet
                </motion.button>
            </div>
        </div>
    )
} 