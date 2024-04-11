import {
  TimeData,
  TimeAbbreviation,
} from "../RemainingPeriod/RemainingPeriod.types";

export interface PromoCardType1Props {
  title: string;
  description: string;
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  imageSource?: string;
  dateDifference?: TimeData;
  timeAbbreviations?: TimeAbbreviation;
  statusText?: string;
  footerIcon?: React.ReactNode;
}
