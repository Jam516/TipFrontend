import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import Tip from './components/Tip';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Tip />
    </ThirdwebProvider>
  );
}

export default App;
