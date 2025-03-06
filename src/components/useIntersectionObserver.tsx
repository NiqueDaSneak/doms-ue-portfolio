import { useState, useEffect } from'react';

const useIntersectionObserver = (callback) => {
  const [ref, setRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback(true);
      } else {
        callback(false);
      }
    }, {
      threshold: 1.0,
    });

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, callback]);

  return setRef;
};

export default useIntersectionObserver;