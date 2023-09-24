import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card/Card";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [phoneDetails, setPhoneDetails] = useState([]);

  useEffect(() => {
    const details = data?.find((phone) => phone.id === id);
    setPhoneDetails(details);
  }, [id, data]);
  // console.log(phoneDetails)

  return (
    <div>
     <Card phone={phoneDetails}></Card>
    </div>
  );
};

export default Details;
