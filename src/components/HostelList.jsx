import HostelCards from "./HostelCards";

const HostelList = () => {
  return (
    <div className="w-full h-full bg-white rounded-xl overflow-scroll">
      <div className="w-full h-full p-2">
        <HostelCards />
      </div>
    </div>
  );
};

export default HostelList;
