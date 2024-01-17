import React from 'react';
import { Image } from "@nextui-org/react";
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('@/components/Modules/Map/Map'), {
  ssr: false,
  loading: () => <p>کمی صبر کنید...</p>
});

const DoctorMapAddress: React.FC = () => {
  return (
    <div className="px-2 lg:px-5">
      <div className="rounded-xl bg-[#f3f3f3] flex !justify-center !items-center !h-80 overflow-hidden">
        <MapWithNoSSR/>
      </div>
    </div>
  );
};

export default DoctorMapAddress;
