import Grid from './components/Grid';
import Header from './components/Nav'
import About from './components/About';


// Pass users array to the List component as a prop
export default function App() {
  return (
    <>
      <Header />
      <Grid>
      </Grid>
      <About/>
    </>
  );
}