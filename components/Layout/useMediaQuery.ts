import * as React from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    function listener(ev: MediaQueryListEvent) {
      setMatches(ev.matches);
    }
    media.addEventListener('change', listener);
    return () => media.addEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
