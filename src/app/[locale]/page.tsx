'use client'  // <-- add this line here

import { useTranslations } from 'next-intl'
import Button from './components/Button'
import { useState } from 'react'

export default function DashboardPage() {
  const t = useTranslations('')
  const experiences = [
    {
      title: 'Computer Engineer Co-op',
      company: 'Georgia Tech Researcg Institute',
      dates: 'May 2025 - Present',
      description:
        'Developed scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality products.',
    },
    {
      title: 'Undergraduate Researcher',
      company: 'Vertically Integrated Projects',
      dates: 'Jan 2024 - Dec 2024',
      description:
        'Implemented UI components and improved accessibility of the company website using React and Tailwind CSS.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <section className='flex flex-col items-center justify-center min-h-screen py-20'>
        {/* Image above the welcome text */}
    <img
      src='/lkdn_pfp.jpg' 
      alt='Katherine headshot'       
      className='mb-12 w-60 h-60 rounded-full object-cover'
    />
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('Hello, I\'m Katherine!')}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'Welcome to my portfolio website. Scroll down to learn more about me.'
          )}
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://www.linkedin.com/in/kchang312'
            target='_blank'
          >
            <Button rounded size='medium'>
              {t('Linkedin')}
            </Button>
          </a>
          <a
            href='https://github.com/katc1213'
            target='_blank'
          >
            <Button rounded size='medium' variant='secondary'>
              {t('Github')}
            </Button>
          </a>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center py-48'>
   <div className='flex w-full max-w-5xl px-8'>
      {/* Title on the left */}
      <div className='w-1/3 pr-8'>
       <h2 className='text-4xl font-bold text-text-primary'>About Me</h2>
      </div>
    
      {/* Description on the right */}
      <div className='w-2/3 text-lg text-text-secondary'>
        <p>
        I&apos;m a Computer Engineering undergraduate at Georgia Institute of Technology with a minor in FinTech. 
        I have experience in low-level programming with embedded systems and FPGAs, currently seeking to gain 
        insight into the intersection of hardware systems and financial markets.
        </p>
      </div>
    </div>
  </section>
  
  {/* Experience section */}
      <section className='max-w-5xl mx-auto py-20 px-8'>
        <h2 className='text-4xl font-extrabold text-center mb-12'>
          {t('Experience')}
        </h2>
        <div className='space-y-4'>
          {experiences.map(({ title, company, dates, description }, idx) => (
            <div
              key={idx}
              className='border rounded-lg'
              style={{ borderColor: 'rgb(54, 88, 56)' }}
            >
              <button
                onClick={() => toggle(idx)}
                className='w-full flex justify-between items-center p-4 text-left focus:outline-none'
                aria-expanded={openIndex === idx}
                aria-controls={`panel-${idx}`}
                id={`accordion-${idx}`}
              >
                <div>
                  <h3 className='text-xl font-semibold'>{title}</h3>
                  <p className='text-green-600 font-medium'>{company}</p>
                  <p className='italic text-gray-500'>{dates}</p>
                </div>
                <span className='text-2xl select-none'>
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>

              {openIndex === idx && (
                <div
                  id={`panel-${idx}`}
                  role='region'
                  aria-labelledby={`accordion-${idx}`}
                  className='px-4 pb-4 text-gray-700'
                >
                  {description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className='bg-background-secondary py-20 max-lg:py-24'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Programming Languages')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Verilog, SystemVerilog, VHDL, C, C++, Java, Python, JavaScript, Swift'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Developer Tools')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Xilinx Vivado, Quartus, '
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Coursework')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Computer Architecture, Embedded Systems Design, Digital Design Lab'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
