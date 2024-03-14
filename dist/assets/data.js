import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../src/firebase/config';

export const data = [
  {
    id: 1,
    imgUrl: 'Bingo Image.png',
    link: 'https://andresrivasrod.github.io/microproyecto1/',
    name: 'Bingo'
  },
  {
    id: 2,
    imgUrl: 'Memory Game Image.png',
    link: 'https://andresrivasrod.github.io/memory-game/',
    name: 'Memory Game'
  },
  {
    id: 3,
    imgUrl: 'Pomodoro Image.png',
    link: 'https://andresrivasrod.github.io/pomodoro-timer/',
    name: 'Pomodoro Timer'
  },
  {
    id: 4,
    imgUrl: 'Weather App.png',
    link: 'https://andresrivasrod.github.io/weather-app/',
    name: 'Weather App'
  }
];

// Obtener las URLs de las imágenes de Firebase Storage
const fetchImageUrls = async () => {
  const promises = data.map(async (project) => {
    const projectImgRef = ref(storage, project.imgUrl);
    try {
      const url = await getDownloadURL(projectImgRef);
      project.imgUrl = url;
      console.log(`URL de la imagen para ${project.name}: ${url}`);
    } catch (error) {
      console.error(`Error al obtener la URL de la imagen para ${project.name}`, error);
    }
  });

  await Promise.all(promises);
};

fetchImageUrls();

export default data;
