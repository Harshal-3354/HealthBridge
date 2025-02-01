// HomePage.jsx
import React from "react";
import HeaderNavbar from "../components/HeaderNavbar";
import HeroSection from "../components/HeroSection";
import QuickServices from "../components/QuickServices";
import Promotions from "../components/Promotions";
import Specialization from "../components/Specialization";
import MedicalSpecialists from "../components/MedicalSpecialists";
import PatientCaring from "../components/PatientCaring";
import LatestNews from '../components/LatestNews';
import Statistics from '../components/Statistics';
import FAQ from '../components/FAQ';
import Footer from "../components/Footer";

const faqs = [
  {
    question: 'Why choose our medical care for your family?',
    answer:
      'We offer personalized care tailored to the unique needs of each patient, ensuring the best outcomes.',
  },
  {
    question: 'Why are we different from others?',
    answer:
      'Our focus on patient-centric care, cutting-edge technology, and highly skilled professionals sets us apart.',
  },
  {
    question: 'Trusted & experienced senior care & love?',
    answer:
      'Yes, we have decades of experience providing compassionate and professional care for all patients.',
  },
  {
    question: 'How to get an appointment for emergency cases?',
    answer:
      'Call our helpline or use our online appointment system for immediate assistance in emergencies.',
  },
];


const stats = [
  { value: 5000, label: 'Happy Patients' },
  { value: 200, label: 'Hospitals' },
  { value: 1000, label: 'Laboratories' },
  { value: 700, label: 'Expert Doctors' },
];

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1621887348744-6b0444f8a058?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww',
    date: 'March 12, 2023',
    title: '8 Tips to Protect Your Mental Health When You’re Sick',
    author: 'Rebecca Lee',
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1664302148512-ddea30cd2a92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV0b3h8ZW58MHx8MHx8fDA%3D',
    date: 'March 9, 2023',
    title: 'Detox Tips for Better Health',
    author: 'Rebecca Lee',
  },
  {
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpZXR8ZW58MHx8MHx8fDA%3D',
    date: 'March 8, 2023',
    title: 'How to Stay Healthy with a Balanced Diet',
    author: 'Rebecca Lee',
  },
];

const HomePage = () => {
  return (
    // <div>
    <>
      <HeaderNavbar />
      <HeroSection />
      <QuickServices></QuickServices>
      <Promotions></Promotions>
      <Specialization/>
      <MedicalSpecialists/>
      <PatientCaring></PatientCaring>
      <LatestNews articles={articles}></LatestNews>
      <Statistics stats={stats} />
      <FAQ faqs={faqs}></FAQ>
      <Footer></Footer>
      
      {/* Add other sections here */}
    </>
  );
};

export default HomePage;
