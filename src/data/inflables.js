export const categoriasInflables = [
    { slug: "todos", nombre: "Todos" },
    { slug: "castillos", nombre: "Castillos" },
    { slug: "acuaticos", nombre: "Acuáticos" },
    { slug: "tematicos", nombre: "Temáticos" },
];

export const inflablesData = [
    {
        id: 1,
        nombre: "Titan Castle XL",
        tipo: "castillos",
        destacado: true,
        descripcion: "Castillo grande con tobogán, ideal para grupos numerosos y fiestas con mucha diversión.",
        medidas: "6x6x4.5 m",
        capacidad: "10-12 niños",
        edad: "4-12 años",
        imagen: "/image/inflables/titan-castle-xl.jpg",
        galeria: []
    },
    {
        id: 2,
        nombre: "Mini Jump Classic",
        tipo: "castillos",
        destacado: false,
        descripcion: "Castillo clásico y colorido, perfecto para los más pequeños y espacios reducidos.",
        medidas: "4x4 m",
        capacidad: "6-8 niños",
        edad: "3-8 años",
        imagen: "/image/inflables/mini-jump-classic.jpg",
        galeria: []
    },
    {
        id: 3,
        nombre: "Fun Zone Pro",
        tipo: "castillos",
        destacado: false,
        descripcion: "Castillo con toboganes pequeños, pensado para los peques de la casa.",
        medidas: "4x4 m",
        capacidad: "6-8 niños",
        edad: "3-8 años",
        imagen: "/image/inflables/fun-zone-pro.jpg",
        galeria: []
    },
    {
        id: 4,
        nombre: "Mega Party",
        tipo: "castillos",
        destacado: false,
        descripcion: "Castillo con tobogán grande para fiestas con muchos invitados.",
        medidas: "6x6x4.5 m",
        capacidad: "12-15 niños",
        edad: "4-12 años",
        imagen: "/image/inflables/mega-party.jpg",
        galeria: []
    },
    {
        id: 5,
        nombre: "Agua Slide",
        tipo: "acuaticos",
        destacado: true,
        descripcion: "Tobogán de agua con alberca, la mejor opción para refrescarse en días de calor.",
        medidas: "8x3 m",
        capacidad: "4 niños por turno",
        edad: "5-12 años",
        imagen: "/image/inflables/agua-slide.jpg",
        galeria: [
            "/image/inflables/agua-slide-2.jpg"
        ]
    },
    {
        id: 6,
        nombre: "Galaxy Jump",
        tipo: "tematicos",
        destacado: true,
        descripcion: "Inflable temático con castillo y tobogán, lleno de color y personajes.",
        medidas: "5x5 m",
        capacidad: "10-12 niños",
        edad: "4-11 años",
        imagen: "/image/inflables/galaxy-jump.jpg",
        galeria: []
    },
    {
        id: 7,
        nombre: "Turbo Slide Paw Patrol",
        tipo: "tematicos",
        destacado: true,
        descripcion: "Tobogán temático de Paw Patrol para los fans de la patrulla canina.",
        medidas: "7x4 m",
        capacidad: "4-6 niños por turno",
        edad: "6-14 años",
        imagen: "/image/inflables/turbo-slide-paw-patrol.jpg",
        galeria: []
    },
    {
        id: 8,
        nombre: "Colossus Transformers",
        tipo: "tematicos",
        destacado: false,
        descripcion: "Gran inflable temático de Transformers con torre y área de obstáculos.",
        medidas: "7x5 m",
        capacidad: "14-16 niños",
        edad: "6-14 años",
        imagen: "/image/inflables/colossus-transformers.jpg",
        galeria: []
    },
    {
        id: 9,
        nombre: "Extreme Slide Pro",
        tipo: "acuaticos",
        destacado: true,
        descripcion: "Tobogán de agua extremo con diseño tropical y alberca de llegada.",
        medidas: "10x5x6 m",
        capacidad: "3-4 niños por turno",
        edad: "7-12 años",
        imagen: "/image/inflables/extreme-slide-pro.jpg",
        galeria: []
    }
];

// Devuelve los inflables marcados como destacados (la estrella del PDF)
export function getDestacados() {
    return inflablesData.filter((item) => item.destacado);
}

// Busca un inflable por su id
export function getInflable(id) {
    return inflablesData.find((item) => String(item.id) === String(id));
}