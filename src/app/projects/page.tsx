import BlurFade from "@/components/magicui/blur-fade";
import ProjectContent from "./projectcontent";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col gap-y-4 items-center justify-center">
              <div className="flex items-center w-full">
                <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                  <span className="text-background text-sm font-medium">
                    Projects
                  </span>
                </div>
                <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
              </div>

              <div className="flex flex-col gap-y-3 items-center justify-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  All Projects
                </h1>
                <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                  A curated list of things I&apos;ve built across web apps, UI
                  experiments, and open-source.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <ProjectContent />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
