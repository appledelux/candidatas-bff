export const mergeById = (arr1: any[], arr2: any[]) => {
  const map = new Map();

  // Añadir todos los objetos del primer array al Map
  arr1.forEach((item) => map.set(item._id, { ...item }));

  // Fusionar los objetos del segundo array en el Map basado en el id
  arr2.forEach((item) => {
    if (map.has(item._id)) {
      map.set(item._id, { ...map.get(item._id), ...item });
    } else {
      map.set(item._id, { ...item });
    }
  });

  // Convertir el Map a array
  return Array.from(map.values());
};
