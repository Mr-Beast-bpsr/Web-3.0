import Main from "./components/Main";
import "./App.css";
import Header from "./components/Header";

import CollectionCards from "./components/CollectionCards";
import axios from "axios";
import { useEffect, useState } from "react";
import Punklist from "./components/Punklist.js";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://testnets-api.opensea.io/assets?asset_contract_address=0x5794cB9F3ED51aB270DDa6359682eFF9ef87e3DD&order_direction=asc"
      );

      setPunkListData(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <ErrorBoundary>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          </ErrorBoundary>
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
      <footer className="footer">
        If nothing is Displaying Please click on Get in, then request heroku and
        refresh this page.❤️🚀
      </footer>
    </div>
  );
}

export default App;
