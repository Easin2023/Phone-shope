import Phone from "./Phone/Phone";

const Phones = ({phones}) => {

     return (
          <div>
              <h1 className="text-center text-2xl font-semibold mt-7">All Phones</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {
                    phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
               }
              </div>
          </div>
     );
};

export default Phones;