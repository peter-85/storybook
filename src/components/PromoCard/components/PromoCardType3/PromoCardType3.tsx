import { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button, Paragraph } from "@IndexComponents";
import { RemainingPeriod } from "../RemainingPeriod/RemainingPeriod";
import { commonStyles } from "@components/styles/commonStyles";
import { useMedia } from "@src/hooks";
import { styles } from "./PromoCardType3.stylex";
import { PromoCardType3Props } from "./PromoCardType3.types";

const PromoCardType3 = forwardRef<HTMLDivElement, PromoCardType3Props>(
  (
    {
      imageSource,
      title,
      description,
      onClick,
      buttonText,
      dateDifference,
      timeAbbreviations,
      footerIcon,
    },
    ref
  ) => {
    const { isDesktop } = useMedia();

    return (
      <div
        ref={ref}
        {...stylex.props(styles.wrapper(imageSource))}
        onClick={onClick}
      >
        <Paragraph
          fontWeight={700}
          extraStyles={[commonStyles.textTruncateClamp(2), styles.title]}
        >
          {title}
        </Paragraph>
        <Paragraph
          extraStyles={[
            commonStyles.textTruncateClamp(3),
            styles.detailsDescription,
          ]}
        >
          {description}
        </Paragraph>
        <div {...stylex.props(styles.footer)}>
          <Button size={isDesktop ? "md" : "sm"} text={buttonText} />
          {dateDifference &&
            timeAbbreviations &&
            (dateDifference.days > -1 || dateDifference.status) && (
              <RemainingPeriod
                dateDifference={dateDifference}
                timeAbbreviations={timeAbbreviations}
                icon={footerIcon}
              />
            )}
        </div>
      </div>
    );
  }
);

export default PromoCardType3;
