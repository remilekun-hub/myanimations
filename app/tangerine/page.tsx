"use client";
import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import insurance from "../../src/assets/insurance_model_2d13568630.png";
import travel from "../../src/assets/travel_model_9d77c15e4c.png";
import pension from "../../src/assets/pensions_model_fbe294901d.png";
import health from "../../src/assets/health_model_98c7dd5e71.png";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

export default function Tangerine() {
	const scrollContainer = useRef<HTMLDivElement>(null);

	const { scrollYProgress, scrollY } = useScroll({
		target: scrollContainer,
		offset: ["start start", "end end"],
	});

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		console.log({ latest });
	});

	type ProductType = {
		id?: string;
		content?: React.ReactNode;
		background?: string;
		animate?: boolean;
		wrapper: React.JSX.ElementType;
	};

	const InsuranceWrapper = ({ p }: { p: ProductType }) => {
		const [show, setShow] = useState(true);
		useMotionValueEvent(scrollYProgress, "change", (latest) => {
			const val = latest * 100;
			if (val && val > 25) {
				setShow(false);
			}
			if (val === 0) {
				setShow(true);
			}
			if (val && val < 25) {
				setShow(true);
			}
		});
		return (
			<Wrapper
				p={p}
				className={twMerge(
					show
						? "opacity-100 translate-y-0 delay-[300ms] duration-300 ease-in"
						: "opacity-0 translate-y-[50px] duration-[300ms] ease-out"
				)}
			>
				<div
					className={`flex flex-col md:flex-row min-h-screen justify-center md:items-center md:justify-between px-6 lg:px-14 gap-x-10 mx-auto max-w-[1200px]`}
				>
					<div className="w-full flex flex-col gap-7">
						<p className="tracking-[5px] text-[12px] font-[400] text-gray-600">
							LIFE INSURANCE
						</p>
						<h1 className="w-full lg:max-w-[350px] text-[40px] font-[600]">
							Stay one-step ahead of life
						</h1>
						<p className="w-full lg:max-w-[480px] leading-[36px] text-[17px] ">
							Life happens. Plans kick the bucket. So our life insurance
							plans will always be there to take care of you and the
							people you cherish most.
						</p>
					</div>
					<div className="w-full">
						<Image src={insurance} alt="thumbnail" className="w-full" />
					</div>
				</div>
			</Wrapper>
		);
	};

	const TravelWrapper = ({ p }: { p: ProductType }) => {
		const [show, setShow] = useState(false);
		useMotionValueEvent(scrollYProgress, "change", (latest) => {
			const val = latest * 100;
			if (val > 25 && val < 50) {
				setShow(true);
			} else {
				setShow(false);
			}
		});

		return (
			<Wrapper
				p={p}
				className={twMerge(
					show
						? "opacity-100 translate-y-0 delay-[300ms] duration-300 ease-in"
						: "opacity-0 translate-y-[50px] duration-[300ms] ease-out"
				)}
			>
				<div
					className={`flex  flex-col md:flex-row min-h-screen justify-center md:items-center md:justify-between px-6 lg:px-14 gap-x-10 relative max-w-[1200px] mx-auto`}
				>
					<div className="w-full flex flex-col gap-7">
						<p className="tracking-[5px] text-[12px] font-[400] text-gray-600">
							GENERAL INSURANCE
						</p>
						<h1 className="w-full text-[40px] font-[600]">
							Cover all Angles
						</h1>
						<p className="w-full lg:max-w-[480px] leading-[36px] text-[17px] ">
							General Insurance helps you cover the big things and little
							things with a broad range of products and services built
							for your business and personal life.
						</p>
					</div>
					<div className="w-full">
						<Image src={travel} alt="thumbnail" className="w-full" />
					</div>
				</div>
			</Wrapper>
		);
	};

	const PensionWrapper = ({ p }: { p: ProductType }) => {
		const [show, setShow] = useState(false);
		useMotionValueEvent(scrollYProgress, "change", (latest) => {
			const val = latest * 100;
			if (val > 50 && val < 75) {
				setShow(true);
			} else {
				setShow(false);
			}
		});

		return (
			<Wrapper
				p={p}
				className={twMerge(
					show
						? "opacity-100 translate-y-0 delay-[300ms] duration-300 ease-in"
						: "opacity-0 translate-y-[50px] duration-[300ms] ease-out"
				)}
			>
				<div
					className={`flex  flex-col md:flex-row min-h-screen justify-center md:items-center md:justify-between px-6 lg:px-14 gap-x-10 relative max-w-[1200px] mx-auto`}
				>
					<div className="w-full flex flex-col gap-7">
						<p className="tracking-[5px] text-[12px] font-[400] text-gray-600">
							PENSIONS
						</p>
						<h1 className="w-full lg:max-w-[350px] text-[40px] font-[600]">
							Be free to enjoy life in retirement
						</h1>
						<p className="w-full lg:max-w-[480px] leading-[36px] text-[17px] ">
							A retirement savings account is a step in the right
							direction in securing your future. With this pensions
							account, you insure your savings and earn returns on your
							investment in preparation for life after employment.
						</p>
					</div>
					<div className="w-full">
						<Image src={pension} alt="thumbnail" className="w-full" />
					</div>
				</div>
			</Wrapper>
		);
	};
	const AccessWrapper = ({ p }: { p: ProductType }) => {
		const [show, setShow] = useState(false);
		useMotionValueEvent(scrollYProgress, "change", (latest) => {
			const val = latest * 100;
			if (val > 75) {
				setShow(true);
			} else {
				setShow(false);
			}
		});

		return (
			<Wrapper
				p={p}
				className={twMerge(
					show
						? "opacity-100 translate-y-0 delay-[300ms] duration-300 ease-in"
						: "opacity-0 translate-y-[50px] duration-[300ms] ease-out"
				)}
			>
				<div
					className={`flex  flex-col md:flex-row min-h-screen justify-center md:items-center md:justify-between px-6 lg:px-14 gap-x-10 relative max-w-[1200px] mx-auto`}
				>
					<div className="w-full flex flex-col gap-7">
						<p className="tracking-[5px] text-[12px] font-[400] text-gray-600">
							HEALTH INSURANCE
						</p>
						<h1 className="w-full lg:max-w-[380px] text-[45px] font-[600]">
							Access quality health care
						</h1>
						<p className="w-full lg:max-w-[480px] leading-[36px] text-[17px] ">
							Get connected to qualified healthcare practitioners and
							hospitals near you. Protect you and your loved ones’ health
							by getting a plan that offers quality medical services
							whenever you need to and even in an emergency.
						</p>
					</div>
					<div className="w-full">
						<Image src={health} alt="thumbnail" className="w-full" />
					</div>
				</div>
			</Wrapper>
		);
	};

	const products: ProductType[] = [
		{
			id: "1",
			background: `bg-gradient-to-t from-[#f7ffe9] to-[hsla(0,0%,100%,0)] from-[0%] to-[20%]  to-[50%] transition`,
			wrapper: InsuranceWrapper,
		},
		{
			id: "2",
			background: `bg-gradient-to-t from-[#e7e7e7] to-[hsla(0,0%,100%,0)]  from-[0%]  to-[20%] to-[50%] transition`,
			wrapper: TravelWrapper,
		},
		{
			id: "3",
			wrapper: PensionWrapper,
			background:
				"bg-gradient-to-t from-[#fff3e3] to-[hsla(0,0%,100%,0)] from-[0%] to-[20%] to-[50%] transition",
		},
		{
			id: "4",
			wrapper: AccessWrapper,
			background:
				"bg-gradient-to-t from-[#f7ffe9] to-[hsla(0,0%,100%,0)] from-[0%] to-[20%] to-[50%] transition",
		},
	];

	return (
		<div className="relative">
			<div
				className="min-h-[3000px] relative"
				ref={scrollContainer}
				id="wrapper"
			>
				<div className="sticky top-0 snap-y">
					{products.map((p) => (
						<p.wrapper key={p.id} p={p} />
					))}
				</div>

				<div className="fixed w-[2px] top-1/2 left-[calc(50vw-620px)] h-[650px] rounded-full -translate-y-1/2 flex flex-col gap-3 justify-evenly bg-gray-300">
					<div className="bg-white h-[11px] w-full rounded-full z-[3]"></div>
					<div className="bg-white h-[11px] w-full rounded-full z-[3]"></div>
					<div className="bg-white h-[11px] w-full rounded-full z-[3]"></div>
					<motion.span
						className="absolute bg-[#ff9100] w-full top-0 origin-top h-full"
						style={{ scaleY: scrollYProgress }}
					/>
				</div>
			</div>
		</div>
	);

	function Wrapper({
		children,
		p,
		className,
	}: {
		children: React.ReactNode;
		p: ProductType;
		className: string;
	}) {
		return (
			<motion.div
				className={twMerge(
					"min-h-screen top-0 w-full absolute transition",
					p.background,
					className
				)}
			>
				{children}
			</motion.div>
		);
	}
}
