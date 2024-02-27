import HoshiyarRehna from "./audios/Hoshiyar-Rehna.mp3";
import Manja from "./audios/Manja.mp3";
import MannKasturi from "./audios/Mann-Kasturi.mp3";
import MatkarMayaKoAhankar from "./audios/Matkar-Maya-Ko-Ahankar.mp3";
import KyaLekeAayaJagatMai from "./audios/Kya-Leke-Aaya-Jagat-Mai.mp3";
import AgarTumSaathHo from "./audios/Agar-Tum-Saath-Ho.mp3";
import Shayad from "./audios/Shayad.mp3";
import Ilahi from "./audios/Ilahi.mp3";
import MONTARE from "./audios/MONTA-RE.mp3";

export const audios = [
  {
    name: "Hoshiyar Rehna",
    music: HoshiyarRehna,
    creator: "Kabir Cafe",
  },
  {
    name: "Manja",
    music: Manja,
    creator: "Amit Trivedi",
  },
  {
    name: "Mann Kasturi",
    music: MannKasturi,
    creator: "Kabir Cafe",
  },
  {
    name: "Matkar Maya Ko Ahankar",
    music: MatkarMayaKoAhankar,
    creator: "Kabir Cafe",
  },
  {
    name: "Kya Leke Aaya Jagat Mai",
    music: KyaLekeAayaJagatMai,
    creator: "Kabir Cafe",
  },
  {
    name: "Agar Tum Saath Ho",
    music: AgarTumSaathHo,
    creator: "A.R. RAHMAN, ALKA YAGNIK, ARIJIT SINGH",
  },
  {
    name: "Shayad ",
    music: Shayad,
    creator: "Pritam, Arijit Singh",
  },
  {
    name: "Ilahi",
    music: Ilahi,
    creator: "Arijit Singh, Pritam",
  },
  {
    name: "MONTA RE",
    music: MONTARE,
    creator: "SWANAND KIRKIRE, AMITABH BHATTACHARYA, AMIT TRIVEDI",
  },
].sort(() => 0.5 - Math.random());
