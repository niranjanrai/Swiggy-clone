const Shimmer = () => {
  const lenghth = Array(15).fill(1);
  return (
    <>
      {Array(15)
        .fill("")
        .map((x, index) => {
          return (
            <div className="shimmer" key={index}>
              <div className="shi-div"></div>
              <div className="shi-div"></div>
              <div className="shi-img"></div>
            </div>
          );
        })}
    </>
  );
};

export default Shimmer;
