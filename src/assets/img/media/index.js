import media1 from "./bg_01.jpeg";
import media2 from "./bg_02.jpeg";
import media3 from "./bg_03.jpeg";
import media4 from "./bg_04.jpeg";
// import media5 from "../projects/To-do list.png";

export const media = [media1, media2, media3, media4];
export const mediaByIndex = (index) => media[index % media.length];
