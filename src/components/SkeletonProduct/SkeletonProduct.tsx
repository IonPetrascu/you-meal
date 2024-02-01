import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonProduct: React.FC = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={387}
    viewBox="0 0 300 387"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="12" y="12" rx="18" ry="18" width="276" height="220" />
    <rect x="12" y="247" rx="11" ry="11" width="77" height="24" />
    <rect x="12" y="280" rx="9" ry="9" width="276" height="20" />
    <rect x="12" y="308" rx="11" ry="11" width="65" height="21" />
    <rect x="12" y="337" rx="13" ry="13" width="276" height="38" />
  </ContentLoader>
);

export default SkeletonProduct;
