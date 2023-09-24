import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard/FavoritesCard";

const Favorites = () => {

     const [data, setData] = useState([]);
     const [notFound, setNotFound] = useState('');

     useEffect(() => {

     const getLocalStorage = JSON.parse(localStorage.getItem('favorites'))
     if(getLocalStorage){
          setData(getLocalStorage);
     }else{
          setNotFound("Not Found")
     }

     },[])

     const clearAllData = () => {
          localStorage.clear();
          setData([])
          setNotFound("Not Found")
          
     }

     return (
          <div>
               {
                    notFound ? <p className="flex justify-center items-center h-screen">{notFound}</p> : <div>
                         <div className="text-center mt-5">
                         {data.length > 0 && <button onClick={clearAllData} className="btn btn-info">Delete All product</button>}
                         </div>
                         <div className="grid grid-cols-3 gap-3 mt-8"> 
                              {
                                   data.map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
                              }
                         </div>
                    </div>
               }
          </div>
     );
};

export default Favorites;