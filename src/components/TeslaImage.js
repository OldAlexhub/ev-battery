import React from "react";

const TeslaImage = ({ selectedOption }) => {
  let selectedImage;
  if (selectedOption === "315") {
    selectedImage =
      "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_1_1280.jpg";
  } else if (selectedOption === "358") {
    selectedImage =
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=STUD_3QTR&size=1400&model=m3&options=$DV2W,$IN3PB,$PMNG,$PRM31,$SC04,$MDL3,$W38B,$MT302,$CPF0,$RSF1&crop=1400,850,300,130&";
  } else if (selectedOption === "333") {
    selectedImage =
      "https://www.electrive.com/wp-content/uploads/2022/04/tesla-model-3-2022-01-min.png";
  } else if (selectedOption === "272") {
    selectedImage =
      "https://mysterio.yahoo.com/mysterio/api/66364019ED66A913241AC8CF8FA95E9E168F20AB4AA554D71B731547737CBDBE/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC80TSC032A021001.jpg";
  } else if (selectedOption === "330") {
    selectedImage =
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=STUD_3QTR&size=1400&model=my&options=$APBS,$DV4W,$INPB0,$PBSB,$PRMY1,$SC04,$MDLY,$WY20P,$MTY11,$STY7S,$CPF0,$TW01&crop=1400,850,300,130&";
  } else if (selectedOption === "303") {
    selectedImage =
      "https://www.evrides.com/wp-content/uploads/2023/02/TMYP2022-web.png";
  } else if (selectedOption === "405") {
    selectedImage =
      "https://images.hgmsites.net/hug/2014-tesla-model-s_100484787_h.jpg";
  } else if (selectedOption === "396") {
    selectedImage =
      "https://thedriven.io/wp-content/uploads/2019/09/model-s-001.jpg";
  } else if (selectedOption === "348") {
    selectedImage =
      "https://images.hgmsites.net/med/2017-tesla-model-x_100585121_m.jpg";
  } else if (selectedOption === "333B") {
    selectedImage =
      "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-01-27-at-6-16-08-pm-1611789398.png?crop=0.736xw:0.637xh;0.151xw,0.147xh&resize=1200:*";
  } else if (selectedOption === "/") {
    selectedImage =
      "https://electrek.co/wp-content/uploads/sites/3/2021/05/Tesla-Logo-Hero.jpg?quality=82&strip=all&w=1024";
  }

  return selectedImage ? (
    <img src={selectedImage} alt="Selected Option" className="selected-image" />
  ) : null;
};

export default TeslaImage;
