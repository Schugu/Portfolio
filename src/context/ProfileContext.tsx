import { createContext, useContext, useEffect, useState } from 'react';
import { ProfileType, ProjectsType } from "@/types/ProfileContextTypes";
import profileData from '@/translations/es/profile.json';
import projectsData from '@/translations/es/projects.json';

interface CombinedData {
  dataProfile: ProfileType | null;
  dataProjects: ProjectsType | null;
  loading: boolean;
}

interface ProfileProviderProps {
  children: React.ReactNode;
}

const ProfileContext = createContext<CombinedData | null>(null);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile debe usarse dentro de un ProfileProvider');
  }
  return context;
};

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [combinedData, setCombinedData] = useState<CombinedData>({
    dataProfile: null,
    dataProjects: null,
    loading: true,
  });

  useEffect(() => {
    setCombinedData({
      dataProfile: profileData,
      dataProjects: projectsData,
      loading: false,
    });
  }, []);

  return (
    <ProfileContext.Provider value={combinedData}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
