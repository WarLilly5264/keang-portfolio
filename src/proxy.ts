import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // ให้ระบบดักจับ URL ทั้งหมด ยกเว้นพวกไฟล์ระบบและรูปภาพ
  matcher: ['/', '/(th|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};