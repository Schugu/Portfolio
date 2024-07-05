interface TechsProps {
  tech: string;
  tabIndex: number;
}

export default function Techs({ tech, tabIndex }: TechsProps) {
  let src: string;
  let alt: string;

  switch (tech) {
    case 'HTML':
      src = "https://img.shields.io/badge/HTML%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white";
      alt = "HTML";
      break;
    case 'JavaScript':
      src = "https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black";
      alt = "JavaScript";
      break;
    case 'CSS':
      src = "https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white";
      alt = "CSS";
      break;
    case 'React':
      src = "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB";
      alt = "React";
      break;
    case 'Next.js':
      src = "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white";
      alt = "Next.js";
      break;
    case 'Tailwind':
      src = "https://img.shields.io/badge/Tailwind_CSS-4392DB?style=for-the-badge&logo=tailwind-css&logoColor=white";
      alt = "Tailwind";
      break;
    case 'Node.js':
      src = "https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=node.js&logoColor=5fa04e";
      alt = "Node.js";
      break;
    case 'Express.js':
      src = "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white";
      alt = "Express.js";
      break;
    case 'MongoDB':
      src = "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white";
      alt = "MongoDB";
      break;
    case 'TypeScript':
      src = "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white";
      alt = "TypeScript";
      break;
    case 'Firebase':
      src = "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black";
      alt = "Firebase";
      break;
    default:
      return (
        <div>Unknown technology: {tech}</div>
      );
  }

  return (
    <img
      className="h-6 md:h-8"
      src={src}
      alt={alt}
      tabIndex={tabIndex}
    />
  );
}
