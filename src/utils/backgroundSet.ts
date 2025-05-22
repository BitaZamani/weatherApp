const backgroundSet = (code: number) => {
    switch (code) {
      case 1000:
        return {
          day: "/assets/sunnyday.png",
          night: "/assets/clearnight.png",
        };
  
      case 1003:
        return {
          day: "/assets/partlycloudyday.png",
          night: "/assets/partlycloudynight.png",
        };
  
      case 1006:
      case 1009:
        return {
          day: "/assets/cloudyday.png",
          night: "/assets/cloudynight.png",
        };
  
      
      case 1063:
      case 1072:
      case 1150:
      case 1153:
      case 1168:
      case 1171:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1192:
      case 1195:
      case 1198:
      case 1201:
      case 1204:
      case 1207:
      case 1240:
      case 1243:
      case 1246:
      case 1249:
      case 1252:
      case 1261:
      case 1264:
      case 1069:
      case 1237:
        return {
          day: "/assets/rainyday.png",
          night: "/assets/rainynight.png",
        };
  
      case 1066:
      case 1114:
      case 1117:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
      case 1255:
      case 1258:
        return {
          day: "/assets/snowyday.png",
          night: "/assets/snowynight.png",
        };
  
      case 1087:
        return {
          day: "/assets/thunderday.png",
          night: "/assets/thundernight.png",
        };
  
      case 1030:
      case 1135:
      case 1147:
        return {
          day: "/assets/fogday.png",
          night: "/assets/fognight.png",
        };
  
      case 1273:
      case 1276:
        return {
          day: "/assets/rainthunderday.png",
          night: "/assets/rainthundernight.png",
        };
  
      case 1279:
      case 1282:
        return {
          day: "/assets/snowthunderday.png",
          night: "/assets/snowthundernight.png",
        };
  
      
    }
  };
  
  export default backgroundSet;
  