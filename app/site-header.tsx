import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "./mobile-navigation";
import { navigation } from "./site-data";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Blackhorn Security home">
          <Image
            src="/homej.png"
            alt="Blackhorn Security logo"
            width={180}
            height={180}
            priority
            className="h-16 w-auto object-contain sm:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-blue-400 ${
                item.label === "Request a Quote" ? "text-blue-400" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:2392048938"
            className="text-sm font-medium text-slate-200 transition-colors hover:text-blue-400"
          >
            (239) 204-8938
          </a>
          <Link
            href="/#request-quote"
            className="inline-flex items-center justify-center rounded-full bg-[#1473E6] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(20,115,230,0.35)] transition hover:bg-[#2589FF]"
          >
            Request a Quote
          </Link>
        </div>

        <MobileNavigation items={navigation} />
      </div>
    </header>
  );
}
