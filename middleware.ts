import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')

  if (host === 'fahrnex.mvp.bd') {
    const url = request.nextUrl.clone()

    return NextResponse.redirect(
      `https://fahrnex.de${url.pathname}${url.search}`,
      301
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}