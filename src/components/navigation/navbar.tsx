"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<nav className="bg-dark-900/95 backdrop-blur-sm fixed w-full z-50 px-4 py-3">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-2">
					<span className="text-2xl font-bold text-white">DustFi</span>
				</Link>

				{/* Search Bar */}
				<div className="flex-1 max-w-xl mx-4">
					<div className="relative">
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search tokens..."
							className="w-full bg-dark-800/50 text-white rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
						/>
						<AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
					</div>
				</div>

				{/* Navigation Items */}
				<div className="flex items-center space-x-6">
					<button
						onClick={() => router.push("/explore")}
						className="text-gray-300 hover:text-white transition-colors"
					>
						Explore
					</button>
					
					<button
						onClick={() => router.push("/trade")}
						className="text-gray-300 hover:text-white transition-colors"
					>
						Trade
					</button>

					<button
						onClick={() => router.push("/profile")}
						className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-dark-800 transition-colors"
					>
						<CgProfile className="w-6 h-6" />
					</button>

					<button className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-dark-800 transition-colors">
						<MdOutlineAccountBalanceWallet className="w-6 h-6" />
					</button>

					<ConnectButton />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
