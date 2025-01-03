import Navbar1 from './sections/navbar/Navbar1.jsx';
import SIntroduction from './sections/sIntroduction/SIntroduction.jsx';
import Objective from './sections/objective/Objective.jsx';
import Skills from './sections/skills/Skills.jsx';
import SProjects from './sections/sProjects/SProjects.jsx';
import SFooter from './sections/footer/SFooter.jsx';

function App() {
  return (
    <>
      <Navbar1 theme='sTheme' />
      <SIntroduction theme='bTheme'  />
      <Objective theme='sTheme' myId='idObjective' />
      <Skills theme="bTheme" myId='idSkills' />
      <SProjects theme="sTheme" myId='idProjects' />
      <SFooter theme='bTheme' />
    </>
  )
}

export default App
