function importAllImagesHPL() {
  const allImages = import.meta.glob(
    '/src/assets/HPL/*/*',
    { eager: true }
  );

  const folderMap = {};

  Object.entries(allImages).forEach(([path, mod]) => {
    const match = path.match(/\/HPL\/([^/]+)\//);
    if (match) {
      const folder = match[1];
      if (!folderMap[folder]) folderMap[folder] = [];
      folderMap[folder].push(mod.default);
    }
  });

  return Object.entries(folderMap).map(([title, images], i) => ({
    id: i + 1,
    title,
    images
  }));
}

function importAllImagesTerracotta() {
  const allImages = import.meta.glob(
    '/src/assets/Terracotta/*/*',
    { eager: true }
  );

  const folderMap = {};

  Object.entries(allImages).forEach(([path, mod]) => {
    const match = path.match(/\/Terracotta\/([^/]+)\//);
    if (match) {
      const folder = match[1];
      if (!folderMap[folder]) folderMap[folder] = [];
      folderMap[folder].push(mod.default);
    }
  });

  return Object.entries(folderMap).map(([title, images], i) => ({
    id: i + 1,
    title,
    images
  }));
}

function importAllImagesCubicles() {
  const allImages = import.meta.glob(
    '/src/assets/Toilet Cubicles/*/*',
    { eager: true }
  );

  const folderMap = {};

  Object.entries(allImages).forEach(([path, mod]) => {
    const match = path.match(/\/Toilet Cubicles\/([^/]+)\//);
    if (match) {
      const folder = match[1];
      if (!folderMap[folder]) folderMap[folder] = [];
      folderMap[folder].push(mod.default);
    }
  });

  return Object.entries(folderMap).map(([title, images], i) => ({
    id: i + 1,
    title,
    images
  }));
}

function importAllImagesPorcelato() {
  const allImages = import.meta.glob(
    '/src/assets/Porcelato/*/*',
    { eager: true }
  );

  const folderMap = {};

  Object.entries(allImages).forEach(([path, mod]) => {
    const match = path.match(/\/Porcelato\/([^/]+)\//);
    if (match) {
      const folder = match[1];
      if (!folderMap[folder]) folderMap[folder] = [];
      folderMap[folder].push(mod.default);
    }
  });

  return Object.entries(folderMap).map(([title, images], i) => ({
    id: i + 1,
    title,
    images
  }));
}

function importAllImagesPinewood() {
  const allImages = import.meta.glob(
    '/src/assets/Pinewood/*/*',
    { eager: true }
  );

  const folderMap = {};

  Object.entries(allImages).forEach(([path, mod]) => {
    const match = path.match(/\/Pinewood\/([^/]+)\//);
    if (match) {
      const folder = match[1];
      if (!folderMap[folder]) folderMap[folder] = [];
      folderMap[folder].push(mod.default);
    }
  });

  return Object.entries(folderMap).map(([title, images], i) => ({
    id: i + 1,
    title,
    images
  }));
}

function importAllImagesPergola() {
  const allImages = import.meta.glob(
    '/src/assets/Pergola/*/*',
    { eager: true }
  );

  const folderMap = {};

  Object.entries(allImages).forEach(([path, mod]) => {
    const match = path.match(/\/Pergola\/([^/]+)\//);
    if (match) {
      const folder = match[1];
      if (!folderMap[folder]) folderMap[folder] = [];
      folderMap[folder].push(mod.default);
    }
  });

  return Object.entries(folderMap).map(([title, images], i) => ({
    id: i + 1,
    title,
    images
  }));
}

const hplProjects = importAllImagesHPL();
const terracottaProjects = importAllImagesTerracotta();
const cubiclesProjects = importAllImagesCubicles();
const porcelatoProjects = importAllImagesPorcelato();
const pinewoodProjects = importAllImagesPinewood();
const pergolaProjects = importAllImagesPergola();

export default {hplProjects, terracottaProjects, cubiclesProjects, porcelatoProjects, pinewoodProjects, pergolaProjects};