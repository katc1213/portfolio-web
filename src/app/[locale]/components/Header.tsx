'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <header className='sticky top-0 left-0 w-full bg-white shadow z-50'>
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang="en" href='/'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-14 w-14'>
            <LogoIcon />
          </div>
          <strong className='mx-2 select-none'>Template</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <a href=''>{t('Experience')}</a>
          <a href=''>{t('Projects')}</a>
          <a href=''>{t('Resume')}</a>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
      </div>
    </div>
    </header>
  )
}
