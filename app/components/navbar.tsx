import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center justify-between max-w-5xl mx-auto px-4 py-5">
            <Link className="font-bold text-3xl" href="/">
                <span className="text-primary">NOX</span>BLOG
            </Link>
            <ModeToggle />
        </nav>
    )
}
