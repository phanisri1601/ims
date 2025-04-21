'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '../styles/ServiceCard.css';

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  navigateTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageSrc, navigateTo }) => {
  const router = useRouter();

  return (
    <div className="service-card">
      <div className="card-content">
        <h3>{title}</h3>
      </div>
      <div className="hover-overlay">
        <Image
          src={imageSrc}
          alt={title}
          className="hover-image"
          width={400}
          height={300}
        />
        <div className="arrow" onClick={() => router.push(navigateTo)}>
          →
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
