'use client'

import { useTranslations } from 'next-intl'
import Button from './components/Button'
import { useState } from 'react'
import clsx from 'clsx'

export default function DashboardPage() {
  const t = useTranslations('')

  const experiences = [
    {
      title: 'Computer Engineer Co-op',
      company: 'Georgia Tech Research Institute',
      dates: 'May 2025 - Present',
      description:
        'Implement driver code for I2C communication between STM32 microcontroller, current sensor, and digital potentiometer to tune high power amplifier for antenna, resulting in 30 dB gain.',
    },
    {
      title: 'Undergraduate Researcher',
      company: 'Configurable Computing and Embedded Systems VIP Hardware Team',
      dates: 'Jan 2024 - Dec 2024',
      description: (
    <>
      Research methods for data encryption in voting machines and compatibility of AES with AXI interface on Xilinx Pynq Z2 development board.{' '}
      <a
        href="https://github.gatech.edu/ConfigurableComputing/vip/wiki/Hardware-Subteam-Fall-2024"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary underline hover:text-primary"
      >
        Click here for an overview of our hardware subteam
      </a>
    </>
    ),
    },
    {
      title: 'Student Assistant',
      company: 'Advanced Technology Development Center',
      dates: 'Aug 2024 - Present',
      description:
        'Organize company directories and assisted with office operations (media design, Salesforce updates)',
    },
  ]

  const projects = [
    {
      title: 'FPGA Orderbook',
      type: 'Personal Project',
      dates: 'May 2025 - Present',
      description: 'Developing a trading orderbook on Xilinx Pynq Z2 FPGA board that takes in and stores order entries.'
    },
    {
      title: 'Pace Controlled Volume App',
      type: 'CS 4605 - Mobile Ubiquitous Computing',
      dates: 'Jan 2025 - May 2025',
      description: 'Designed iOS application that adjusts user\'s music volume based on running pace, analyzing real-time biofeedback from Apple Airpod Pro earbud sensors.'
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {/* HERO */}
      <section className='flex flex-col items-center justify-center min-h-screen py-20'>
        <img
          src='/lkdn_pfp.jpg'
          alt='Katherine headshot'
          className='mb-12 w-60 h-60 rounded-full object-cover'
        />
        <h1 className='text-center text-5xl font-extrabold leading-tight'>
          {t("Hello, I'm Katherine!")}
        </h1>
        <div className='my-6 px-20 text-center text-1xl text-text-secondary'>
          {t('Welcome to my portfolio website. Scroll down to learn more about me.')}
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a href='https://www.linkedin.com/in/kchang312' target='_blank'>
            <Button rounded size='medium'>{t('Linkedin')}</Button>
          </a>
          <a href='https://github.com/katc1213' target='_blank'>
            <Button rounded size='medium' variant='secondary'>{t('Github')}</Button>
          </a>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id='about' className='w-full bg-background-secondary min-h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center w-full max-w-5xl mx-auto'>
          <div className='flex w-full px-8'>
            <div className='w-1/3 pr-8'>
              <h2 className='text-4xl font-bold text-text-primary'>About Me</h2>
            </div>
            <div className='w-2/3 text-lg text-text-secondary'>
              <p>
                I&apos;m a Computer Engineering undergraduate at Georgia Institute of Technology with a minor in FinTech.
               </p>
               <p>
                I have experience in working with databases as well as low-level programming with embedded systems. I am currently seeking a career
                in data analytics/engineering, hardware engineering, or technical product management. 
                <p>
                During my free time, I love to run, play badminton or golf, and visit cafes around the city. I enjoy watching Formula 1 and creating projects analyzing financial markets.
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id='experience' className='w-full min-h-screen flex items-center justify-center px-8 py-20'>
        <div className='flex w-full max-w-5xl'>
          <div className='w-1/3 pr-8'>
            <h2 className='text-4xl font-bold text-text-primary'>{t('Experience')}</h2>
          </div>
          <div className='w-2/3 space-y-6'>
            {experiences.map(({ title, company, dates, description }, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={idx} className='border rounded-lg' style={{ borderColor: 'rgb(54, 88, 56)' }}>
                  <button
                    onClick={() => toggle(idx)}
                    className='w-full flex justify-between items-center p-4 text-left focus:outline-none'
                    aria-expanded={isOpen}
                    aria-controls={`panel-${idx}`}
                    id={`accordion-${idx}`}
                  >
                    <div>
                      <h3 className='text-xl font-semibold'>{title}</h3>
                      <p className='text-[rgb(54,88,56)] font-medium'>{company}</p>
                      <p className='italic text-gray-500'>{dates}</p>
                    </div>
                    <span className='text-2xl select-none'>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`panel-${idx}`}
                    role='region'
                    aria-labelledby={`accordion-${idx}`}
                    className={clsx(
                      'overflow-hidden transition-all duration-500 ease-in-out px-4 text-gray-700',
                      isOpen ? 'max-h-40 pb-4' : 'max-h-0'
                    )}
                  >
                    {description}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className='w-full bg-background-secondary min-h-screen flex flex-col items-center justify-center px-8 py-20'>
        <div className='w-full max-w-5xl'>
          <div className='flex justify-center mb-12'>
            <h2 className='text-4xl font-extrabold text-center'>
              {t('Skills')}
            </h2>
          </div>
          <div className='grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-14 max-lg:justify-items-center'>
            <div className='text-center'>
              <h2 className='mb-3 text-xl font-semibold'>{t('Programming Languages')}</h2>
              <p className='text-text-secondary max-lg:max-w-[500px]'>
                {t('Java, Python, C, C++, SQL, Verilog, SystemVerilog, JavaScript, Swift')}
              </p>
            </div>
            <div className='text-center'>
              <h2 className='mb-3 text-xl font-semibold'>{t('Developer Tools')}</h2>
              <p className='text-text-secondary max-lg:max-w-[500px]'>
                {t('SQLite, STMCube, Arduino, Xilinx Vivado, Quartus')}
              </p>
            </div>
            <div className='text-center'>
              <h2 className='mb-3 text-xl font-semibold'>{t('Coursework')}</h2>
              <p className='text-text-secondary max-lg:max-w-[500px]'>
                {t('Object-Oriented Programming/Design, Database Systems, Data Structures and Algorithms, Computer Architecture, Embedded Systems Design, Digital Design Lab, Mobile Ubiquitous Computing')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id='projects' className='w-full min-h-screen flex items-center justify-center px-8 py-20'>
        <div className='flex w-full max-w-5xl'>
          <div className='w-1/3 pr-8'>
            <h2 className='text-4xl font-bold text-text-primary'>{t('Projects')}</h2>
          </div>
          <div className='w-2/3 space-y-6'>
            {projects.map(({ title, type, dates, description }, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={idx} className='border rounded-lg' style={{ borderColor: 'rgb(54, 88, 56)' }}>
                  <button
                    onClick={() => toggle(idx)}
                    className='w-full flex justify-between items-center p-4 text-left focus:outline-none'
                    aria-expanded={isOpen}
                    aria-controls={`panel-${idx}`}
                    id={`accordion-${idx}`}
                  >
                    <div>
                      <h3 className='text-xl font-semibold'>{title}</h3>
                      <p className='text-[rgb(54,88,56)] font-medium'>{type}</p>
                      <p className='italic text-gray-500'>{dates}</p>
                    </div>
                    <span className='text-2xl select-none'>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`panel-${idx}`}
                    role='region'
                    aria-labelledby={`accordion-${idx}`}
                    className={clsx(
                      'overflow-hidden transition-all duration-500 ease-in-out px-4 text-gray-700',
                      isOpen ? 'max-h-40 pb-4' : 'max-h-0'
                    )}
                  >
                    {description}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <section id='projects' className='max-w-5xl mx-auto py-20 px-8'>
        <h2 className='text-4xl font-extrabold text-center mb-12'>
          {t('Projects')}
        </h2>
      </section> */}
    </div>
  )
}
