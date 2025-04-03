import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  demoUrl?: string
  imageSrc: string
}

export default function ProjectCard({ title, description, tags, githubUrl, demoUrl, imageSrc }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href={githubUrl}
          target="_blank"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <Github className="mr-1 h-4 w-4" />
          Code
        </Link>
        {demoUrl && (
          <Link
            href={demoUrl}
            target="_blank"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            Demo
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}

