export const setImgFadein = (imageRef) => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      });
  
      const currentImageRef = imageRef.current;
  
      observer.observe(currentImageRef);
  
      return () => {
        observer.unobserve(currentImageRef);
      };
}