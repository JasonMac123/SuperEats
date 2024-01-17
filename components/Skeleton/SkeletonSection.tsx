import React from "react";
import ContentLoader, { Rect, Path } from "react-content-loader/native";

const SkeletonSection = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={150}
      viewBox="0 0 400 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <Rect x="25" y="15" rx="5" ry="5" width="400" height="20" />
      <Rect x="25" y="50" rx="5" ry="5" width="220" height="10" />
      <Rect x="25" y="80" rx="5" ry="5" width="220" height="10" />
      <Rect x="25" y="110" rx="5" ry="5" width="220" height="10" />
      <Rect x="25" y="140" rx="5" ry="5" width="226" height="10" />
    </ContentLoader>
  );
};

export default SkeletonSection;
