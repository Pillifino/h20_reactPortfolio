import About from './components/About';
import Header from './components/Nav'

import me from './images/me.jpg'


// Pass users array to the List component as a prop
export default function App() {
  return (
    <>
      <Header />
      <About />
    </>
  );
}