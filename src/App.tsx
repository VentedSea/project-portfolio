import { useState } from 'react'
import './App.css'
import styles from './App.module.css'
import SphereBackground from './components/SphereBackground'

const multiClass = (...classNames: string[]) => {
  return classNames
    .filter((className: string) => className !== undefined && className !== null && className !== '')
    .join(' ');
};

const Tabs = {
  AboutMe: 'About me',
  Contact: 'Contact info',
  Home: 'Home',
  Projects: 'Projects',
}
const Header = ({ currentTab, setCurrentTab }: {currentTab: string, setCurrentTab: (item:string)=>void}) =>{
  return (
    <div className={styles.header}>
      <div className={styles.headerFlex}>
        <div className={styles.tabBox} >
          <div className={styles.headerButton} onClick={()=>setCurrentTab(Tabs.Home)}>{Tabs.Home}</div>
          <div className={`${styles.headerSlider} ${currentTab === Tabs.Home ? styles.showSlider : ''}`}/>
        </div>
        <div className={styles.tabBox} >
          <div className={styles.headerButton} onClick={()=>setCurrentTab(Tabs.AboutMe)}>{Tabs.AboutMe}</div>
          <div className={`${styles.headerSlider} ${currentTab === Tabs.AboutMe ? styles.showSlider : ''}`}/>
        </div>
        <div className={styles.tabBox} >
          <div className={styles.headerButton} onClick={()=>setCurrentTab(Tabs.Contact)}>{Tabs.Contact}</div>
          <div className={`${styles.headerSlider} ${currentTab === Tabs.Contact ? styles.showSlider : ''}`}/>
        </div>
        <div className={styles.tabBox} >
          <div className={styles.headerButton} onClick={()=>setCurrentTab(Tabs.Projects)}>{Tabs.Projects}</div>
          <div className={`${styles.headerSlider} ${currentTab === Tabs.Projects ? styles.showSlider : ''}`}/>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [currentTab, setCurrentTab] = useState(Tabs.Home);

  return (
    <>
    <SphereBackground />
    <Header currentTab={currentTab} setCurrentTab={setCurrentTab}/>
    <div className={styles.body}>
      {currentTab === Tabs.Home && <HomeBody />}
      {currentTab === Tabs.Contact && <ContactInfo />}
      {currentTab === Tabs.AboutMe && <AboutMeBody />}
      {currentTab === Tabs.Projects && <Projects />}
    </div>
    </>
  )
}

const HomeBody = () => {
  return (
    <div className={styles.homeBody}>
      <div className={styles.nameBody}>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer)}>Hi, I'm</div>
        <div className={multiClass(styles.largeHeader, styles.largeBottomSpacer)}>Richard Sims</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer)}>Software Engineer</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>I like building things.</div>
      </div>
    </div>
  )
}

const AboutMeBody = () => {
  return (
    <div className={styles.homeBody}>
      <div className={multiClass(styles.nameBody, styles.aboutMe)}>
        <div className={multiClass(styles.largeHeader, styles.largeBottomSpacer)}>So who am I?</div>
        <div className={multiClass(styles.mediumHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Education</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer, styles.leftSpacer)}>Bachelor Science in Computer Science (2020 - 2022)</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.leftSpacer)}>Bachelor Science Honours in Computer Science (2023)</div>

        <div className={multiClass(styles.mediumHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Work Experience</div>
        <div className={multiClass(styles.smallHeader, styles.smallBottomSpacer, styles.largeTopSpacer, styles.leftSpacer)}>Academic tutor (2023)</div>
        <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>Tutoring third year ComSci students for university, awarded for academic excellence in third year.</div>
        <div className={multiClass(styles.smallHeader, styles.smallBottomSpacer, styles.largeTopSpacer, styles.leftSpacer)}>Software Engineer, Syft Analytics (Xero) (Jan 2024 - current)</div>
        <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>Fullstack. Developing responsive front-ends and efficient backends, for users to review to analytical data.</div>
      
        <div className={multiClass(styles.mediumHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Languages and frameworks</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer, styles.leftSpacer)}>Typescript + Javascript</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.leftSpacer)}>React</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.leftSpacer)}>Python</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.leftSpacer)}>SQL</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.leftSpacer)}>Three.js</div>
      </div>
    </div>
  )
}

const ContactInfo = () => {
  return (
    <div className={styles.homeBody}>
      <div className={styles.nameBody}>
        <div className={multiClass(styles.largeHeader, styles.largeBottomSpacer)}>Contact Info</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>
          <div className={styles.smallRightSpacer}>Email:</div>
          <a 
            href="mailto:Richievsims@Gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Richievsims@Gmail.com
          </a>
        </div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>
          <div className={styles.smallRightSpacer}>LinkedIn:</div>
          <a 
            href="https://www.linkedin.com/in/richard-sims-475785285/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>
          <div className={styles.smallRightSpacer}>Github:</div>
          <a 
            href="https://github.com/VentedSea"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className={styles.homeBody}>
      <div className={styles.nameBody}>
        <div className={multiClass(styles.largeHeader, styles.largeBottomSpacer)}>My Projects</div>
         <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Mars Rover Game</div>
         <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>3D browser game made with Three.js and Ammo.js for a university project with 2 other people. Worked on rover mechanics.</div>
         <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>
            <div className={styles.smallRightSpacer}>Youtube demo:</div>
            <a 
              href="https://youtu.be/pDRAcM6aVtw"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://youtu.be/pDRAcM6aVtw
            </a>
          </div>
          <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>
            <div className={styles.smallRightSpacer}>Play now:</div>
            <a 
              href="https://rover.richardsims.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rover game
            </a>
          </div>

         <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Code Sorter</div>
         <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>Simple VS code extension that sorts lines by either length or alphabetically.</div>
         <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>
            <div className={styles.smallRightSpacer}>Github:</div>
            <a 
              href="https://github.com/VentedSea/line-sorter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>

         <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>This portfolio page</div>
         <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>React web app using Three.js for background spheres and movement.</div>
         <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>
            <div className={styles.smallRightSpacer}>Github:</div>
            <a 
              href="https://github.com/VentedSea/project-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
     
         <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Others in progress...</div>
      </div>
    </div>
  )
}

export default App
