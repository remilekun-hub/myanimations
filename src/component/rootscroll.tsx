"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export function RootScroll({ children }: { children: React.ReactNode }) {
	// const lenis = useLenis(({ scroll }) => {
	// 	// called every scroll
	// });

	return (
		<ReactLenis root options={{ lerp: 0.03 }}>
			{children}
		</ReactLenis>
	);
}
