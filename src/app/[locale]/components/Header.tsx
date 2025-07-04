'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC, useState, useEffect } from 'react'
import GithubIcon from '../../icons/github'
//import LogoIcon from '../../icons/logo'
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
        scrolled ? 'bg-[rgb(105,117,101)] shadow' : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
        <Link lang='en' href='/'>
          <div className='flex flex-row items-center'>
              <div className='mb-2 h-10 w-10'>
                <img src='/logo.png' alt='Logo' className='h-full w-full object-contain' />
              </div>
            <strong className='ml-4 select-none'>Katherine Chang</strong>
          </div>
        </Link>
        <div className='flex flex-row items-center gap-3'>
          <nav className='mr-10 inline-flex gap-5'>
            <a href='#about'>{t('About')}</a>
            <a href='#experience'>{t('Experience')}</a>
            <a href='#projects'>{t('Projects')}</a>
            <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
              {t('Resume')}
            </a>
          </nav>
          <ThemeSwitch />
          <LangSwitcher />
        </div>
      </div>
    </header>
  )
}
