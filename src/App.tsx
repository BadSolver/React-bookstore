import { AppRouter } from "./router/AppRouter";
import { Wrapper } from "./style";
import { useTheme } from "./ui/theme";


const App = () => {

  
  return (
    <Wrapper>
      <AppRouter />
    </Wrapper>
  );
};

export default App;
