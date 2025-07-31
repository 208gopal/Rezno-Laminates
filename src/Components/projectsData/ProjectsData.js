import data from './ImportImages';

const generateProjects = (count, titles, imagesList) =>
  Array(count).fill().map((_, i) => ({
    id: i + 1,
    title: titles[i % titles.length],
    images: imagesList[i] || []
  }));

export const projectsData = {
  HPL: data.hplProjects,
  terracotta: data.terracottaProjects,
  pergola: data.pergolaProjects,
  cubicles: data.cubiclesProjects,
  porcelato: data.porcelatoProjects,
  pinewood: data.pinewoodProjects,
};

export const categories = [
  { key: 'HPL', label: 'HPL' },
  { key: 'terracotta', label: 'Terracotta' },
  { key: 'pergola', label: 'Pergola & Decking' },
  { key: 'cubicles', label: 'Toilet Cubicles' },
  { key: 'porcelato', label: 'Porcelato Tiles' },
  { key: 'pinewood', label: 'Pinewood' }
];