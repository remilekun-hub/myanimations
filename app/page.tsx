"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/src/lib/cn";

type Card = {
	id: string;
	content: JSX.Element | React.ReactNode | string;
	className: string;
	thumbnail: string;
};

export default function Home() {
	const [selected, setSelected] = useState<Card | null>(null);
	const [lastSelected, setLastSelected] = useState<Card | null>(null);

	const handleClick = (card: Card) => {
		setLastSelected(selected);
		setSelected(card);
	};

	const handleOutsideClick = () => {
		setLastSelected(selected);
		setSelected(null);
	};

	const cards: Card[] = [
		{
			id: "1",
			thumbnail:
				"https://images.pexels.com/photos/568236/pexels-photo-568236.jpeg",
			className: "col-span-1 md:col-span-2",
			content: (
				<div>
					<h3>adicing elit</h3>
					<p>minus molestiae aut?</p>
				</div>
			),
		},
		{
			id: "2",
			thumbnail:
				"https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			className: "col-span-1",
			content: (
				<div>
					<h3>Lorem, ipsum.</h3>
					<p>jfjf kijrwr</p>
				</div>
			),
		},
		{
			id: "3",
			thumbnail:
				"https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			className: "col-span-1",
			content: (
				<div>
					<h3>Lorem, ipsum.</h3>
					<p>jfjf kijrwr</p>
				</div>
			),
		},

		{
			id: "4",
			thumbnail:
				"https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=600",
			className: "col-span-1 md:col-span-2",
			content: (
				<div>
					<h3>Lorem, ipsum.</h3>
					<p>jfjf kijrwr</p>
				</div>
			),
		},
	];

	return (
		<div className="min-h-screen relative">
			<div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-5 w-full min-h-screen md:h-[800px] p-6 py-14">
				{cards.map((card) => (
					<div
						key={card.id}
						className={twMerge(card.className, "cursor-pointer")}
					>
						<motion.div
							className={twMerge(
								card.className,
								"relative overflow-hidden w-full h-full rounded-xl",
								lastSelected?.id === card.id
									? "z-40 bg-white rounded-xl h-full w-full"
									: "bg-white rounded-xl h-full w-full"
							)}
							onClick={() => handleClick(card)}
							layoutId={card.id}
							transition={{
								layout: { duration: 0.4, type: "tween" },
							}}
						>
							<BlurImage card={card} />
						</motion.div>

						<AnimatePresence>
							{selected?.id === card.id && (
								<motion.div
									layoutId={selected.id}
									className="rounded-lg cursor-pointer absolute inset-0 h-1/2 w-[97vw] md:w-1/2 m-auto z-[100] overflow-hidden"
								>
									<Image
										src={selected.thumbnail}
										alt="thumbnail"
										width={500}
										height={500}
										className={twMerge(
											"object-cover object-center absolute inset-0 h-full w-full transition duration-200"
										)}
									/>
									<motion.button
										className="text-black font-[600] absolute z-[5] top-4 right-4 w-10 h-10 rounded-full flex justify-center items-center bg-white"
										onClick={() => handleOutsideClick()}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6 18 18 6M6 6l12 12"
											/>
										</svg>
									</motion.button>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
				<motion.div
					className={twMerge(
						"absolute h-full w-full inset-0 bg-black opacity-0 z-10",
						selected?.id ? "pointer-events-auto" : "pointer-events-none"
					)}
					animate={{ opacity: selected?.id ? 0.35 : 0 }}
				/>
			</div>
		</div>
	);
}

const BlurImage = ({ card }: { card: Card }) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<Image
			src={card.thumbnail}
			alt="thumbnail"
			width={500}
			height={500}
			onLoad={() => setLoaded(true)}
			className={twMerge(
				"grayscale-[90%] object-cover object-center absolute inset-0 h-full w-full transition duration-200",
				loaded ? "blur-none" : "blur-sm"
			)}
		/>
	);
};
