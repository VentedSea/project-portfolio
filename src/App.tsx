import { useState } from 'react'
import './App.css'
import styles from './App.module.css'
// import RotatingCube from './components/RotatingCube'
// import ParticleBackground from './components/ParticleBackground'
import SphereBackground from './components/SphereBackground'

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
      <div className={styles.homeBody}>
        <div className={styles.nameBody}>
          <div className={styles.smallHeader}>My name is</div>
          <div className={styles.largeHeader}>Richard Sims</div>
          <div className={styles.smallHeader}>Software Engineer</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
