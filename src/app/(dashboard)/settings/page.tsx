"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { PageTransition } from "@/components/page-transition";
import { PageContainer } from "@/components/page-container";
import { SettingsCard } from "@/components/settings-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useThemeStore } from "@/store";
import { currentUser } from "@/data/mock-data";

export default function SettingsPage() {
  const { theme, setTheme } = useThemeStore();

  return (
    <>
      <DashboardHeader title="Settings" />
      <PageTransition>
        <PageContainer className="space-y-6">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <SettingsCard title="Profile Information" description="Update your personal details">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" defaultValue={currentUser.name.split(" ")[0]} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" defaultValue={currentUser.name.split(" ")[1]} />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={currentUser.email} />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue={currentUser.company} />
                  </div>
                </div>
                <Button className="mt-4" size="sm">Save changes</Button>
              </SettingsCard>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <SettingsCard title="Password" description="Change your account password">
                <div className="max-w-md space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                <Button className="mt-4" size="sm">Update password</Button>
              </SettingsCard>

              <SettingsCard title="Two-Factor Authentication" description="Add an extra layer of security">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Authenticator app</p>
                    <p className="text-xs text-muted-foreground">Use an authenticator app to generate codes</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
              </SettingsCard>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <SettingsCard title="Current Plan" description="Manage your subscription">
                <div className="flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <div>
                    <p className="text-sm font-semibold">Enterprise Plan</p>
                    <p className="text-xs text-muted-foreground">$299/month · Renews Jan 15, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">Change plan</Button>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Payment method</p>
                    <p className="text-xs text-muted-foreground">Visa ending in 8210</p>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </SettingsCard>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <SettingsCard title="Email Notifications" description="Choose what updates you receive">
                <div className="space-y-4">
                  {[
                    { label: "Revenue milestones", description: "Get notified when revenue targets are hit" },
                    { label: "New customer signups", description: "Alerts for new customer registrations" },
                    { label: "Weekly digest", description: "Summary of key metrics every Monday" },
                    { label: "Report ready", description: "Notification when scheduled reports are generated" },
                    { label: "Churn alerts", description: "Immediate alerts when customers cancel" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </div>
              </SettingsCard>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6">
              <SettingsCard title="Theme" description="Customize the look and feel">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Color theme</Label>
                    <Select value={theme} onValueChange={(v) => setTheme(v as "dark" | "light" | "system")}>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Compact mode</p>
                      <p className="text-xs text-muted-foreground">Reduce spacing in the dashboard</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Compact layout</p>
                      <p className="text-xs text-muted-foreground">Reduce spacing in tables and lists</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </SettingsCard>
            </TabsContent>
          </Tabs>
        </PageContainer>
      </PageTransition>
    </>
  );
}
