import Navbar1 from './sections/navbar/Navbar1.jsx';
import SIntroduction from './sections/sIntroduction/SIntroduction.jsx';
import Objective from './sections/objective/Objective.jsx';

function App() {
  return (
    <>
      <Navbar1 theme='sTheme' />
      <SIntroduction theme='bTheme'  />
      <Objective theme='sTheme' myId='idObjective' />

    </>
  )
}

export default App
