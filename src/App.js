import Routes from './Routes/Routes';
import Header from  './components/Header/Header';
import OuterContainer from './styles/AppStyle';


function App() {
  return (
    <OuterContainer>
      <div className="InnerContainer">

        <Header/>
        
        <main>  
         <Routes/>
        </main>

      </div>
    </OuterContainer>
  );
}

export default App;
