import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ProfileCompletionCard = ({ progress }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
                <CardDescription>Complete your profile to unlock all features</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="relative flex items-center justify-center">
                    <div className="relative h-48 w-48">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-bold">{progress}%</span>
                        </div>
                        <svg className="h-full w-full" viewBox="0 0 100 100">
                            <circle
                                className="stroke-muted"
                                cx="50"
                                cy="50"
                                r="45"
                                pathLength="100"
                                strokeWidth="10"
                                fill="none"
                            />
                            <circle
                                className="stroke-primary"
                                cx="50"
                                cy="50"
                                r="45"
                                pathLength="100"
                                strokeWidth="10"
                                fill="none"
                                strokeDasharray={100}
                                strokeDashoffset={100 - progress}
                                transform="rotate(-90 50 50)"
                            />
                        </svg>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="w-full justify-between">
                            Profile Information
                            <span className="text-primary">✓</span>
                        </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="w-full justify-between">
                            Educational Qualification
                            <span className="text-primary">✓</span>
                        </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="w-full justify-between">
                            Professional Information
                            <span className="text-muted-foreground">Pending</span>
                        </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="w-full justify-between">
                            Profile Settings
                            <span className="text-primary">✓</span>
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProfileCompletionCard