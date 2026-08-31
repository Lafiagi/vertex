import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const courseCards = [
  {
    name: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
    colors: "bg-[#111827] text-white",
    mark: "N",
  },
  {
    name: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
    colors: "bg-[#f97316] text-white",
    mark: "🐳",
  },
  {
    name: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
    colors: "bg-[#3b82f6] text-white",
    mark: "TS",
  },
];

function LogoMark({ size = "md" }: { size?: "sm" | "md" }) {
  const wrapperSize = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const innerSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <span className={`${wrapperSize} relative inline-flex items-center justify-center`} aria-hidden="true">
      <span className="absolute inset-0 rotate-180 rounded-[2px] bg-[#ef5b2b] [clip-path:polygon(50%_100%,0_0,100%_0)]" />
      <span className={`${innerSize} absolute rotate-180 rounded-[2px] bg-white [clip-path:polygon(50%_100%,0_0,100%_0)]`} />
    </span>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 10a5 5 0 0 1 10 0v4.5l1.8 2H5.2l1.8-2V10Z" />
      <path d="M10 18a2 2 0 0 0 4 0" />
    </svg>
  );
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5 14.2 8l6.3 2.2-6.3 2.2L12 18l-2.2-5.6L3.5 10.2 9.8 8 12 1.5Z" />
    </svg>
  );
}

function MetricIcon({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center justify-center text-[0.7rem] text-[#5e6670]">{children}</span>;
}

export default async function Home() {
  const { userId } = await auth();

  return (
    <main className="min-h-screen bg-[#f4f0ec] px-4 py-4 text-[#1b1d20]">
      <div className="page-shell mx-auto max-w-[1200px] rounded-[8px] border border-[#e9ddd0] bg-[#f7f4f0] px-4 py-3 shadow-[0_0_0_1px_rgba(30,26,20,0.02)] sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-[#ede3da] pb-4 pt-1">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="text-[2.1rem] font-bold tracking-[-0.06em]">Vertex</div>
          </div>

          <nav className="hidden items-center gap-8 text-[0.95rem] font-medium text-[#1d1d1f] md:flex">
            <a href="#" className="text-[#1b1d20]">Courses</a>
            <a href="#" className="text-[#1b1d20]">My Learning</a>
          </nav>

          <div className="flex items-center gap-3">
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5d9d0] bg-white/40 text-[#1f1f1f] shadow-[0_1px_1px_rgba(15,23,42,0.03)]" aria-label="Notifications">
              <BellIcon />
            </button>

            {!userId ? (
              <div className="flex items-center gap-2">
                <SignInButton>
                  <button type="button" className="rounded-lg border border-[#e6d8cf] bg-white/70 px-3 py-2 text-sm font-medium text-[#1d2024] transition hover:bg-white">
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button type="button" className="rounded-lg bg-[#ee6d3d] px-3 py-2 text-sm font-semibold text-white shadow-[0_8px_14px_rgba(238,109,61,0.18)] transition hover:bg-[#e5622f]">
                    Sign up
                  </button>
                </SignUpButton>
              </div>
            ) : (
              <UserButton />
            )}
          </div>
        </header>

        <section className="px-2 pb-4 pt-8 sm:px-4 lg:pt-10">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="mx-auto inline-flex items-center rounded-full border border-[#f0b999] bg-[#fff6f0] px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#df6f3c]">
              Intelligent learning
            </div>

            <h1 className="mt-9 text-[3.1rem] font-medium leading-[0.95] tracking-[-0.065em] text-[#181a1d] sm:text-[4.8rem]">
              Search your learning
              <span className="mt-2 block font-[var(--font-playfair)] text-[#1a1b1d] italic">in plain English.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[640px] text-[1.1rem] leading-[1.6] text-[#666d74]">
              Vertex understands what you want to learn and finds the exact lessons across all your courses.
            </p>

            <button type="button" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#ee6d3d] px-7 py-4 text-[1.15rem] font-semibold text-white shadow-[0_10px_18px_rgba(238,109,61,0.22)] transition hover:bg-[#e9622f]">
              Explore Courses
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="mx-auto mt-10 max-w-[980px] rounded-[1.15rem] border border-[#e8ddd2] bg-[#f8f6f4] px-5 py-4 shadow-[0_0_0_1px_rgba(0,0,0,0.01)]">
            <div className="flex items-center gap-4">
              <div className="flex h-7 w-7 items-center justify-center text-[#2a2d31]">
                <SearchIcon />
              </div>
              <input
                aria-label="Search learning"
                placeholder="Ask anything about your learning..."
                className="flex-1 bg-transparent text-[1.1rem] text-[#272a2d] placeholder:text-[#7d7d7d] focus:outline-none"
              />
              <div className="flex h-7 min-w-[2.1rem] items-center justify-center rounded-md border border-[#e3d7cd] bg-[#f5eee9] px-2 text-[0.76rem] font-bold text-[#2d2d2d]">
                ⌘ K
              </div>
            </div>
          </div>
        </section>

        <section className="px-2 pb-3 pt-10 sm:px-4">
          <div className="mb-6 flex items-end justify-between gap-3">
            <h2 className="text-[2.1rem] font-semibold tracking-[-0.06em] text-[#1d2024]">All Courses</h2>
            <button type="button" className="inline-flex items-center gap-2 text-[1.12rem] font-medium text-[#ef7140]">
              View all courses
              <ArrowIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courseCards.map((course) => (
              <article key={course.name} className="rounded-[1.1rem] border border-[#e9ddd0] bg-[#f9f7f5] p-5 shadow-[0_1px_0_rgba(20,20,20,0.02)]">
                <div className={`mb-4 flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-[0.9rem] text-[2.3rem] font-semibold ${course.colors}`}>
                  {course.mark}
                </div>

                <h3 className="text-[1.8rem] font-medium tracking-[-0.05em] text-[#1c1e20]">{course.name}</h3>
                <p className="mt-3 max-w-[26ch] text-[1.05rem] leading-[1.55] text-[#686d72]">{course.description}</p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.93rem] text-[#5c656d]">
                  <span className="inline-flex items-center gap-2">
                    <MetricIcon>◫</MetricIcon>
                    {course.level}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MetricIcon>◔</MetricIcon>
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MetricIcon>▣</MetricIcon>
                    {course.modules}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-[1.03rem] font-medium text-[#1f2327]">
            <span className="flex h-5 w-5 items-center justify-center text-[#ef7a49]">
              <SparkleIcon />
            </span>
            <span>New courses and lessons added every week.</span>
          </div>
        </section>
      </div>
    </main>
  );
}
