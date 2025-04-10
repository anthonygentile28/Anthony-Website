import { Github, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <div className="inline-block px-2 py-1 rounded-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-md">
              Anthony Gentile
            </div>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
              <img src="/placeholder.svg?height=96&width=96" alt="Anthony Gentile" className="object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Anthony Gentile!</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
              High school student passionate about Next.js and Python development
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/anthonygentile28"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-16">
          <div className="container space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
            <div className="max-w-3xl mx-auto text-lg">
              <p className="mb-4">
                I'm a high school student with a passion for web development and programming. I specialize in building
                applications with Next.js and Python, constantly learning and improving my skills.
              </p>
              <p>
                When I'm not coding, you can find me participating in hackathons, contributing to open-source projects,
                and exploring new technologies. I'm always looking for new challenges and opportunities to grow as a
                developer.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 container">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <SkillBadge name="Next.js" level="Advanced" />
            <SkillBadge name="React" level="Advanced" />
            <SkillBadge name="Python" level="Advanced" />
            <SkillBadge name="JavaScript" level="Intermediate" />
            <SkillBadge name="TypeScript" level="Intermediate" />
            <SkillBadge name="Tailwind CSS" level="Intermediate" />
            <SkillBadge name="Git" level="Intermediate" />
            <SkillBadge name="Node.js" level="Beginner" />
            <SkillBadge name="SQL" level="Beginner" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-muted/50 py-16">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Personal Portfolio"
                description="A responsive personal portfolio website built with Next.js and Tailwind CSS."
                tags={["Next.js", "React", "Tailwind CSS"]}
                githubUrl="https://github.com/anthonygentile28/portfolio"
                demoUrl="#"
                imageSrc="/placeholder.svg?height=200&width=400"
              />
              <ProjectCard
                title="Python Data Analyzer"
                description="A data analysis tool built with Python, Pandas, and Matplotlib."
                tags={["Python", "Pandas", "Matplotlib"]}
                githubUrl="https://github.com/anthonygentile28/data-analyzer"
                demoUrl="#"
                imageSrc="/placeholder.svg?height=200&width=400"
              />
              <ProjectCard
                title="Task Manager"
                description="A full-stack task management application with authentication and database integration."
                tags={["Next.js", "React", "Prisma", "PostgreSQL"]}
                githubUrl="https://github.com/anthonygentile28/task-manager"
                demoUrl="#"
                imageSrc="/placeholder.svg?height=200&width=400"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 container">
          <div className="max-w-md mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <Github className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <Link
                    href="https://github.com/anthonygentile28"
                    className="text-sm text-muted-foreground hover:text-primary"
                    target="_blank"
                  >
                    github.com/anthonygentile28
                  </Link>
                </div>
              </div>
              <div className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <Mail className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <Link
                    href="mailto:anthony.gentile@example.com"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    anthony.gentile@example.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <Linkedin className="h-6 w-6 mr-4" />
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary" target="_blank">
                    linkedin.com/in/anthonygentile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Anthony Gentile. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/anthonygentile28"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="mailto:anthony.gentile@example.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

