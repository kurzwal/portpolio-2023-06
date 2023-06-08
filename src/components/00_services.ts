export const observerHanlder = (
   observeRef: React.MutableRefObject<null>,
   setIsVisible: Function
) => {
   const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
   });
   if (observeRef.current) {
      observer.observe(observeRef.current);
   }
   return () => {
      if (observeRef.current) {
         observer.unobserve(observeRef.current);
      }
   };
};
