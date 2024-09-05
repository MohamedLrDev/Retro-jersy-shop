import Card from "./Card";

const Teams = () => {
  return (
    <div className=" max-w-7xl  mx-auto py-16 ">
      <div className="mb-6">
        <h2 className="text-2xl font-bold max-xl:text-4xl  text-gray-800">Teams</h2>
        <span className="block w-full h-[2px] bg-gradient-to-r from-[#FF6347] -[#F5F5F5] mt-2"></span>

      </div>
      <div className="flex gap-4 overflow-x-auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Teams;
