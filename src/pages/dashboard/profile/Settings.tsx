import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { NavigationTracker } from '../_components/NavigationTracker'
import { useLocation } from 'react-router'

const Settings = () => {
    const location = useLocation()
    return (
        <div className='space-y-4'>
            <NavigationTracker pathname={location} />
            <div className='max-w-5xl w-full space-y-6'>
                <Card>
                    <CardHeader>
                        <CardTitle>Preferences</CardTitle>
                        <CardDescription>Customize your account preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label>Email Notifications</Label>
                                    <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
                                </div>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label>Dark Mode</Label>
                                    <p className="text-sm text-muted-foreground">Toggle dark mode theme</p>
                                </div>
                                <Switch />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Language</Label>
                            <Select defaultValue="en">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="es">Spanish</SelectItem>
                                    <SelectItem value="fr">French</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Security Settings</CardTitle>
                        <CardDescription>Manage your account security preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label>Two-Factor Authentication</Label>
                                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                                </div>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label>Login Notifications</Label>
                                    <p className="text-sm text-muted-foreground">Get notified of new login attempts</p>
                                </div>
                                <Switch />
                            </div>
                        </div>
                        <Button variant="outline">Change Password</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Settings