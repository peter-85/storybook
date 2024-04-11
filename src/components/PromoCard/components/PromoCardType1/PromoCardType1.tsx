import { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button, Paragraph } from "@IndexComponents";
import { RemainingPeriod } from "../RemainingPeriod/RemainingPeriod";
import { commonStyles } from "@components/styles/commonStyles";
import { useMedia } from "@src/hooks";
import { styles } from "./PromoCardType1.stylex";
import { PromoCardType1Props } from "./PromoCardType1.types";

const PromoCardType1 = forwardRef<HTMLDivElement, PromoCardType1Props>(
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
      <div {...stylex.props(styles.wrapper)} onClick={onClick}>
        <div
          ref={ref}
          {...stylex.props(styles.image(imageSource), commonStyles.bgCover)}
        />
        <div {...stylex.props(styles.details)}>
          <Paragraph
            fontWeight={700}
            extraStyles={[commonStyles.textTruncate, styles.title]}
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
      </div>
    );
  }
);

export default PromoCardType1;
