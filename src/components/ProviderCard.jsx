import React from 'react';

const ProviderCard = ({ provider, onSelect, onBook }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={provider.photo}
        alt={provider.name}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{provider.name}</h3>
      <p className="text-gray-600">Service: {provider.service}</p>
      <p className="text-gray-600">Location: {provider.location}</p>
      <p className="text-gray-600">Rating: {provider.rating || 'No ratings yet'}</p>
      <div className="mt-2">
        <h4 className="font-medium">Services Offered:</h4>
        {provider.services && provider.services.length > 0 ? (
          <ul className="list-disc pl-5">
            {provider.services.map((service) => (
              <li key={service._id}>
                {service.name} - ₹{service.price} ({service.duration})
              </li>
            ))}
          </ul>
        ) : (
          <p>No services listed</p>
        )}
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={onSelect}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          View Profile
        </button>
        <button
          onClick={onBook}
          className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ProviderCard;