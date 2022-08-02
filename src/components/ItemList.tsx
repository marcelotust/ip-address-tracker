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

interface Props {
  data: IIPgeo;
}

const ItemList = (props: Props) => {
  let location: String = "";
  if (props.data?.location) {
    location = props.data?.location.region + ", " + props.data?.location.country;
  }

  return (
    <Card>
      <StyledItemList>
        <InfoItem label="IP ADDRESS" value={props.data?.ip || ""} />
        <InfoItem label="LOCATION" value={location || ""} />
        <InfoItem
          label="TIMEZONES"
          value={props.data?.location.timezone || ""}
        />
        <InfoItem label="ISP" value={props.data?.isp || ""} />
      </StyledItemList>
    </Card>
  );
};

export default ItemList;
