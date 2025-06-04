'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC, useState, useEffect } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[rgb(82, 146, 82)] shadow' : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
        <Link lang='en' href='/'>
          <div className='flex flex-row items-center'>
            <div className='mb-2 h-14 w-14'>
              <LogoIcon />
            </div>
            <strong className='mx-2 select-none'>Katherine Chang</strong>
          </div>
        </Link>
        <div className='flex flex-row items-center gap-3'>
          <nav className='mr-10 inline-flex gap-5'>
            <Link lang={locale} href={`/about`}>
              {t('About')}
            </Link>
            <a href=''>{t('Experience')}</a>
            <a href=''>{t('Projects')}</a>
            <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
            {t('Resume')}</a>

          </nav>
          <ThemeSwitch />
          <LangSwitcher />
        </div>
      </div>
    </header>
  )
}

