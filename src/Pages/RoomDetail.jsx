import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Rooms from '../Components/roomdetails/Rooms';
// import RoomHero from '../Components/roomdetails/RoomHero';

const RoomDetail = () => {
  const location = useLocation();

  // Only show Rooms if exactly at "/room-detail"
  const isAtRoomDetail = location.pathname === "/room-detail";

  return (
    <div>
      {/* {isAtRoomDetail && <RoomHero />} */}
      {isAtRoomDetail && <Rooms />}
      <Outlet />
    </div>
  );
};

export default RoomDetail;
