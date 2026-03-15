import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const singleProductLoading = () => {
  return (
  <SkeletonTheme baseColor="#D3D3D3" highlightColor="#444">
    <div className='flex items-center justify-center'>
        <Skeleton count={5} height={1000} width={500} className="" style={{ opacity: .35 }} />
    </div>
  </SkeletonTheme>
);
}

export default singleProductLoading;