import '@/styles/globals.scss'
import { ConfigProvider } from '@/contexts/config'
import { ThemeProvider } from '@/contexts/theme'
import { readConfig } from '@/lib/server/config'

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider value={readConfig()}>
      <ThemeProvider>
        {/* TODO: Dynamic lang */}
        <html lang="en" className="color-scheme-unset">
          <body>
            {children}
          </body>
        </html>
      </ThemeProvider>
    </ConfigProvider>
  )
}
// export const runtime = 'edge' // 'nodejs' (default) | 'edge'
