import styled from "styled-components";
import { IIPgeo } from "../interfaces/IIPGeo";
import InfoItem from "./InfoItem";
import Card from "./Layout/Card";

const StyledItemList = styled.div`
  display: flex;
  height: 160px;
`;

interface Props {
  data: IIPgeo;
}

const ItemList = (props: Props) => {
  return (
    <Card>
      <StyledItemList>
        <InfoItem label="IP ADDRESS" value={props.data?.ip || ""} />
        <InfoItem
          label="LOCATION"
          value={
            props.data?.location.region + ", " + props.data?.location.country ||
            ""
          }
        />
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
