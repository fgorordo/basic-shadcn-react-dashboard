export type Article = {
  id: string;
  title: string;
  body: string;
  author: string;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
};


export const seedArticles: Article[] = [
    {
      id: "67fbf5eae18518d7e6cba7ab",
      title: "Elevando el potencial de la alfalfa con nanotecnología",
      body: `<img src="https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Alfalfa%20creditos%20photo-1.jpg" alt="Elevando el potencial de la alfalfa con nanotecnología"><p><strong>Argentina cuenta con condiciones ambientales diversas y favorables para la producción de alfalfa de alta calidad...</strong></p>`,
      author: "Kioshi Stone",
      imageURL: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Alfalfa%20creditos%20photo-1.jpg",
      createdAt: new Date(1744565738109).toLocaleDateString('es-ES'),
      updatedAt: new Date(1744565738109).toLocaleDateString('es-ES'),
    },
    {
      id: "67fbf5eae18518d7e6cba7ac",
      title: "Nanotecnología en la agricultura moderna",
      body: `<p>La nanotecnología está revolucionando la agricultura al mejorar la absorción de nutrientes...</p>`,
      author: "Kioshi Stone",
      imageURL: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Mist%20PRD.png",
      createdAt: new Date(1744565738109).toLocaleDateString('es-ES'),
      updatedAt: new Date(1744565738109).toLocaleDateString('es-ES'),
    },
    {
      id: "67fbf5eae18518d7e6cba7ad",
      title: "Fertilización foliar: una herramienta clave",
      body: `<p>La fertilización foliar se está consolidando como una práctica atractiva para los productores...</p>`,
      author: "Kioshi Stone",
      imageURL: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Aplicaci%C3%83%C2%B3n%20foliar.jpg",
      createdAt: new Date(1744565738109).toLocaleDateString('es-ES'),
      updatedAt: new Date(1744565738109).toLocaleDateString('es-ES'),
    },
    {
      id: "67fbf5eae18518d7e6cba7ae",
      title: "MIST-Prado®: Innovación en fertilización",
      body: `<p>MIST-Prado® es una dispersión de nanopartículas minerales especialmente diseñada para la nutrición de pasturas...</p>`,
      author: "Kioshi Stone",
      imageURL: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/Dosis%20Mist%20PRD.jpg",
      createdAt: new Date(1744565738109).toLocaleDateString('es-ES'),
      updatedAt: new Date(1744565738109).toLocaleDateString('es-ES'),
    },
    {
      id: "67fbf5eae18518d7e6cba7af",
      title: "Eficacia demostrada a campo",
      body: `<p>Un ensayo realizado en la Estación Experimental Agropecuaria de INTA Manfredi, Córdoba, evaluó la producción de biomasa...</p>`,
      author: "Kioshi Stone",
      imageURL: "https://kioshistone.nyc3.digitaloceanspaces.com/kioshistone/cuadro%20PRD.jpg",
      createdAt: new Date(1744565738109).toLocaleDateString('es-ES'),
      updatedAt: new Date(1744565738109).toLocaleDateString('es-ES'),
    },
    // Add 15 more articles with similar structure
    ...Array.from({ length: 50 }, (_, i) => ({
      id: `67fbf5eae18518d7e6cba7b${i + 10}`,
      title: `Sample Article Title ${i + 6}`,
      body: `<p>This is a sample body for article ${i + 6}. It contains placeholder content.</p>`,
      author: `Author ${i + 6}`,
      imageURL: `https://example.com/sample-image-${i + 6}.jpg`,
      createdAt: new Date(1744565738109 + i * 1000).toLocaleDateString('es-ES'),
      updatedAt: new Date(1744565738109 + i * 1000).toLocaleDateString('es-ES'),
    })),
  ];
