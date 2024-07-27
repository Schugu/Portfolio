import { useEffect, useState } from "react";

interface IconosTechsProps {
  tech: string;
  tabIndex?: number;
  color?: string;
}

const IconosTechs = ({ tech, tabIndex, color = "text-[var(--color-text-first)]" }: IconosTechsProps) => {
  const [icono, setIcono] = useState<React.ReactNode>();
  const [iconoSize, setIconoSize] = useState<React.ReactNode>();

  useEffect(() => {
    switch (tech.toLowerCase()) {
      case 'html':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--html5-fill]`}></span>)
        break;
      case 'css':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--css3-fill]`}></span>)
        break;
      case 'tailwind':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--tailwind-css-fill]`}></span>)
        break;
      case 'javascript':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--javascript-fill]`}></span>)
        break;
      case 'react':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--reactjs-fill]`}></span>)
        break;
      case 'next.js':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--nextjs-fill]`}></span>)
        break;
      case 'mongodb':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--mongodb]`}></span>)
        break;
      case 'firebase':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--firebase-fill]`}></span>)
        break;
      case 'git':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[mdi--git]`}></span>)
        break
      case 'github':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--github-fill]`}></span>)
        break
      case 'typescript':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[bxl--typescript]`}></span>)
        break
      case 'node.js':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--nodejs-fill]`}></span>)
        break
      case 'c#':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[teenyicons--c-sharp-outline]`}></span>)
        break
      case 'solidworks':
        setIconoSize('w-5 h-5 md:w-7 md:h-7');
        setIcono(
          <svg className={`w-full h-full ${color}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.99,22.4c0-.82,0-1.64,0-2.45,0-.89,0-1.78,0-2.67,0-.82,0-1.64,0-2.45,0-.89,0-1.78,0-2.67,0-.82,0-1.64,0-2.45,0-.89,0-1.78,0-2.67,0-.66-.03-1.32,0-1.98,0-.09,0-.19-.08-.26,0,0,0,0,0,0-.01-.12-.13-.12-.21-.15-.34-.12-.7-.2-1.04-.32-.27-.07-.53-.15-.8-.23-.65-.19-1.3-.39-1.94-.58-1.14-.37-2.29-.69-3.43-1.04-.32-.09-.64-.2-.96-.29-.32-.1-.63-.21-.96-.29-.25-.06-.48-.21-.75-.18-.06-.01-.13-.03-.19-.04-1.72-.52-3.44-1.03-5.16-1.56-.33-.1-.64-.17-.97-.03-.03.01-.05.03-.08.04-2.55.77-5.11,1.54-7.66,2.3-.38.11-.75.27-1.15.32-.11,0-.22.03-.32.06-.78.23-1.56.48-2.34.71-1.03.31-2.06.64-3.09.93-.18.1-.42.08-.58.23-.07.07-.2.04-.26.12-.04.11-.02.23-.02.34C0,11.8,0,18.48,0,25.16c0,.31.03.54.39.61.04.08.12.1.2.13.21.08.43.17.63.26.58.22,1.15.46,1.73.7.63.25,1.27.49,1.89.75.26.1.51.2.77.31.63.26,1.26.5,1.89.76.6.24,1.2.47,1.79.73.62.21,1.22.48,1.83.72.26.1.52.2.77.31.33.13.66.27.99.39.3.11.58.29.92.32.64.26,1.28.51,1.93.76.09.04.18.13.31.07.09-.03.18-.06.27-.09.62-.24,1.24-.49,1.86-.74.03-.02.06-.04.1-.05,1.7-.68,3.39-1.36,5.09-2.04,1-.4,1.99-.79,2.99-1.19.18.03.31-.08.46-.14,1.32-.52,2.63-1.05,3.94-1.58.34-.13.67-.28,1.02-.4.18-.05.25-.18.26-.36,0-.11,0-.23,0-.34-.02-.88,0-1.76,0-2.65ZM11.68,23.11c-.28,1.25-1.2,1.87-2.53,1.66-1.86-.3-3.21-1.31-4.16-2.83-.49-.78-.76-1.64-.79-2.55,0-.17,0-.24.21-.16.44.16.88.31,1.33.45.14.04.17.12.18.25.06,1.54,1.12,2.69,2.71,2.97.71.12,1.2-.19,1.3-.87.14-.87-.16-1.61-.81-2.23-.58-.55-1.25-.99-1.88-1.48-.83-.65-1.59-1.36-2.12-2.27-.53-.92-.74-1.9-.55-2.95.26-1.4,1.37-2.14,2.83-1.88,2,.36,3.25,1.55,3.98,3.3.23.55.34,1.13.37,1.73,0,.15-.03.19-.18.13-.47-.16-.95-.31-1.42-.45-.15-.04-.19-.11-.2-.25-.04-.87-.36-1.63-1.11-2.16-.41-.29-.87-.46-1.38-.5-.62-.05-1.04.24-1.17.82-.14.63-.01,1.2.38,1.72.46.6,1.06,1.06,1.68,1.49.96.67,1.86,1.41,2.53,2.36.6.86.89,1.81.89,2.84,0,.29-.02.57-.08.85ZM29.13,11.47c-.46,3-.92,6-1.38,9-.12.79-.24,1.58-.36,2.37-.02.11-.07.17-.18.21-.4.15-.79.3-1.18.46-.15.06-.19.02-.21-.12-.47-2.4-.95-4.8-1.43-7.2-.08-.42-.17-.83-.3-1.25-.08.43-.15.85-.23,1.28-.51,2.87-1.02,5.74-1.53,8.61-.02.12-.08.17-.19.21-.42.16-.83.31-1.24.49-.16.07-.2.03-.22-.12-.22-1.26-.45-2.51-.67-3.77-.49-2.72-.98-5.43-1.46-8.15-.06-.31-.06-.31.25-.41.39-.13.79-.26,1.18-.4.13-.05.19-.05.21.11.46,2.91.92,5.83,1.38,8.74.02.1.04.21.09.31.07-.41.14-.81.21-1.22.51-2.98,1.02-5.96,1.54-8.93.01-.08.01-.15.11-.19.42-.13.83-.27,1.26-.42.56,2.95,1.12,5.88,1.68,8.81.03,0,.05,0,.08,0,.08-.55.15-1.1.23-1.64.34-2.47.68-4.94,1.02-7.41.03-.21.06-.42.09-.64,0-.06,0-.13.08-.16.48-.16.95-.32,1.46-.48-.1.65-.19,1.27-.29,1.89Z" /></svg>
        )
        break
      case '3d builder':
        setIconoSize('w-5 h-5 md:w-7 md:h-7');
        setIcono(
          <svg className={`w-full h-full ${color}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 31.65"><path d="M19.33.28c-.57-.42-1.11-.12-1.64.09C12.28,2.56,6.88,4.78,1.45,6.94.37,7.38,0,8.05,0,9.18c.04,4.97.01,9.95.02,14.92,0,.67-.14,1.43.7,1.79,2.16-.05,3.86-1.43,5.84-2.02,1.11-.33,1.51-1.09,1.5-2.22-.05-3.98-.04-7.97-.05-11.95-.07-.08-.09-.18-.1-.28.03.09.07.18.1.28.47-.53,1.12-.54,1.74-.63,2.69-.38,5.37-.74,8.06-1.13.72-.1,1.58-.06,1.65-1.13.01-1.95.02-3.9.04-5.86,0,0,0,0,0,0-.05-.22-.11-.45-.16-.67Z" /><path d="M32,27.87c0-7.8-.03-15.61-.05-23.41,0-.81-.58-1.06-1.2-1.27-3.07-1.01-6.14-2.02-9.2-3.02-.56-.18-1.15-.4-1.38.44,0,0,0,0,0,0-.29.66-.2,1.37-.2,2.06.02,8.97.04,17.94.07,26.91,0,.52.01,1.05.12,1.55.08.38.31.61.68.48.07-.01.13-.04.2-.08,0,0,0,0,0,0,0,0,0,0,0,0,.15,0,.31-.01.46-.02,0,0,0,0,0,0,0,0,0,0,0,0,3.52-.33,6.89-1.27,10.18-2.5,0,0,0,0,0,0,0,0,0,0,0,0,.11-.38.31-.76.31-1.14ZM27.51,17.63c.63-1.56,1.19-2.97,1.83-4.56.76,3.49.49,4.23-1.83,4.56ZM28.8,21.92c-1,.22-1.98.52-3.18.84.34-1.78.86-3.06,2.68-3.13.46-.02,1.21-.77,1.27.33.04.7.48,1.67-.77,1.95ZM29.02,23.86c.65.04.61.43.57.81-.07.66.4,1.59-.77,1.79-.23.04-.44.12-.67.18-1.44.34-2.89.68-4.54,1.07.71-2.37,3.17-3.99,5.41-3.86Z" /></svg>
        )
        break
      case 'meshmixer':
        setIconoSize('w-5 h-5 md:w-7 md:h-7');
        setIcono(
          <svg className={`w-full h-full ${color}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.31 27.72"><path d="M32.3,14.47h0,0M30.43,14.97c-.18.31-.35.62-.51.93-.17.31-.34.62-.51.92-1.33,2.27-2.65,4.55-3.96,6.83-.53.92-1.06,1.84-1.59,2.75-.23-.34-.44-.71-.65-1.09-.15-.26-.3-.52-.45-.77-1.01-1.65-2.09-3.42-3.14-5.22-.04-.06-.08-.13-.12-.19.04-.01.08-.03.11-.04l.08-.03c3.59-1.37,7.17-2.73,10.76-4.09M31.6,13.77c-.23,0-.44.13-.66.21-3.85,1.46-7.7,2.92-11.54,4.39-.27.1-.54.19-.72.44-.16.38.11.64.27.91,1.03,1.76,2.09,3.5,3.15,5.24.54.89,1,1.83,1.68,2.63.04.02.08.03.12.03.03,0,.05,0,.08-.01.1-.13.2-.26.29-.4,1.93-3.33,3.84-6.67,5.78-9.99.63-1.08,1.14-2.24,1.95-3.2v-.14s-.04-.04-.06-.04c-.02,0-.03,0-.05.02-.1-.06-.2-.08-.29-.08h0Z" /><path d="M5.76,12.09h0,0M5.54,12.17c.13.45.17.94.21,1.45.02.24.04.48.07.72.19,1.55.38,3.1.58,4.65.23,1.82.46,3.68.68,5.54-.74-1.25-1.47-2.5-2.2-3.76-.73-1.26-1.46-2.52-2.18-3.78-.55-.96-1.1-1.92-1.66-2.87-.02-.03-.03-.05-.04-.08,0-.01-.01-.02-.02-.04.05-.02.1-.04.15-.06,1.45-.58,2.9-1.16,4.35-1.74l.07-.03M5.73,11.34c-.18,0-.36.1-.54.16-1.45.57-2.9,1.16-4.35,1.74-.26.11-.53.22-.7.46-.03.02-.05.03-.08.03-.02,0-.04,0-.05-.01v.29c.22.09.28.31.38.49,1.28,2.22,2.55,4.44,3.84,6.65,1.25,2.15,2.51,4.29,3.77,6.43.21-.23.12-.49.1-.75-.46-4.2-1.03-8.39-1.53-12.58-.11-.91-.09-1.85-.45-2.73-.12-.14-.25-.19-.38-.19h0Z" /><path d="M6.9,12.6l2.91,1.72c2.61,1.55,5.22,3.09,7.83,4.64h0c-.46.48-.99.89-1.55,1.33-.29.23-.59.46-.87.7-1.08.91-2.18,1.82-3.28,2.72-1.09.89-2.21,1.81-3.32,2.75l-.83-6.67-.89-7.2M6.1,11.39s0,0,0,0c-.03.01-.06.03-.1.04.67,5.38,1.33,10.76,2,16.15.1.12.22.14.34.14.11,0,.22-.02.33-.02h0c2.43,0,4.86,0,7.29,0s4.95,0,7.42,0h0c.1,0,.21.02.31.02s.21-.03.29-.13c-.03-.02-.07-.03-.11-.03-.27-.16-.57-.18-.87-.18-.08,0-.16,0-.24,0-.77,0-1.54,0-2.31,0h-1.59c-3.09,0-6.19,0-9.28,0h0c-.1,0-.21,0-.32,0-.15,0-.3-.01-.47-.08,2.33-1.97,4.65-3.82,6.92-5.73.98-.82,2.05-1.53,2.88-2.53.03-.07.04-.14.02-.22-.12-.26-.36-.37-.58-.5-3.75-2.23-7.51-4.45-11.27-6.68-.2-.12-.4-.25-.65-.25h0Z" /><path d="M19.12,5.19h0,0M19.1,5.73c1.86,1.28,3.73,2.55,5.6,3.83,1.95,1.33,3.89,2.65,5.84,3.99l-1.49.56c-2.06.78-4.12,1.56-6.18,2.34-1.02.39-2.03.78-3.05,1.18l-.73.29c0-1.22,0-2.44,0-3.66,0-2.8,0-5.69.01-8.53M18.75,4.68c-.07,0-.14.02-.22.06-.09.09-.13.21-.15.33,0,.07-.02.14-.02.21-.03,4.25-.01,8.51-.01,12.76,0,.29.07.56.22.82h.04s.04.06.06.06c.02,0,.04-.02.06-.05,1.47-.57,2.95-1.15,4.42-1.72,2.91-1.11,5.83-2.21,8.75-3.31,0-.16-.03-.3-.18-.39-4.15-2.86-8.33-5.68-12.48-8.53-.15-.1-.3-.24-.49-.24h0Z" /><path d="M8.6.59h0,0M8.48.85c1.89.8,3.8,1.65,5.64,2.48,1.07.48,2.14.96,3.21,1.43-.04.02-.09.05-.13.07l-.13.06c-2.57,1.33-5.17,2.7-7.68,4.04l-2.64,1.4s-.05.02-.07.04c.03-.18.07-.36.1-.54.03-.16.07-.32.1-.48.26-1.47.52-2.95.77-4.42l.53-3.02c.08-.45.17-.78.3-1.06M8.29,0C8.04,0,7.94.21,7.85.43c-.21.43-.33.88-.41,1.35-.43,2.48-.86,4.96-1.3,7.44-.11.65-.32,1.29-.24,1.97.15.14.29.19.42.19.29,0,.54-.25.78-.38,3.44-1.82,6.86-3.65,10.32-5.44.38-.19.77-.37,1.06-.7.1-.48-.31-.55-.59-.67C14.73,2.81,11.61,1.35,8.44.02,8.38,0,8.33,0,8.29,0h0Z" /><path d="M23.72,1.02c1.99,3.44,3.99,6.89,5.98,10.34-3.33-2.27-6.66-4.55-9.99-6.83.68-.57,1.34-1.16,1.98-1.74.66-.59,1.34-1.2,2.03-1.77M23.89.03c-.23.08-.41.21-.6.37-1.44,1.19-2.77,2.49-4.21,3.67-.19.16-.42.32-.38.63.03.04.05.08.09.11,4.16,2.84,8.32,5.69,12.48,8.53.09.06.18.16.3.16.04,0,.09-.01.14-.05-.02-.07-.02-.14-.06-.2-2.45-4.25-4.91-8.5-7.37-12.74-.11-.18-.18-.39-.4-.47h0Z" /><path d="M11.63.77h10.28c-1.02.91-2.04,1.82-3.06,2.73-.13.11-.25.23-.37.36-.46-.34-.97-.52-1.43-.69-.23-.08-.45-.16-.65-.25-1.58-.74-3.2-1.45-4.77-2.14M8.44.02c.09.22.31.29.5.38,2.38,1.06,4.78,2.1,7.15,3.2.8.37,1.73.5,2.34,1.23.02.04.04.06.07.06.02,0,.04-.01.07-.04.05-.05.09-.09.14-.14.22-.21.42-.44.65-.64,1.51-1.35,3.02-2.69,4.54-4.03-5.15,0-10.3,0-15.45,0h0Z" /><path d="M8.26,1.03h0,0M6.46,4.14c-.09.54-.18,1.07-.27,1.61-.21,1.26-.42,2.52-.63,3.78l-.23,1.36-.84.33-2.67,1.04.11-.19c.87-1.53,1.73-3.06,2.61-4.58.64-1.12,1.29-2.23,1.93-3.34M7.85.43c-.2.08-.26.26-.35.43-1.21,2.09-2.42,4.17-3.62,6.26-1.26,2.19-2.5,4.39-3.74,6.59.24-.09.49-.17.73-.27,1.71-.67,3.42-1.34,5.13-2h0s.04-.01.05-.03c.02-.02.01-.05-.03-.09.3-1.81.6-3.63.91-5.44.31-1.81.62-3.63.93-5.44h0Z" /><path d="M18.45,19.97c.44.82.93,1.61,1.41,2.37.31.51.63,1.02.93,1.53.56.95,1.13,1.9,1.7,2.84l.06.1c-4.11,0-8.21,0-12.32.01l1-.84,5.69-4.74,1.53-1.28M18.61,18.86c-2.62,2.18-5.24,4.37-7.86,6.55-.81.67-1.61,1.34-2.46,2.05.16.07.2.11.24.11h0c5.12,0,10.23,0,15.35-.02-.82-1.35-1.65-2.7-2.44-4.06-.9-1.54-1.91-3.02-2.71-4.63-.04,0-.08,0-.12-.01h0Z" /><path d="M17.81,6v4.61s0,6.93,0,6.93l-1.11-.66c-1.77-1.05-3.54-2.11-5.31-3.16-1.15-.68-2.31-1.36-3.46-2.03l-.47-.28.86-.45c1.56-.81,3.11-1.62,4.67-2.43,1.37-.71,2.73-1.43,4.1-2.15l.73-.38M18.42,4.83c-1.93,1.01-3.86,2.03-5.79,3.04-2.2,1.15-4.41,2.3-6.61,3.45-.01.04-.02.08-.02.11,1.67.98,3.35,1.95,5.01,2.94,2.52,1.49,5.03,2.99,7.55,4.49,0-4.67,0-9.34,0-14.01,0,0-.02,0-.03,0-.04,0-.07,0-.11-.02h0Z" /></svg>
        )
        break
      case 'ultimaker cura':
        setIconoSize('w-5 h-5 md:w-7 md:h-7');
        setIcono(
          <svg className={`w-full h-full ${color}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.29 32"><path d="M31.29.73C31.3.17,31.17,0,30.6,0c-6.49.02-12.98.02-19.47,0-.41,0-.7.13-.98.42C6.92,3.74,3.7,7.05.46,10.34.13,10.67,0,11.01,0,11.48.02,18.05.02,24.63,0,31.2c0,.63.15.8.78.8,6.44-.02,12.89-.02,19.33,0,.46,0,.79-.14,1.11-.47,3.2-3.3,6.41-6.58,9.63-9.86.31-.31.44-.62.44-1.07-.02-3.3,0-6.6,0-9.9,0-3.32-.01-6.65.01-9.97ZM23.79,23.29c.01.43-.12.59-.56.58-2.61-.02-5.22.05-7.83-.03-4.45-.12-7.58-3.3-7.84-7.85-.11-1.86.1-3.67.97-5.33,1.49-2.84,3.91-4.12,6.98-4.21,1.18-.03,2.35,0,3.53,0,1.32,0,2.64.04,3.95-.02.68-.03.83.22.8.86-.05.96-.05,1.93,0,2.89.03.62-.14.83-.78.82-2.45-.04-4.89-.03-7.34,0-1.9.02-3.27,1.18-3.66,3.07-.43,2.1.37,4.07,2,4.88.6.3,1.25.4,1.92.4,2.35,0,4.7.03,7.05-.02.68-.01.83.21.8.86-.05,1.03-.03,2.07,0,3.11Z" /></svg>
        )
        break
      case 'prusa slicer':
        setIconoSize('w-5 h-5 md:w-7 md:h-7');
        setIcono(
          <svg className={`w-full h-full ${color}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.94 32"><path d="M23.94,18.54c.06,6.79-5.26,12.59-11.77,13.35-4.1.48-7.63-.61-10.75-3.26-.51-.44-.5-.61-.06-1.05,6.05-6.03,12.1-12.06,18.12-18.12.47-.47.71-.4,1.09.04,2.27,2.59,3.38,5.61,3.37,9.05Z" /><path d="M21.48,2.53C18.54.5,15.35-.37,11.77.14c-3.36.48-6.12,1.98-8.37,4.5C1.48,6.78.48,9.31.09,12.12c-.14.91-.11,1.88-.01,2.8.34,2.78,1.37,5.26,3.14,7.45.53.66.87.75,1.51.1,5.68-5.73,11.39-11.43,17.09-17.14,1.52-1.52,1.51-1.53-.34-2.8Z" /></svg>
        )
        break
      case 'express.js':
        setIconoSize('w-5 h-5 md:w-7 md:h-7');
        setIcono(
          <svg className={`w-full h-full ${color}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M8.36,8.51h0c-2.89.58-4.85,3.29-4.71,6.53h11.92c.29-4.24-3.16-7.36-7.21-6.53Z" /><path d="M28.4,0H3.6C1.61,0,0,1.61,0,3.6v24.79c0,1.99,1.61,3.6,3.6,3.6h24.79c1.99,0,3.6-1.61,3.6-3.6V3.6c0-1.99-1.61-3.6-3.6-3.6ZM8.74,24.59c-3.57-.27-6.54-3.43-6.67-7.1-.08-1.14-.09-2.27,0-3.41.26-2.57,1.44-4.52,3.53-5.73,2.81-1.61,6.46-1.16,8.82,1.06,1.38,1.31,2.16,2.96,2.14,4.94,0,.74.03,1.41,0,2.13-.06.2-.47.13-.7.13-3.97.01-7.94.02-11.92,0-.55,0-.66.15-.62.68.22,3.16,1.68,4.88,5.12,6h.03c.56.09,1.12.09,1.69,0,1.55-.38,2.94-1.03,3.9-2.37.18-.25.37-.5.5-.77.36-.72.92-.97,1.69-.78-.61,3.09-4.05,5.47-7.51,5.22ZM27.76,23.24v.02c-1.49-1.94-2.97-3.88-4.42-5.83-.29-.4-.44-.5-.79-.03-1.44,1.94-2.94,3.83-4.37,5.77-.59.79-1.3,1.14-2.39.96,1.39-1.84,2.73-3.6,4.07-5.37.64-.85,1.27-1.71,1.95-2.53.27-.33.21-.52-.02-.83-1.78-2.31-3.53-4.63-5.29-6.95-.12-.16-.31-.3-.32-.58.95-.15,1.68.14,2.26.92,1.35,1.82,2.75,3.62,4.1,5.44.32.43.47.44.79,0,1.34-1.81,2.73-3.57,4.06-5.38.6-.82,1.34-1.11,2.41-.98-1.09,1.44-2.14,2.83-3.2,4.22-.82,1.07-1.61,2.16-2.46,3.21-.34.42-.27.69.03,1.07,1.92,2.49,3.82,5,5.73,7.5.04.05.06.12.1.18-.95.28-1.59.05-2.24-.81Z" /></svg>
        )
        break
      case 'c++':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[nonicons--c-plusplus-16]`}></span>);
        break
      case 'c':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[nonicons--c-16]`}></span>);
        break
      case 'python':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ant-design--python-outlined]`}></span>);
        break
      case 'google suite':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ph--google-drive-logo]`}></span>);
        break
      case 'microsoft office':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[hugeicons--office-365]`}></span>);
        break
      case 'jira':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--jira]`}></span>);
        break
      case 'trello':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--trello-fill]`}></span>);
        break
      case 'slack':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[mdi--slack]`}></span>);
        break
      case 'illustrator':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[hugeicons--adobe-illustrator]`}></span>);
        break
      case 'photoshop':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[hugeicons--adobe-photoshop]`}></span>);
        break
      case 'sql':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[hugeicons--sql]`}></span>);
        break
      case 'mysql':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[devicon-plain--mysql]`}></span>);
        break
      case 'mariadb':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--mariadbfoundation]`}></span>);
        break
      case 'visual studio code':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[codicon--vscode-insiders]`}></span>);
        break
      case 'visual studio':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[fontisto--visual-studio]`}></span>);
        break
      case '.net':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[devicon-plain--dot-net]`}></span>);
        break
      case 'unity':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[cib--unity]`}></span>);
        break
      case 'unreal':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[mdi--unreal]`}></span>);
        break
      case 'dialogflow':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--dialogflow]`}></span>);
        break
      case 'npm':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--npmjs-line]`}></span>);
        break
      case 'eslint':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[mdi--eslint]`}></span>);
        break
      case 'postman':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--postman]`}></span>);
        break
      case 'thunder client':
        setIconoSize('w-5 h-5 md:w-7 md:h-7');
        setIcono(
          <svg className={`w-full h-full ${color}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M11.24,17.97c-.6,0-1.2-.01-1.8,0-.55.01-.98-.18-1.24-.67-.27-.5-.14-.95.16-1.4,1.8-2.66,3.59-5.32,5.38-7.99.69-1.03,1.38-2.06,2.08-3.09.45-.67,1.03-.9,1.63-.66.59.23.83.8.73,1.61-.27,2.22-.53,4.44-.8,6.66-.05.42.04.59.5.58,1.49-.03,2.98,0,4.48-.01.59,0,1.12.11,1.43.68.31.58.08,1.07-.26,1.55-2.79,3.97-5.56,7.94-8.35,11.91-.55.78-1.21.98-1.84.57-.49-.32-.62-.8-.56-1.35.27-2.51.53-5.03.81-7.54.09-.85.11-.85-.74-.85-.54,0-1.08,0-1.62,0Z" /><path d="M16,0C7.16,0,0,7.16,0,16s7.16,16,16,16,16-7.16,16-16S24.84,0,16,0ZM16,29.85c-7.65,0-13.85-6.2-13.85-13.85S8.35,2.15,16,2.15s13.85,6.2,13.85,13.85-6.2,13.85-13.85,13.85Z" /></svg>)
        break

      default:
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[hugeicons--image-not-found-01]`}></span>);
    }
  }, [tech, color]);

  return (
    <div
      tabIndex={tabIndex} aria-label={`${tech} `}
      className={`flex items - center justify - center ${iconoSize} ${color} `}
    >
      {icono}
    </div>
  );
};

export default IconosTechs;