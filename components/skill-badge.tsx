import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SkillBadgeProps {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced"
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  const getProgressValue = () => {
    switch (level) {
      case "Beginner":
        return 33
      case "Intermediate":
        return 66
      case "Advanced":
        return 100
      default:
        return 0
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">{name}</h3>
            <span className="text-xs text-muted-foreground">{level}</span>
          </div>
          <Progress value={getProgressValue()} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}

