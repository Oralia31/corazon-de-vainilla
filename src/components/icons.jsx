import React from "react";

// =============================================
// Iconos de redes sociales — Corazón de Vainilla
// Color principal de marca: #8E283F (vino tinto)
// =============================================

export const FacebookIcon = ({ size = 28, color = "#8E283F" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill={color} />
    <path
      d="M13.4 18V12.3H15.4L15.7 10H13.4V8.5C13.4 7.9 13.6 7.4 14.5 7.4H15.7V5.4C15.2 5.3 14.4 5.3 13.6 5.3C11.8 5.3 10.5 6.4 10.5 8.4V10H8.5V12.3H10.5V18H13.4Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const InstagramIcon = ({ size = 28, color = "#8E283F" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke={color} strokeWidth="2.1" />
    <circle cx="12" cy="12" r="4.3" stroke={color} strokeWidth="2.1" />
    <circle cx="17.2" cy="6.8" r="1.15" fill={color} />
  </svg>
);

export const WhatsAppIcon = ({ size = 28, color = "#8E283F" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3C7.03 3 3 7.03 3 12C3 13.62 3.43 15.15 4.19 16.48L3 21L7.69 19.83C8.98 20.57 10.44 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z"
      stroke={color}
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.05 13.44C14.66 13.25 13.66 12.75 13.47 12.68C13.28 12.62 13.15 12.58 13.01 12.78C12.87 12.98 12.47 13.44 12.35 13.57C12.23 13.71 12.11 13.73 11.91 13.63C11.71 13.53 11.08 13.33 10.33 12.66C9.74 12.14 9.34 11.49 9.23 11.29C9.11 11.1 9.22 10.99 9.32 10.89C9.41 10.8 9.52 10.66 9.62 10.54C9.72 10.42 9.75 10.34 9.82 10.21C9.88 10.08 9.85 9.96 9.8 9.86C9.75 9.76 9.35 8.78 9.19 8.38C9.03 7.99 8.86 8.04 8.74 8.04C8.62 8.04 8.49 8.03 8.36 8.03C8.22 8.03 8.01 8.08 7.82 8.28C7.64 8.48 7.12 8.97 7.12 9.97C7.12 10.97 7.85 11.93 7.95 12.07C8.05 12.2 9.39 14.27 11.44 15.15C13.15 15.89 13.8 15.75 14.15 15.68C14.54 15.61 15.35 15.17 15.52 14.7C15.69 14.23 15.69 13.83 15.64 13.74C15.59 13.66 15.45 13.61 15.05 13.44Z"
      fill={color}
    />
  </svg>
);
