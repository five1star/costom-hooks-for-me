import { useRouter } from "next/router";
import React from "react";

export const useLinkClick = () => {
  const router = useRouter();

  const onLinkClick = React.useCallback(
    (link: string, isExternalLink: boolean) => {
      // Do not navigate if same link is clicked
      // if (pathname === link) return;

      // If the path name and query param together is not the same as the link, navigate to the link
      if (`${window.location.pathname}?${window.location.search}` === link)
        return;

      if (isExternalLink) {
        window.open(link, "_blank");
        return;
      }

      router.push(link);
    },
    [router]
  );

  return onLinkClick;
};
