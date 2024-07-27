import React, { useState, useEffect } from 'react';
import { API } from '../utils/API';
import { useAuth } from '../hooks/useAuth';

const AdminPanel = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [PartnerMembers, setPartnerMembers] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchServices();
    fetchProjects();
    fetchPartnerMembers();
    fetchContacts();
  }, []);

  const fetchServices = async () => {
    const response = await API.get("/services");
    setServices(response.data);
  };

  const fetchProjects = async () => {
    const response = await API.get("/projects");
    setProjects(response.data);
  };

  const fetchPartnerMembers = async () => {
    const response = await API.get("/Partner");
    setPartnerMembers(response.data);
  };

  const fetchContacts = async () => {
    const response = await API.get("/contacts");
    setContacts(response.data);
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
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
          {PartnerMembers.map((member) => (
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
