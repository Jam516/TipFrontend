import { useState } from 'react';
import { useContract, useMetamask, useAddress } from '@thirdweb-dev/react';
import './skin.css';
import "bootstrap/dist/css/bootstrap.min.css";


const TipButton = () => {
  const connectWithMetamask = useMetamask();
  const {contract} = useContract("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
  const address = useAddress();

  // State to track when a user is making a tip
  const [tipping, setTipping] = useState(false);

  // Send out tip using the contracts deposit function
  const onClick = async () => {
    setTipping(true);
    try {
      useEffect(() => {
        if (contract) {
          contract.call("deposit")
            .then((data) => console.log(data))
            .catch((e) => console.error(e));
        }
      }, [contract]);
      alert('Successfully Tipped!');
      setTipping(false);
    } catch (error) {
      console.log('Failed to tip. Error: ', error);
      setTipping(false);
    }
  };

  return (
    <div className="mb-3">
      {address ? (
        <button
          disabled={tipping}
          className='btn submitbtn'
          onClick={onClick}
        >
          {tipping ? 'Tipping...' : 'Send Tip'}
        </button>
      ) : (
        <button className='btn submitbtn' onClick={connectWithMetamask}>Connect MetaMask Wallet</button>
      )}
    </div>
  );
};

export default TipButton;
