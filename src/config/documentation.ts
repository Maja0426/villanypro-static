
export type Article = {
  id: string;
  title: string;
  order: number;
  content: string;
};

export type DocumentationCategory = {
  id: string;
  title: string;
  order: number;
  articles: Article[];
};

export const documentation: DocumentationCategory[] = [
  {
    "id": "i5BfY8kKhFECaYGRmK3P",
    "title": "Első lépések",
    "order": 1,
    "articles": [
      {
        "id": "i722Gga3IVPgQBZPBB59",
        "title": "Bevezetés a VillanyPro-ba",
        "order": 1,
        "content": "Üdvözöljük a VillanyPro-ban! Ez az alkalmazás azért jött létre, hogy megkönnyítse a villanyszerelők napi adminisztrációs feladatait. Kezelje ügyfeleit, munkalapjait, készletét és kiadásait egy helyen, egyszerűen és hatékonyan."
      },
      {
        "id": "bEo8OdSIYHmH3HxiA9HP",
        "title": "A Vezérlőpult használata",
        "order": 2,
        "content": "A Vezérlőpult a központi oldal, ahol a legfontosabb információkat láthatja egy helyen:\n\n- **Statisztikai kártyák:** Gyors áttekintés az ügyfelek számáról, aktív és befejezett munkákról.\n- **Közelgő munkák:** A következő 5 ütemezett, \"Tervezett\" állapotú munkalap listája.\n- **Rendszerüzenetek:** Itt jelennek meg a fontos közlemények és hirdetmények."
      },
      {
        "id": "M0dcWnSTVvXe9TCQRXsI",
        "title": "Profil beállítások",
        "order": 3,
        "content": "A profilját a jobb felső sarokban lévő ikonra kattintva, a \"Profil\" menüponton keresztül érheti el. Itt adhatja meg a személyes és vállalkozási adatait, amelyek automatikusan megjelennek a generált dokumentumokon (pl. árajánlat, teljesítésigazolás).\n\n- **Személyes adatok:** Név, email, telefon, cím.\n- **Vállalkozási adatok:** Vállalkozásként működve megadhatja a cégnevét, adószámát, bankszámlaszámát.\n- **Adózási beállítások:** Beállíthatja, hogy alanyi adómentes (AAM) vagy ÁFA-körös vállalkozóként dolgozik. Ez befolyásolja az árak megjelenítését és számítását a dokumentumokon."
      }
    ]
  },
  {
    "id": "tcNsMhFEsOlOApkrx5r5",
    "title": "Ügyfélkezelés",
    "order": 2,
    "articles": [
      {
        "id": "C7XSdrTAbEi43gXaUsFy",
        "title": "Új ügyfél hozzáadása",
        "order": 1,
        "content": "Az \"Ügyfelek\" oldalon az \"Új ügyfél\" gombra kattintva vehet fel új partnert. Adja meg a nevét, email címét, telefonszámát és címét. Ezek az adatok később automatikusan kitöltésre kerülnek új munkalap létrehozásakor."
      },
      {
        "id": "HMlkS2i3LunbsB8eVI0v",
        "title": "Ügyfelek listázása és keresés",
        "order": 2,
        "content": "Az ügyfeleit listázva és kártya nézetben is megtekintheti, a felület automatikusan vált a képernyő méretének megfelelően. A keresőmező segítségével gyorsan megtalálhatja a kívánt ügyfelet név, email vagy cím alapján."
      },
      {
        "id": "rgFWzj0q10eGDDd9poLi",
        "title": "Ügyfél adatlapja",
        "order": 3,
        "content": "Egy ügyfél nevére kattintva megtekintheti annak adatlapját. Itt láthatja a részletes adatokat, a hozzá kapcsolódó összes munkalapot, és jegyzeteket fűzhet az ügyfélhez."
      }
    ]
  },
  {
    "id": "01deTWlWXbad8aqGy4nv",
    "title": "Munkalapok",
    "order": 3,
    "articles": [
      {
        "id": "f6TLoc6VOeTZP8ZjOeem",
        "title": "Munkalap létrehozása",
        "order": 1,
        "content": "Az \"Új munkalap\" gombra kattintva hozhat létre munkalapot. Válasszon egy ügyfelet a listából (a címe automatikusan betöltődik), adja meg a munka dátumát, típusát és egy részletes leírást. A munkalap kezdeti státusza \"Tervezett\" lesz."
      },
      {
        "id": "b5isu5H4mfkFhRKUEC5v",
        "title": "Tervezett költségek rögzítése",
        "order": 2,
        "content": "A munkalap létrehozásakor rögzíthet tervezett anyag- és munkadíj tételeket. Ezek fognak megjelenni az árajánlaton. Készleten lévő anyagokat is kiválaszthat, ilyenkor a rendszer automatikusan kitölti az anyag egységárát."
      },
      {
        "id": "3ARdmzulT96z0ev4UKoT",
        "title": "Munkalap állapotának kezelése",
        "order": 3,
        "content": "Egy munkalapnak három állapota lehet:\n\n- **Tervezett:** A munka még nem kezdődött el.\n- **Folyamatban:** A munka aktív.\n- **Befejezett:** A munka elkészült. Az állapotot a munkalapok listájában, a sor melletti legördülő menüből módosíthatja.\n\nA munka lezárásához (befejezetté tételéhez) a \"Szerkesztés\" menüponton belül a \"Munka lezárása\" gombot kell használni."
      },
      {
        "id": "W1WW9oTYhHefaLPZdCUw",
        "title": "Munka lezárása és tényleges költségek",
        "order": 4,
        "content": "Amikor egy munkát befejezetté tesz, meg kell adnia a ténylegesen felhasznált anyagokat és a valós munkaórákat. A rendszer alapértelmezetten átmásolja a tervezett költségeket, amelyeket szabadon módosíthat. A befejezett munkalapok adatai alapján készülnek a riportok és a teljesítésigazolás. A lezáráskor a felhasznált anyagok automatikusan levonódnak a készletből."
      },
      {
        "id": "Q4x4TguVYrs0Vcm4QvjR",
        "title": "Árajánlat és Teljesítésigazolás",
        "order": 5,
        "content": "A munkalap adatlapján generálhat Árajánlatot (PDF) a tervezett költségek alapján. A befejezett munkákhoz pedig Teljesítésigazolás (PDF) generálható a tényleges költségek alapján. Ezeket a dokumentumokat le is töltheti vagy a \"Basic\" és \"Pro\" csomagokban közvetlenül elküldheti emailben az ügyfélnek."
      }
    ]
  },
  {
    "id": "UNhxiG7j6ieg99kgsbaA",
    "title": "Pénzügyek",
    "order": 4,
    "articles": [
      {
        "id": "2GaItZxxHxNTBc0dKb9P",
        "title": "Készletkezelés",
        "order": 1,
        "content": "A \"Készletnyilvántartás\" menüpontban kezelheti anyagainak listáját. \n\n- **Új anyag:** Vegyen fel új anyagokat a készlethez, megadva a kezdő mennyiséget és a beszerzési árat. Ez a művelet automatikusan létrehoz egy kiadási tételt is.\n- **Bevételezés:** Meglévő anyagokhoz adhat hozzá újabb mennyiséget. Ez szintén rögzül a kiadások között.\n- **Automatikus levonás:** Amikor egy munkát lezár, a felhasznált anyagok mennyisége automatikusan csökken a készletben."
      },
      {
        "id": "xBnftwLt8jNRCiDc7mLf",
        "title": "Kiadások követése",
        "order": 2,
        "content": "A \"Kiadások\" oldalon rögzítheti a vállalkozásával kapcsolatos költségeket (pl. üzemanyag, szerszámvásárlás). A készlet bevételezések automatikusan ide kerülnek, de manuálisan is felvehet új tételeket."
      },
      {
        "id": "RyUIBzu9Wx1sR8LA6QTB",
        "title": "Jelentések",
        "order": 3,
        "content": "A \"Jelentések\" oldalon részletes kimutatásokat láthat a pénzügyeiről. Elemezheti bevételeit, kiadásait és a profit alakulását szűrt időszakokra. A grafikonok segítenek vizuálisan átlátni a vállalkozás teljesítményét. A \"Free\" csomagban az adatok korlátozott időszakra visszamenőleg érhetőek el."
      }
    ]
  }
];
