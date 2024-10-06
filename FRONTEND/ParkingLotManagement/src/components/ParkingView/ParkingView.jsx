import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const ParkingView = () => {
  const [parkingSlots, setParkingSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.isAuthenticated);

  if (!user) {
    navigate("/login");
  }

  const handleBookSlot = (spotNumber) => {
    navigate(`/parkingSpots/reservation/${spotNumber}`);
  };

  useEffect(() => {
    const getParkingSpots = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/v1/ParkingSpots", {
          withCredentials: true
        });
        setParkingSlots(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching parking spots:', error.message);
        setError(error.message);
        setLoading(false);
      }
    };
    getParkingSpots();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-800">
      <h1 className="text-3xl font-bold mb-8">Parking Slots</h1>
      <div className="flex space-x-4 mb-8">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-green-500 rounded mr-2"></div>
          <span className="text-white">Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 bg-red-500 rounded mr-2"></div>
          <span className="text-white">Occupied</span>
        </div>
      </div>
      <div className="grid gap-4" style={{ gridTemplateRows: 'repeat(8, 50px)', gridTemplateColumns: 'repeat(3, 100px)' }}>
        {parkingSlots.map(slot => (
          <div
            key={slot._id}
            className={`flex items-center justify-center border-2 rounded ${slot.status === 'Available' ? 'cursor-pointer' : ''} ${slot.status === 'Available' ? 'bg-green-500' : 'bg-red-500'}`}
            onClick={slot.status === 'Available' ? () => handleBookSlot(slot.Spot_number) : null}
          >
            <FontAwesomeIcon icon={faCar} className="text-white" />
            <span className="text-white font-bold ml-2">{slot.Spot_number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingView;
