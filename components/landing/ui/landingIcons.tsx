import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "calendar"
  | "camera"
  | "car"
  | "check"
  | "cloud"
  | "compass"
  | "fuel"
  | "guide"
  | "heart"
  | "hotel"
  | "link"
  | "lock"
  | "map"
  | "menu"
  | "pin"
  | "play"
  | "route"
  | "share"
  | "shield"
  | "sparkles"
  | "star"
  | "sun"
  | "users"
  | "wallet"
  | "wind";

export const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="m9 18 6-6-6-6M4 12h11" />,
  calendar: <path d="M8 2v4m8-4v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z" />,
  camera: <path d="M5 7h3l2-3h4l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm7 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
  car: <path d="m5 11 2-5h10l2 5M4 11h16v7H4v-7Zm3 7v2m10-2v2M7 14h.01M17 14h.01" />,
  check: <path d="m5 12 4 4L19 6" />,
  cloud: <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 8.5 4.5 4.5 0 0 0 7 18Z" />,
  compass: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm3.5-13.5-2 5-5 2 2-5 5-2Z" />,
  fuel: <path d="M6 22V3h10v19M4 22h14M8 7h6v5H8V7Zm8 1 3 3v7a2 2 0 0 0 4 0v-6l-2-2" />,
  guide: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0m1-11v6m-3-3h6" />,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
  hotel: <path d="M4 21V5h10v16M14 10h6v11M8 9h2m-2 4h2m-2 4h2m8-3h-2m2 4h-2M2 21h20" />,
  link: <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1m2.6 5.4a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1" />,
  lock: <path d="M5 10h14v11H5V10Zm3 0V7a4 4 0 0 1 8 0v3m-4 4v3" />,
  map: <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  pin: <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  play: <path d="m8 5 11 7-11 7V5Z" />,
  route: <path d="M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.5 15.5c2-1 1.5-5 4-6.5 1.2-.8 2.3-.8 3-.6" />,
  share: <path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.6 11.5l6.8-4M8.6 12.5l6.8 4" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-5" />,
  sparkles: <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  sun: <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-15v2m0 16v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M2 12h2m16 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />,
  users: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.9m-2-12a4 4 0 0 1 0 7.8" />,
  wallet: <path d="M4 6h15a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h13v3m-1 6h4m-4 0v3" />,
  wind: <path d="M3 8h11a3 3 0 1 0-3-3M3 12h17M3 16h10a3 3 0 1 1-3 3" />,
};
