import About from './components/About';
import Header from './components/Nav'

// Pass users array to the List component as a prop
export default function App() {
  // new state to store page name
  const handleClick = (event) => {
    if (event.target.innerText==='About Me'){
        // set state to store page name
    }
    console.log(event.target)
    console.log(event.target.innerText)
    console.log(`New value of count`);
  };

  const renderPage = () => {
    //if(newState === "About Me"){
    // return <About />
    //}else if(newState === "")
  }
  return (
    <>
      <Header
      handleClick={handleClick}
      />
      <About/>
      {renderPage()}
    </>
  );
}