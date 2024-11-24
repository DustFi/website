"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { FaTelegram, FaTwitter } from 'react-icons/fa';
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<nav className="bg-dark-900/95 fixed w-full z-50 px-4 py-3">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-2">
					<Image src="/dustfi.png" width={40} height={40} alt="DustFi Logo" />

					<span className="text-2xl font-bold text-black">DustFi</span>
				</Link>

				{/* Search Bar */}
				{/* <div className="flex-1 max-w-xl mx-4">
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
				</div> */}

				{/* Navigation Items */}
				<div className="flex items-center space-x-6">
					<button
						onClick={() => router.push("https://app.dustfi.xyz")}
						className="text-black hover:text-orange-600"
					>
						App
					</button>

					<button
						onClick={() => router.push("https://docs.dustfi.xyz")}
						className="text-black hover:text-orange-600"
					>
						Docs
					</button>

					{/* <button
						onClick={() => router.push("/profile")}
						className="text-black hover:text-orange-600 p-2 rounded-full hover:bg-dark-800 transition-colors"
					>
						<CgProfile className="w-6 h-6" />
					</button> */}

					{/* add icon for telegram & twitter */}
					<div className="flex items-center space-x-4 ml-4 border-l border-white/10 pl-4">
						<a
							href="https://t.me/dustfidex" // Replace with your Telegram link
							target="_blank"
							rel="noopener noreferrer"
							className="text-black hover:text-orange-400 transition-colors"
						>
							<FaTelegram className="w-5 h-5" />
						</a>
						<a
							href="https://twitter.com/dustfidex" // Replace with your Twitter link
							target="_blank"
							rel="noopener noreferrer"
							className="text-black hover:text-orange-400 transition-colors"
						>
							<FaTwitter className="w-5 h-5" />
						</a>
					</div>


				</div>
			</div>
		</nav>
	);
};

export default Navbar;
