import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'th'],
  defaultLocale: 'en' // ให้ภาษาอังกฤษเป็นค่าเริ่มต้นสำหรับฝรั่ง
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);