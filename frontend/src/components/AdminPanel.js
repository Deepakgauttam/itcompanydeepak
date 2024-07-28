import React, { useState, useEffect } from 'react';
import { API } from '../utils/API';
import { useAuth } from '../context/AuthContext';
import './AdminPanel.css'; 

const AdminPanel = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [partnerMembers, setPartnerMembers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesResponse, projectsResponse, partnersResponse, contactsResponse] = await Promise.all([
          API.get('/services'),
          API.get('/projects'),
          API.get('/partners'),
          API.get('/contacts')
        ]);

        setServices(servicesResponse.data);
        setProjects(projectsResponse.data);
        setPartnerMembers(partnersResponse.data);
        setContacts(contactsResponse.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('An error occurred while fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="admin-panel">
      <h1>Welcome, {user?.name}</h1>
      <div>
        <h2>Services</h2>
        <ul>
          {services.map((service) => (
            <li key={service._id}>{service.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project._id}>{project.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Partner Members</h2>
        <ul>
          {partnerMembers.map((member) => (
            <li key={member._id}>{member.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>{contact.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
