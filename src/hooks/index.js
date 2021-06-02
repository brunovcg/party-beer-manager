import { HomeProvider } from "./homeContext";
import { GraduationProvider } from "./graduationContext";
import {MarriageProvider} from './marriageContext'
import {PartyProvider} from './partyContext'


const Hooks = ({ children }) => {
    return (
     
        <HomeProvider>
            <GraduationProvider>
                <MarriageProvider>
                    <PartyProvider>
                        {children}
                     </PartyProvider>
                 </MarriageProvider>
            </GraduationProvider>
        </HomeProvider>
    
    );
  };
  
  export default Hooks;