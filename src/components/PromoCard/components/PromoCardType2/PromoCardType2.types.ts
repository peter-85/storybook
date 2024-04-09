import {
  TimeData,
  TimeAbbreviation,
} from "../RemainingPeriod/RemainingPeriod.types";

export interface PromoCardType2Props {
  title: string;
  imageTitle: string;
  imageSource: string;
  description: string;
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  dateDifference?: TimeData;
  timeAbbreviations?: TimeAbbreviation;
  statusText?: string;
  footerIcon?: React.ReactNode;
}
