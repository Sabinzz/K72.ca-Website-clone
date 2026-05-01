import axios from 'axios';
import { Globe } from 'lucide-react';
import { useEffect } from 'react';
import { useState } from 'react';
const Api = `https://api.openweathermap.org/data/2.5/weather?`;
const Api_key = `2be7ade7b21d37d3098d52183899fbd4`;
const Footer = () => {
    
    const [Time, setTime] = useState(new Date());
  const [Country, setCountry] = useState();

  // 🕒 Time updater
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 📍 Geolocation + API call
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
     
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // ✅ Move API call *inside* callback so it waits for coords
      const FinalApi = `${Api}lat=${lat}&lon=${lon}&appid=${Api_key}`;
      axios
        .get(FinalApi)
        .then((response) => {
          setCountry(response.data.sys.country);
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    });
  }, []);
  return (
    <div className='flex absolute bottom-0 text-white items-center text-2xl opacity-0 lg:opacity-100'>
        <div className=' h-15 w-15  flex items-center mx-2'>
       <Globe className='h-12 w-12' />
        </div>
          <div>
          <h1>{Country}__</h1>
        </div>
        
        <div>
          <h1>{Time.toLocaleTimeString()}</h1>
        </div>
  
      </div>
  )
}

export default Footer
