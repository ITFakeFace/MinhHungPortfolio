import HeroSection from "@/components/home-page/hero-section/HeroSection";
import AboutSection from "@/components/home-page/about-section/AboutSection";
import ExperienceSection from "@/components/home-page/experience-section/ExperienceSection";
import NewCoursesSection from "@/components/home-page/new-courses-section/NewCoursesSection";
import EducationMethodSection from "@/components/home-page/education-method-section/EducationMethodSection";
import CertificateSection from "@/components/home-page/certificate-section/CertificateSection";
import CoreValueSection from "@/components/home-page/core-value-section/CoreValueSection";
import HotTopicSection from "@/components/home-page/hot-topic-section/HotTopicSection";
import TrainingPartnersSection from "@/components/home-page/training-partner-section/TrainingPartnersSection";
import StrategicPartnerSection from "@/components/home-page/strategic-partners-section/StrategicPartnerSection";
import SharingExpSection from "@/components/home-page/sharing-exp-section/SharingExpSection";
import VideoSection from "@/components/home-page/video-section/VideoSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <NewCoursesSection />
      <EducationMethodSection />
      <CertificateSection />
      <CoreValueSection />
      <HotTopicSection />
      <TrainingPartnersSection />
      <StrategicPartnerSection />
      <SharingExpSection />
      <VideoSection />
    </div>
  );
}
