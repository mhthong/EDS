import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingComponent() {
  const [showrooms, setShowrooms] = useState([]);
  const [selectedShowroom, setSelectedShowroom] = useState(null);
  const [groupServices, setGroupServices] = useState([]);
  const [selectedGroupService, setSelectedGroupService] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [step, setStep] = useState('showroom');

  useEffect(() => {
    fetchShowrooms();
  }, []);

  const fetchShowrooms = () => {
    axios.get('/api/showrooms')
      .then(response => {
        setShowrooms(response.data);
      })
      .catch(error => {
        console.error('Error fetching showrooms:', error);
      });
  };

  const fetchGroupServices = () => {
    axios.get(`/api/group-services/${selectedShowroom}`)
      .then(response => {
        setGroupServices(response.data);
      })
      .catch(error => {
        console.error('Error fetching group services:', error);
      });
  };

  const fetchServices = () => {
    axios.get('/api/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  };

  // ...
  return (
    <div>
      {/* Render steps and input elements */}
      {step === 'showroom' && (
        <div>
          {showrooms.map(showroom => (
            <div key={showroom.id}>
              <input
                type="radio"
                value={showroom.id}
                checked={selectedShowroom === showroom.id}
                onChange={() => setSelectedShowroom(showroom.id)}
              />
              {showroom.Name}
            </div>
          ))}
          <button onClick={nextStep}>Next</button>
        </div>
      )}
  
      {step === 'groupService' && (
        <div>
          {groupServices.map(groupService => (
            <div key={groupService.id}>
              <input
                type="radio"
                value={groupService.id}
                checked={selectedGroupService === groupService.id}
                onChange={() => setSelectedGroupService(groupService.id)}
              />
              {groupService.Name}
            </div>
          ))}
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
  
      {step === 'service' && (
        <div>
          {services.map(service => (
            <div key={service.id}>
              <input
                type="checkbox"
                value={service.id}
                checked={selectedServices.includes(service.id)}
                onChange={() => {
                  if (selectedServices.includes(service.id)) {
                    setSelectedServices(selectedServices.filter(id => id !== service.id));
                  } else {
                    setSelectedServices([...selectedServices, service.id]);
                  }
                }}
              />
              {service.Name}
            </div>
          ))}
          <button onClick={prevStep}>Back</button>
          <button onClick={submit}>Submit</button>
        </div>
      )}
  
      {/* Display selected data */}
      <div>
        <h3>Selected Data:</h3>
        <p>Showroom: {selectedShowroom}</p>
        <p>Group Service: {selectedGroupService}</p>
        <p>Selected Services: {selectedServices.join(', ')}</p>
      </div>
    </div>
  );
  
}

export default BookingComponent;
