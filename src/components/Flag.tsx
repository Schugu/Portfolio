import { useEffect, useState } from "react";

import Tooltip from "./tooltip/Tooltip.tsx";

type FlagProp = {
  country: string;
  width: number;
  height: number;
  tabIndex?: number;
}

export default function Flag({ country, width, height, tabIndex }: FlagProp) {
  const [icono, setIcono] = useState('');

  useEffect(() => {
    switch (country.toLowerCase()) {
      case 'argentina':
        setIcono('icon-[openmoji--flag-argentina]');
        break;
      case 'united-states':
        setIcono('icon-[openmoji--flag-united-states]');
        break;
      case 'brasil':
        setIcono('icon-[openmoji--flag-brazil]');
        break;
      case 'canada':
        setIcono('icon-[openmoji--flag-canada]');
        break;
      case 'spain':
        setIcono('icon-[openmoji--flag-spain]');
        break;
      case 'japan':
        setIcono('icon-[openmoji--flag-japan]');
        break;
      case 'peru':
        setIcono('icon-[openmoji--flag-peru]');
        break;
      default:
        setIcono('icon-[openmoji--white-square-flag]');
    }
  }, [country]);

  return (
    <Tooltip text={country}>
      <span className={`w-${width} h-${height} ${icono}`} tabIndex={tabIndex} aria-label={country}/>
    </Tooltip>
  )
}
