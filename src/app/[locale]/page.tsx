import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center min-h-screen py-20'>
        {/* Image above the welcome text */}
    <img
      src='/lkdn_pfp.jpg' 
      alt='Katherine headshot'       
      className='mb-8 w-70 h-70 rounded-full object-cover'
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
        I’m a passionate developer who loves building interactive applications and designing elegant user experiences.
        With a background in [your background], I focus on crafting responsive and accessible interfaces that perform well
        and look great. Always learning and always curious.
        </p>
      </div>
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
