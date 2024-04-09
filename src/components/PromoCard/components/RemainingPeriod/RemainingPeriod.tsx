// import { Icon } from "components/shared;
import * as stylex from "@stylexjs/stylex";
import { styles } from "./RemainingPeriod.stylex";
import { RemainingPeriodProps } from "./RemainingPeriod.types";
import { Paragraph } from "@IndexComponents";

export const RemainingPeriod: React.FC<RemainingPeriodProps> = ({
  dateDifference,
  timeAbbreviations,
  statusText,
  icon,
}) => {
  const hasDays =
    typeof dateDifference.days === "number" ||
    typeof dateDifference.days === "string";
  const hasHours =
    typeof dateDifference.hours === "number" ||
    typeof dateDifference.hours === "string";
  const hasMinutes =
    typeof dateDifference.minutes === "number" ||
    typeof dateDifference.minutes === "string";

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Paragraph extraStyles={styles.text}>
        {dateDifference.status && statusText}
        {(hasDays || hasHours || hasMinutes) && (
          <span {...stylex.props(styles.icon)}>{icon}</span>
        )}
        {dateDifference.days}
        {hasDays && timeAbbreviations.day} {dateDifference.hours}
        {hasHours && timeAbbreviations.hour} {dateDifference.minutes}
        {hasMinutes && timeAbbreviations.minute}
      </Paragraph>
    </div>
  );
};

export default RemainingPeriod;
