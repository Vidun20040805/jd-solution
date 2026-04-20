import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JD Solution | Expert Digital Agency for Educators & Businesses',
  description: 'Elevate your brand with JD Solution. We specialize in premium web design, social media management, and digital marketing tailored for educators and modern businesses in Sri Lanka.',
  keywords: ['JD Solution', 'Web Design Sri Lanka', 'Digital Marketing for Educators', 'JD Solution Agency', 'Best Web Design Agency Sri Lanka'],
  openGraph: {
    title: 'JD Solution | Expert Digital Agency for Educators & Businesses',
    description: 'Elevate your brand with JD Solution. We specialize in premium web design, social media management, and digital marketing tailored for educators and modern businesses in Sri Lanka.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
