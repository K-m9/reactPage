import React from 'react';
// icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'
// type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// image
import Image from '../assets/photo.jpg';
// link
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className='section h-full min-h-[78vh] lg:min-h-[80vh] flex items-center mb-2' id='home'>
      <div className='container mx-auto flex-col justify-center'>
        <div className='flex flex-col mb-6 items-center gap-y-4'>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='flex justify-center lg:flex max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
          {/* text */}
          <div className='flex-1 text-center font-serif'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[80px] text-black'>
              Ophelia <span>Chen</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[30px] lg:text-[45px] font-secondary
              font-semibold uppercase leading-[1] text-blue-600'>
              <span className='text-black mr-4'>I am a</span>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[30px] lg:text-[50px] font-secondary
            font-semibold uppercase leading-[1] text-gradient'>
              <TypeAnimation
                sequence={[
                  'Data Analyst',
                  2000,
                  'Market Researcher',
                  2000,
                  'Quality engineer',
                  2000,
                ]}
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            {/* Introduction & skill */}
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='lg:text-left mb-6 text-left mx-auto lg:mx-0 text-black font-serif'>
              Introduction: I used to be a market researcher and a quality engineer in BYD,
              and I also worked for an online educational company as a data analyst.
              I am passionate about data analysis and committed to continuously expanding
              my knowledge and skills in this field. I will regularly update with my projects and learning outcomes as I progress in my data analytics journey.<br />
              skills: python, R, power BI, MySQL, Minitab
            </motion.p>
            {/* My projects & portfolio */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex justify-center mx-auto lg:mx-0 items-center gap-x-6'>
              <Link to='work'><button className='btn btn-sm'>My projects</button></Link>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
          </div>
          {/* socials */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex justify-center text-[20px] gap-x-12 mx-auto lg:mx-0'>
            <a href='https://www.linkedin.com/in/xintong-chen-83447a245'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/K-m9'>
              <FaGithub />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
};

export default Home;
