import {
  TimeData,
  TimeAbbreviation,
} from "../RemainingPeriod/RemainingPeriod.types";

export interface PromoCardType2Props {
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  title?: string;
  imageTitle: string;
  imageSource?: string;
  description: string;
  dateDifference?: TimeData;
  timeAbbreviations?: TimeAbbreviation;
  statusText?: string;
  footerIcon?: React.ReactNode;
}
