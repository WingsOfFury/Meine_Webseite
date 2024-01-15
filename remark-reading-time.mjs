import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

function getMinutesReadingTime(text) {
  const { minutes } = getReadingTime(text);
  return Math.ceil(minutes);
}

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);

    const minutesReadingTime = getMinutesReadingTime(textOnPage);

    const minutesText =
      minutesReadingTime === 1
        ? "1 Minute Lesezeit"
        : `${minutesReadingTime} Minuten Lesezeit`;

    data.astro.frontmatter.minutesRead = minutesText;
  };
}
