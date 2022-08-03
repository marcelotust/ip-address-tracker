import styled from "styled-components";
import backgroundImg from "./assets/images/pattern-bg.png";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import { IIPgeo } from "./interfaces/IIPGeo";
import ItemList from "./components/ItemList";
import { useIPGeo } from "./hooks/useIPGeo";
import Map from "./components/Map";
import { removeHttp } from "./utils/Validate";

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;

  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: auto 250px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const StyledH1 = styled.h1`
  color: white;
  margin-bottom: 0px;
  padding-bottom: 0px;
`;

function App() {
  const startPosition = [34, -118, 2];
  const [data, setData] = useState<IIPgeo>();
  const { dataResponse, getIPGeo } = useIPGeo();
  const [position, setPosition] = useState(startPosition);

  useEffect(() => {
    if (dataResponse) {
      setData(dataResponse);
      if (dataResponse?.location?.lat) {
        setPosition([dataResponse?.location?.lat, dataResponse?.location?.lng, 9]);
      } else {
        setPosition(startPosition);
      }
    }
  }, [dataResponse]);

  const onSearchHandler = (term: String, type: String = "ip" || "url") => {
    if (type == "ip") {
      getIPGeo("&ipAddress=" + term);
    } else if (type == "url") {
      getIPGeo("&domain=" + removeHttp(term));
    }
  };

  return (
    <StyledApp>
      <StyledContainer>
        <StyledH1>IP Address Tracker</StyledH1>
        <Search onUpdate={onSearchHandler} />
        {dataResponse && <ItemList data={data} />}
      </StyledContainer>
      <Map position={position} zoom={position[2]} />
    </StyledApp>
  );
}

export default App;
