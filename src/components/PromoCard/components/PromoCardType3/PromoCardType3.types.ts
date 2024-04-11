import {
  TimeData,
  TimeAbbreviation,
} from "../RemainingPeriod/RemainingPeriod.types";

export interface PromoCardType3Props {
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  title?: string;
  description?: string;
  imageSource?: string;
  dateDifference?: TimeData;
  timeAbbreviations?: TimeAbbreviation;
  statusText?: string;
  footerIcon?: React.ReactNode;
}
