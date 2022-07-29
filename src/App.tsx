import styled from "styled-components";
import backgroundImg from "./assets/images/pattern-bg.png";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import { IIPgeo } from "./interfaces/IIPGeo";
import ItemList from "./components/ItemList";
import { useIPGeo } from "./hooks/useIPGeo";
import Map from "./components/Map";

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: 100% 250px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`
  color: white;
`;

function App() {
  const [data, setData] = useState<IIPgeo>();
  const { dataResponse, getIPGeo } = useIPGeo();

  useEffect(() => {
    setData(dataResponse);
  }, [dataResponse]);

  const onSearchHandler = (term : string, type : string = "ip" || "url") => {
    if (type == "ip") {
      getIPGeo("&ipAddress=" + term);
    } else if (type == "url") {
      getIPGeo("&domain=" + term);
    }
  }

  return (
    <StyledApp>
      <StyledContainer>
        <StyledH1>IP Address Tracker</StyledH1>
        <Search onUpdate={onSearchHandler} />
        <ItemList data={data} />
      </StyledContainer>
    </StyledApp>
  );
}

//<Map />
export default App;
