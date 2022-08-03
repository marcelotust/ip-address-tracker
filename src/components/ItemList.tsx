import styled from "styled-components";
import { IIPgeo } from "../interfaces/IIPGeo";
import InfoItem from "./InfoItem";
import Card from "./Layout/Card";

const StyledItemList = styled.div`
  display: flex;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const StyledLine = styled.div`
  border-left: 1px solid #d1d1d1;
  height: 95px;
  margin-top: 30px;

  @media only screen and (max-width: 800px) {
    height: 0px;
    margin-top: 0px;
  }
`;

interface Props {
  data: IIPgeo;
}

const ItemList = (props: Props) => {
  let location: String = "";
  if (props.data?.location) {
    location =
      props.data?.location.region + ", " + props.data?.location.country;
  }

  return (
    <Card>
      <StyledItemList>
        <InfoItem label="IP ADDRESS" value={props.data?.ip || ""} />
        <StyledLine />
        <InfoItem label="LOCATION" value={location || ""} />
        <StyledLine />
        <InfoItem
          label="TIMEZONES"
          value={props.data?.location.timezone || ""}
        />
        <StyledLine />
        <InfoItem label="ISP" value={props.data?.isp || ""} />
      </StyledItemList>
    </Card>
  );
};

export default ItemList;
