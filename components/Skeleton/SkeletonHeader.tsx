import React from "react";
import ContentLoader, { Rect, Path } from "react-content-loader/native";

const SkeletonHeader = (props: any) => {
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
      <Rect x="0" y="0" rx="2" ry="2" width="400" height="400" />
    </ContentLoader>
  );
};

export default SkeletonHeader;
