"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, FileText, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortfolioContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/yourprofile",
      label: "View GitHub Profile",
    },
    {
      name: "Kaggle",
      icon: Database,
      href: "https://kaggle.com/yourprofile",
      label: "View Kaggle Profile",
    },
    {
      name: "Resume",
      icon: FileText,
      href: "/resume.pdf",
      label: "Download Resume",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Send Email",
    },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="max-w-4xl w-full px-8 pointer-events-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-balance text-foreground">
              Your Name
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light tracking-wide">
              Data Analyst & Insights Specialist
            </p>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-8" />

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming complex data into actionable insights through advanced analytics and visualization.
              Specializing in statistical analysis, predictive modeling, and data-driven decision making.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={link.name}
                variant="outline"
                size="lg"
                asChild
                className={`group relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-foreground/30 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span className="font-medium">{link.name}</span>
                  <div className="absolute inset-0 bg-foreground/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </Button>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-border" />
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-foreground/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-foreground/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-foreground/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-foreground/20" />
    </div>
  )
}
