import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StandupTrack – Track Team Productivity from Slack Standups',
  description: 'Parse daily standup messages, extract time estimates with AI, and get analytics comparing planned vs actual work completion.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d3ed663a-c0c9-481d-adf5-ce9003b98f41"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
