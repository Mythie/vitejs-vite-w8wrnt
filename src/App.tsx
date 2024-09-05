import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EmbedDirectTemplate } from "@documenso/embed-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

export default function Dashboard() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [step, setStep] = useState<"details" | "signing" | "complete">(
    "details"
  );

  const onDocumentComplete = () => {
    setStep("complete");
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </a>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary aria-disabled:opacity-50"
                aria-disabled
              >
                <Home className="h-4 w-4" />
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary aria-disabled:opacity-50"
                aria-disabled
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary aria-disabled:opacity-50"
                aria-disabled
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary aria-disabled:opacity-50"
                aria-disabled
              >
                <Users className="h-4 w-4" />
                Customers
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary aria-disabled:opacity-50"
                aria-disabled
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </a>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <a
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                  aria-disabled
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  aria-disabled
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  aria-disabled
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  aria-disabled
                >
                  <Package className="h-5 w-5" />
                  Products
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  aria-disabled
                >
                  <Users className="h-5 w-5" />
                  Customers
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  aria-disabled
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </a>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center p-4 lg:p-6">
          <div>
            <AnimatePresence initial={false} presenceAffectsLayout mode="wait">
              {step === "details" && (
                <motion.form
                  key="details"
                  className="flex flex-col gap-y-2 flex-1"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  x-chunk="dashboard-02-chunk-1"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStep("signing");
                  }}
                >
                  <div className="flex flex-col items-start">
                    <h1 className="text-lg font-semibold md:text-2xl">
                      Onboarding
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground max-w-[55ch]">
                      Welcome to your new account, to get started we will need
                      you to sign our Product Agreement and Terms of Service.
                    </p>
                  </div>

                  <div className="max-w-md">
                    <Label>Full Name</Label>

                    <Input
                      type="text"
                      className="mt-1"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      autoComplete="off"
                      required
                    />

                    <p className="text-xs text-muted-foreground mt-1">
                      Your legal name, required so we can confirm your consent
                      to the agreement
                    </p>
                  </div>

                  <div className="max-w-md">
                    <Label>Email</Label>

                    <Input
                      type="email"
                      className="mt-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value.trim())}
                      autoComplete="off"
                      required
                    />

                    <p className="text-xs text-muted-foreground mt-1">
                      Your contact email, this is where we will send the
                      completed agreement
                    </p>
                  </div>

                  <div className="mt-4 max-w-md flex items-center justify-between flex-row-reverse">
                    <Button type="submit">Next Step</Button>
                  </div>
                </motion.form>
              )}

              {step === "signing" && (
                <motion.div
                  key="signing"
                  className="flex flex-col gap-y-2 flex-1"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  x-chunk="dashboard-02-chunk-1"
                >
                  <div className="flex flex-col items-start">
                    <h1 className="text-lg font-semibold md:text-2xl">
                      Onboarding: Signing
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground max-w-[55ch]">
                      Please sign the agreement and terms of service.
                    </p>
                  </div>

                  <EmbedDirectTemplate
                    host="https://stg-app.documenso.com"
                    token="nEmIk_rcyiA2xJiBqs2qu"
                    className="mt-4 min-h-[75dvh] w-[1000px] -m-6 overflow-hidden"
                    externalId="my-application"
                    name={fullName.trim()}
                    lockName={true}
                    email={email}
                    lockEmail={true}
                    onDocumentCompleted={onDocumentComplete}
                  />
                </motion.div>
              )}

              {step === "complete" && (
                <motion.div
                  key="complete"
                  className="flex flex-col gap-y-2 flex-1"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  x-chunk="dashboard-02-chunk-1"
                >
                  <h1 className="text-lg font-semibold">Thank you!</h1>

                  <p className="text-sm text-muted-foreground max-w-[55ch]">
                    Your agreement has been signed and a copy should be sent to
                    your email address shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
