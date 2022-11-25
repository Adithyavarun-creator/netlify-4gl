export const size = {
  //big desktops
  LaptopsDesktopMin: "1025px",
  LaptopsDesktopMax: "1280px",
  //tablets and ipads
  TabletIpadsMin: "768px",
  TabletIpadsMax: "1024px",
  //small tabs
  TabletsMobilesMin: "481px",
  TabletsMobilesMax: "767px",
  //mobile devices
  SmallMobileMin: "280px",
  SmallMobileMax: "480px",
};

export const devices = {
  bigLaptopsAndDesktops: `(min-width: ${size.LaptopsDesktopMin}) and (max-width: ${size.LaptopsDesktopMax})`,
  tabletsAndIpads: `(min-width: ${size.TabletIpadsMin}) and (max-width: ${size.TabletIpadsMax})`,
  smallTabs: `(min-width: ${size.TabletsMobilesMin}) and (max-width: ${size.TabletsMobilesMax})`,
  smallMobiles: `(min-width: ${size.SmallMobileMin}) and (max-width: ${size.SmallMobileMax})`,
};

/*
@media ${devices.bigLaptopsAndDesktops} {
}

@media ${devices.tabletsAndIpads} {
 
}
@media ${devices.smallTabs} {
  
}

@media ${devices.smallMobiles} {
  
}

*/
