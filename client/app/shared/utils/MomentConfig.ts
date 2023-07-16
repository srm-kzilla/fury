import moment from "moment";

export const updateLocale = () => {
  moment.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "now",
      ss: "%d seconds ago",
      m: "1 minute ago",
      mm: "%d minutes ago",
      h: "1 hour ago",
      hh: "%d hours ago",
      d: "1 day ago",
      dd: "%d days ago",
      w: "1 week ago",
      M: "1 month ago",
      MM: "%d months ago",
      y: "1 year ago",
      yy: "%d years ago",
    },
  });
};
