import { useLoaderData } from "react-router-dom";
import Baner from "../../Component/Baner/Baner";
import Phones from "../../Component/Phones/Phones";

const Home = () => {
     const data = useLoaderData();
     return (
          <div>
               <Baner></Baner>
               <Phones phones={data}></Phones>
          </div>
     );
};

export default Home;