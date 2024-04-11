import { useMediaQuery } from "react-responsive";
import { BREAK_POINTS } from "@src/utils/constants";

const useMedia = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAK_POINTS.MOBILE}px)`,
  });

  return { isDesktop };
};

export default useMedia;
