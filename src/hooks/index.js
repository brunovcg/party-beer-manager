import { HomeProvider } from "./homeContext";


const Hooks = ({ children }) => {
    return (
     
        <HomeProvider>{children}</HomeProvider>
    
    );
  };
  
  export default Hooks;