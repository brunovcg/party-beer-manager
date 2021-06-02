import { HomeProvider } from "./homeContext";
import { GraduationProvider } from "./graduationContext";


const Hooks = ({ children }) => {
    return (
     
        <HomeProvider>
            <GraduationProvider>
             {children}
            </GraduationProvider>
        </HomeProvider>
    
    );
  };
  
  export default Hooks;