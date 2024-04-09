import * as stylex from "@stylexjs/stylex";
import { useMediaQuery } from "react-responsive";
import { Button, Paragraph } from "@IndexComponents";
import { themeTokens } from "@components/themeTokens.stylex";
import { RemainingPeriod } from "../RemainingPeriod/RemainingPeriod";
import { PromoCardType2Props } from "./PromoCardType2.types";
import { styles } from "./PromoCardType2.stylex";

const PromoCardType2 = ({
  title,
  imageTitle,
  imageSource,
  description,
  onClick,
  buttonText,
  dateDifference,
  timeAbbreviations,
  footerIcon,
}: PromoCardType2Props) => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${themeTokens.breakPointsDesktop}px)`,
  });

  return (
    <div {...stylex.props(styles.wrapper)} onClick={onClick}>
      <Paragraph
        fontWeight={700}
        extraStyles={{ ...styles.title, ...styles.textTruncate }}
      >
        {title}
      </Paragraph>
      <div {...stylex.props(styles.cardWrapper)}>
        <div {...stylex.props(styles.body)}>
          <div {...stylex.props(styles.image(imageSource))}>
            <Paragraph
              fontWeight={700}
              extraStyles={{ ...styles.textTruncate, ...styles.imageTitle }}
            >
              {imageTitle}
            </Paragraph>
          </div>
        </div>
        <div {...stylex.props(styles.details)}>
          <Paragraph
            extraStyles={{
              ...styles.textTruncate,
              ...styles.detailsDescription,
            }}
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
            <Button size={isDesktop ? "md" : "sm"} text={buttonText}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCardType2;
