import { useState } from 'react'
import './App.css'
import styles from './App.module.css'
// import RotatingCube from './components/RotatingCube'
// import ParticleBackground from './components/ParticleBackground'
import SphereBackground from './components/SphereBackground'

const multiClass = (...classNames: string[]) => {
  return classNames
    .filter((className: string) => className !== undefined && className !== null && className !== '')
    .join(' ');
};

const Tabs = {
  Home: 'Home',
  AboutMe: 'About me',
  Projects: 'Projects'
}
const Header = ({ currentTab, setCurrentTab }: {currentTab: string, setCurrentTab: (item:string)=>void}) =>{
  return (
    <div className={styles.header}>
      <div className={styles.headerFlex}>
        <div className={styles.tabBox} >
          <div className={styles.headerButton} onClick={()=>setCurrentTab(Tabs.AboutMe)}>{Tabs.AboutMe}</div>
          <div className={`${styles.headerSlider} ${currentTab === Tabs.AboutMe ? styles.showSlider : ''}`}/>
        </div>
        <div className={styles.tabBox} >
          <div className={styles.headerButton} onClick={()=>setCurrentTab(Tabs.Home)}>{Tabs.Home}</div>
          <div className={`${styles.headerSlider} ${currentTab === Tabs.Home ? styles.showSlider : ''}`}/>
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
      {currentTab === Tabs.AboutMe && <AboutMeBody />}
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
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>I like building things</div>
      </div>
    </div>
  )
}

const AboutMeBody = () => {
  return (
    <div className={styles.homeBody}>
      <div className={styles.nameBody}>
        <div className={multiClass(styles.largeHeader, styles.largeBottomSpacer)}>So who am I?</div>
        <div className={multiClass(styles.mediumHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Education</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer, styles.leftSpacer)}>Bachelor Science in Computer Science (2020 - 2022)</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.leftSpacer)}>Bachelor Science Honours in Computer Science (2023)</div>

        <div className={multiClass(styles.mediumHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Work Experience</div>
        <div className={multiClass(styles.smallHeader, styles.smallBottomSpacer, styles.largeTopSpacer, styles.leftSpacer)}>Software Engineer, Syft Analytics (Xero) (Jan 2024 - current)</div>
        <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>Fullstack. Developing responsive frontends and efficient backends, for users to review to analytical data.</div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className={styles.homeBody}>
      <div className={styles.nameBody}>
        <div className={multiClass(styles.largeHeader, styles.largeBottomSpacer)}>My Projects</div>
         <div className={multiClass(styles.mediumHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Work in progress</div>
      </div>
    </div>
  )
}

export default App
