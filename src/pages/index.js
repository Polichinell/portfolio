

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Skillhex from '@/components/Skillhex';

const Home = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setRotation(rotation + 45);
  };
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Polichinell, web artist♪</title>
        <meta name="description" content="Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.bigXagon} style={{ transform: `rotate(${rotation}deg)` }} onClick={toggleMenu}>
        <div className={styles.noContent}></div>
        </div>
     
        <div className={menuVisible ? styles.visibleMenu : styles.hiddenMenu} style={{display: 'flex',
    flexDirection: 'row', color: 'whitesmoke', fontWeight: 'bold'}}>
          <div className={styles.menuItems}>
            <div className='mx-auto my-auto'>About</div>
          </div>
          <div className={styles.menuItems}>
          <div className='mx-auto my-auto'>Project</div>
          </div>
          <div className={styles.menuItems}>
          <div className='mx-auto my-auto'>Contact</div>
          </div>
        </div>
        
      </nav>

      {/* Hero Section */}

      <div className="text-center mt-[7rem]">
      <h1 className="self-center text-6xl text-amber-700">Polichinell</h1>

      <h2 className="text-xl italic text-amber-500">front-end web developper</h2>


      <div className="bg-white bg-opacity-70 rounded-3xl w-7/12 mx-auto mt-5" style={{height: '200px'}}>

      </div>
    </div>

    
      <section className={styles.introduction} style={{marginTop: '2rem', textAlign: 'center'}}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, urna nec tempor tristique, lectus odio gravida dui, et
          varius lorem elit vel justo.
        </p>
      </section>


      <section className={styles.skills}>
        <h2 className='text-5xl text-amber-700 my-[2rem]'>Skills</h2>
      
      <Skillhex />
     
       { /* <div className={styles.skillList}>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Next.js</div>
          <div>Bootstrap</div>
          <div>Tailwind CSS</div>
          <div>Material-UI</div>
          <div>Photoshop</div>
  </div> */}

      </section>

   
      <section className={styles.projects}>
        <h2>Projects</h2>
      
        <div className={styles.project}>Project 1</div>
        <div className={styles.project}>Project 2</div>
        <div className={styles.project}>Project 3</div>
      </section>


      <section className={styles.contact}>
        <h2>Contact</h2>
        <form className='form'>
          <label htmlFor="firstName" className='label'>First Name</label>
          <input type="text" id="firstName" name="firstName" /> <br />

          <label htmlFor="email" className='label'>Email</label>
          <input type="email" id="email" name="email" /> <br />

          <label htmlFor="subject" className='label'>Subject</label>
          <input type="text" id="subject" name="subject" /> <br />

          <label htmlFor="message" className='label'>Message</label>
          <textarea id="message" name="message"></textarea> <br />

          <button type="submit" className='btn'>Submit</button>
        </form>
      </section>

     
      <footer className='bg-amber-700 text-center text-white mt-[40px] py-[20px]'>
        <p>&copy; 2023 Fooooooooooooooooooooooter</p>
      </footer>
    </div>
  );
};

export default Home;
