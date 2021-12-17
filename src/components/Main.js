import React from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import { useState, useEffect } from "react";
const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[1]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk?.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}{" "}
            <span className="itemNumber"> #{activePunk.token_id}</span>
            <div className="Bc">
              <div className="ownerImageContainer">
                <img
                  className="ownerImage"
                  src={
                    "https://ipfs.thirdweb.com/ipfs/bafybeibt2tj24qikiqiyw5a7lsp26qg4ryi3yyimh2z3d7m52r4ezcrhgi"
                  }
                />
                <div className="ownerDetails">
                  <div className="ownerNameAndHandle">
                    <div>{activePunk.owner.address}</div>
                    <div className="ownerHandler">
                      <a href="https://codepen.io/mr-beast-bpsr/full/qBRjgPv">
                        @{activePunk.owner.user.username}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social">
          <a
            href="https://www.instagram.com/_rana_bhanu_pratap_/"
            target="_blank"
          >
            <div className="ownerLink">
              <img src={instagramLogo} />
            </div>
          </a>
          <a href="https://twitter.com/Phantom03268616">
            <div className="ownerLink">
              <img src={twitterLogo} />
            </div>
          </a>

          <a href="https://wa.me/917018191917">
            <div className="ownerLink">
              <img src={moreIcon} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
