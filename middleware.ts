import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/',
}

export function middleware(req: NextRequest) {
    
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl


  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === 'zxc' && pwd === '123') {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/secret'

  return NextResponse.rewrite(url)
}