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

        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer, styles.leftSpacer)}>
          <p>
            I am a Software Engineer working at a company that develops financial reporting software - a position I secured after standing out in their hackathon competition.
            I'm passionate about building solutions, whether it's developing new features at work or tackling personal projects (even things as simple as creating a VS Code extension to sort code lines, sparked by a friendly debate with a colleague).
            When I'm not coding, I explore the capabilities of new machine learning models, pushing my GPU to its limits to see what's possible.
          </p>
          <p>
            Outside of tech, I maintain an active lifestyle through regular running, which helps me stay energized and focused.
            I'm an enthusiastic home cook who enjoys experimenting with new recipes, and in my downtime, you'll often find me reading or participating in pub quizzes.
            At the office, I'm known for going all-out during costume days - any excuse to bring some extra fun to the workplace!
          </p>

        </div>

        <div className={multiClass(styles.mediumHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Education</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer, styles.leftSpacer)}>Bachelor Science in Computer Science (2020 - 2022).</div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.leftSpacer)}>Bachelor Science Honours in Computer Science (2023).</div>

        <div className={multiClass(styles.mediumHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Work Experience</div>
        <div className={multiClass(styles.smallHeader, styles.smallBottomSpacer, styles.largeTopSpacer, styles.leftSpacer)}>Academic tutor (2023)</div>
        <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>Tutoring third year ComSci students for my university, a position awarded for academic excellence in third year.</div>

        <div className={multiClass(styles.smallHeader, styles.smallBottomSpacer, styles.largeTopSpacer, styles.leftSpacer)}>Software Engineer, Syft Analytics (Xero) (Jan 2024 - current)</div>
        <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>Redesigned core financial reporting features, improving how users manage accounts, record custom transactions, and create financial group eliminations.</div>
        <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>Developed an analysis tool that helps users understand the impact that their consolidation eliminations can have on their financial reports.</div>
        <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>Developed tools that help users easily detect anomalies within their financial data, as well as optimized previous tools.</div>
        <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer)}>Created a modern settings interface with smooth animations, featuring comprehensive user management controls and customizable report styling options.</div>
      
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
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer, styles.linkFlex)}>
          <div className={styles.smallRightSpacer}>Email:</div>
          <a 
            href="mailto:Richievsims@Gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Richievsims@Gmail.com
          </a>
        </div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer, styles.linkFlex)}>
          <div className={styles.smallRightSpacer}>LinkedIn:</div>
          <a 
            href="https://www.linkedin.com/in/richard-sims-475785285/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer, styles.linkFlex)}>
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
         <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Mars Rover game</div>
         <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>3D browser game made with Three.js and Ammo.js for a university project with 2 other people.</div>
         <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>Mainly working on the rover's mechanics as well as some other smaller tasks.</div>
         <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer, styles.linkFlex)}>
            <div className={styles.smallRightSpacer}>Youtube demo:</div>
            <a 
              href="https://youtu.be/pDRAcM6aVtw"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://youtu.be/pDRAcM6aVtw
            </a>
          </div>
          <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer, styles.linkFlex)}>
            <div className={styles.smallRightSpacer}>Play now:</div>
            <a 
              href="https://rover.richardsims.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rover game
            </a>
          </div>

          <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Analytics Dashboard for cupcake company</div>
          <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>Site to keep track of sales data for a cupcake company.</div>
          <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>Can view sales and costs graphs, customer orders, overdue invoices and items.</div>
          <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>Created in a couple of days for the Syft hackathon 2023.</div>
          <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>Made own database server on an Oracle virtual machine for storing new data, over and above the hackathon data.</div>
          <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>Showed use of node for server communication, storing and fetching data from server, port forwarding and other network related tasks, ssl certificates for https communication.</div>
          <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer, styles.linkFlex)}>
            <div className={styles.smallRightSpacer}>View now:</div>
            <a 
              href="https://kwazy-cupcakes.richardsims.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cupcake dashboard
            </a>
          </div>
          <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer, styles.linkFlex)}>
            <div className={styles.smallRightSpacer}>GitHub:</div>
            <a 
              href="https://github.com/VentedSea/Kwazy-Cupcakes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>

         <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Code sorter</div>
         <div className={multiClass(styles.smallerHeader, styles.largeLeftSpacer)}>Simple VS code extension that sorts lines by either length or alphabetically.</div>
         <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer, styles.linkFlex)}>
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
         <div className={multiClass(styles.smallerHeader, styles.bottomSpacer, styles.largeLeftSpacer, styles.linkFlex)}>
            <div className={styles.smallRightSpacer}>Github:</div>
            <a 
              href="https://github.com/VentedSea/project-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
     
         <div className={multiClass(styles.smallHeader, styles.bottomSpacer, styles.largeTopSpacer)}>Others being added...</div>
      </div>
    </div>
  )
}

export default App
