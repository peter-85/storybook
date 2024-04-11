import { forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button, Paragraph } from "@IndexComponents";
import { useMedia } from "@src/hooks";
import { RemainingPeriod } from "../RemainingPeriod/RemainingPeriod";
import { PromoCardType2Props } from "./PromoCardType2.types";
import { commonStyles } from "@components/styles/commonStyles";
import { styles } from "./PromoCardType2.stylex";

const PromoCardType2 = forwardRef<HTMLDivElement, PromoCardType2Props>(
  (
    {
      title,
      imageTitle,
      imageSource,
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
        <Paragraph
          fontWeight={700}
          extraStyles={[commonStyles.textTruncate, styles.title]}
        >
          {title}
        </Paragraph>
        <div {...stylex.props(styles.cardWrapper)}>
          <div {...stylex.props(styles.body)}>
            <div ref={ref} {...stylex.props(styles.image(imageSource))}>
              <Paragraph
                fontWeight={700}
                extraStyles={[commonStyles.textTruncate, styles.imageTitle]}
              >
                {imageTitle}
              </Paragraph>
            </div>
          </div>
          <div {...stylex.props(styles.details)}>
            <Paragraph
              extraStyles={[
                commonStyles.textTruncateClamp(3),
                styles.detailsDescription,
              ]}
            >
              {description}
            </Paragraph>
            <div {...stylex.props(styles.footer)}>
              {dateDifference &&
                timeAbbreviations &&
                (dateDifference.days > -1 || dateDifference.status) && (
                  <RemainingPeriod
                    dateDifference={dateDifference}
                    timeAbbreviations={timeAbbreviations}
                    icon={footerIcon}
                  />
                )}
              <Button size={isDesktop ? "md" : "sm"} text={buttonText} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PromoCardType2;
