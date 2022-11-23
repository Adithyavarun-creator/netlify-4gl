export const size = {
  LaptopsDesktopMin: "1025px",
  LaptopsDesktopMax: "1280px",
  TabletIpadsMin: "768px",
  TabletIpadsMax: "1024px",
  TabletsMobilesMin: "481px",
  TabletsMobilesMax: "767px",
  SmallMobileMin: "320px",
  SmallMobileMax: "480px",
};

export const devices = {
  bigLaptopsAndDesktops: `(min-width: ${size.LaptopsDesktopMin}) and (max-width: ${size.LaptopsDesktopMax})`,
  tabletsAndIpads: `(min-width: ${size.TabletIpadsMin}) and (max-width: ${size.TabletIpadsMax})`,
  tabletsAndMobiles: `(min-width: ${size.TabletsMobilesMin}) and (max-width: ${size.TabletsMobilesMax})`,
  smallMobiles: `(min-width: ${size.SmallMobileMin}) and (max-width: ${size.SmallMobileMax})`,
};
