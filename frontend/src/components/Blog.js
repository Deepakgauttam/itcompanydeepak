import React from 'react';
import './Blog.css';
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in IT",
      summary:
        "Explore the latest trends and advancements in artificial intelligence and how they're transforming the IT industry.",
      image:
        "https://plus.unsplash.com/premium_photo-1675793714917-dd0f7efc0165?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRoZSUyMEZ1dHVyZSUyMG9mJTIwQUklMjBpbiUyMElUfGVufDB8fDB8fHww",
      link: "/blog/future-of-ai",
    },
    {
      id: 2,
      title: "Top 10 Cybersecurity",
      summary:
        "Learn essential cybersecurity tips to protect your business from cyber threats and data breaches.",
      image:
        "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/blog/cybersecurity-tips",
    },
    {
      id: 3,
      title: "Benefits of Cloud Computing",
      summary:
        "Discover the advantages of cloud computing and how it can help your business become more efficient and scalable.",
      image:
        "https://plus.unsplash.com/premium_photo-1661410847282-d6af31c576a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENsb3VkJTIwQ29tcHV0aW5nJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      link: "/blog/cloud-computing-benefits",
    },
    {
      id: 4,
      title: "Web Development Best Practices",
      summary:
        "Stay updated with the latest best practices in web development to ensure your website is modern and user-friendly.",
      image:
        "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/blog/web-development-best-practices",
    },
    {
      id: 5,
      title: "Mobile App Development Trends",
      summary:
        "Get insights into the latest trends in mobile app development and how they can impact your business strategy.",
      image:
        "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG1vYmlsZSUyMGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
      link: "/blog/mobile-app-development-trends",
    },
    {
      id: 6,
      title: "How to Choose the Right IT Services",
      summary:
        "Learn how to evaluate and choose the right IT services for your business to maximize efficiency and productivity.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
      link: "/blog/choose-it-services",
    },
    {
      id: 7,
      title: "Digital Transformation Strategies",
      summary:
        "Understand the key strategies for successful digital transformation and how to implement them in your business.",
      image:
        "https://plus.unsplash.com/premium_photo-1699387204388-120141c76d51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlnaXRhbCUyMFRyYW5zZm9ybWF0aW9uJTIwU3RyYXRlZ2llc3xlbnwwfHwwfHx8MA%3D%3D",
      link: "/blog/digital-transformation-strategies",
    },
    {
      id: 8,
      title: "Importance of Data Analytics",
      summary:
        "Discover the importance of data analytics in today's business world and how it can drive decision-making.",
      image:
        "https://plus.unsplash.com/premium_photo-1661688164534-db78aaf825b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEltcG9ydGFuY2UlMjBvZiUyMERhdGElMjBBbmFseXRpY3N8ZW58MHx8MHx8fDA%3D",
      link: "/blog/data-analytics-importance",
    },
    {
      id: 9,
      title: "IT Project Management Tips",
      summary:
        "Learn effective project management tips for IT projects to ensure timely and successful delivery.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWdlbWVudHxlbnwwfHwwfHx8Mg%3D%3D",
      link: "/blog/it-project-management-tips",
    },
    {
      id: 10,
      title: "Emerging Technologies in IT",
      summary:
        "Explore the emerging technologies in the IT sector and their potential impact on the industry.",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RW1lcmdpbmclMjBUZWNobm9sb2dpZXMlMjBpbiUyMElUfGVufDB8fDB8fHwy",
      link: "/blog/emerging-technologies",
    },
  ];

  return (
    <div>
    <div className="blog">
      <h1>Our Blog</h1>
      <p>Read our latest updates and articles.</p>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img
              src={post.image}
              alt={post.title}
              className="blog-post-image"
            />
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <Link to={post.link} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Blog;
