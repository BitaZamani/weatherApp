interface Data {
  name: string;
  region: string;
  country: string;
  localtime: string;
}
const Info = ({ data }: { data: Data }) => {
  return (
    <div className="flex flex-col justify-center items-center p-5 h-full w-full  rounded-md bg-black/20 backdrop-brightness-75 text-white gap-5 ">
      <div className="">
        <span className="font-bold text-2xl mr-2">{data.name}</span>
        <span>
          {data.region} - {data.country}
        </span>
      </div>
      <span>{data.localtime}</span>
    </div>
  );
};

export default Info;
