import { Suspense } from 'react'
import Navbar from "@/components/navigation/navbar"
import { Hero } from "@/components/sections/Hero"
import Loading from './loading'
import { TradingSection } from "@/components/sections/TradingSection"

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-dark-900 to-dark-800">
			<Navbar />
			<Suspense fallback={<Loading />}>
				<Hero />
				<TradingSection />
			</Suspense>
		</main>
	)
}
