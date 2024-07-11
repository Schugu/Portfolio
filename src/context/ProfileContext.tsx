import { createContext, useContext, useEffect, useState } from 'react';
import { ProfileType, ProjectsType } from "@/types/ProfileContextTypes";

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
    Promise.all([
      fetch('/src/translations/es/profile.json').then(response => response.json()),
      fetch('/src/translations/es/projects.json').then(response => response.json())
    ])
      .then(([dataProfile, dataProjects]) => {
        // Simulación de retraso para mostrar indicador de carga
        // setTimeout(() => {
        setCombinedData({
          dataProfile,
          dataProjects,
          loading: false,
        });
        // }, 2000); 
      })
      .catch(error => {
        console.error('Error fetching profile and project data:', error);
      });
  }, []);

  return (
    <ProfileContext.Provider value={combinedData}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
