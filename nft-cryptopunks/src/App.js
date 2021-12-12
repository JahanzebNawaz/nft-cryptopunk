import './App.css'
import CollectionCard from './components/CollectionCard'
import Header from './components/Header'
import { useState, useEffect } from 'react';
import axios from 'axios';
import NftList from './components/NftList';
import Main from './components/Main';


function App() {
  const [punkListData, setpunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getNft = async () => {
      const openSeaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x2AE09138951F25cd88972235356eD980cFd01a30&order_direction=asc'
        )
      setpunkListData(openSeaData.data.assets)
    }

    return  getNft()
  }, [])
    
  return (
    <div className='app'>
      <Header />
      {
        punkListData.length > 0 && (
          <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData}/>
          <NftList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }
      

    </div>
  );
}

export default App;
