export type TimeData = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  status?: string;
};

export type TimeAbbreviation = {
  day: string;
  hour?: string;
  minute?: string;
};

export interface RemainingPeriodProps {
  dateDifference: TimeData;
  timeAbbreviations: {
    day: string;
    hour?: string;
    minute?: string;
  };
  statusText?: string;
  icon?: React.ReactNode;
}
