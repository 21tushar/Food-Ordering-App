import { ShimmerPostList } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div>
      <ShimmerPostList
        postStyle="STYLE_FOUR"
        col={4}
        row={5}
        gap={30}
        className="p-[50px]"
      />
    </div>
  );
};

export default Shimmer;
