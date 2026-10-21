import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const TestComponent = () => {
  const [imageData, setImageData] = useState([]);

  function throttle(func, delay) {
    let lastCall = 0;
    return function (...arg) {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      func(...arg);
    };
  }

  const fetchImage = useCallback(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        if (res.data && res.data.message) {
          setImageData((prev) => [...prev, res.data.message]);
        }
        // console.log(res)
        // setImageData(res)
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => { 
    fetchImage(); // sorry i didnt notice i have move the handlescroll inside useEffect
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight; 

      if (scrollTop + windowHeight + 100 >= fullHeight) {
        fetchImage();
      }
    }, 1000); 

    window.addEventListener("scroll", handleScroll); // added a listner 

    return () => window.removeEventListener("scroll", handleScroll); // cleanup removing the listner
  }, [fetchImage]);

  

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}> 
      {imageData.map((src, idx) => (
        <img 
          key={idx}
          src={src}
          alt="Random Dog"
          style={{ width: "100%", marginBottom: 16, borderRadius: 8 }}
        />
      ))}
    </div>
  );
};

export default TestComponent;
