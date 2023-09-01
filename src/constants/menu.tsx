import { appetizers, flagsCDN, sandwiches } from "./images";

export interface menuItem {
  name: string, 
  price: string, 
  description: string,
  image: string,
  flag?: string,
}

export const menuItems = {
  APPETIZER: [
    {
      name: 'rings',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: appetizers.rings,
    },
    {
      name: 'poppers',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: appetizers.poppers,
    },
    {
      name: 'coliflor',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: appetizers.coli,
    },
  ] as menuItem[],
  SANDWICHES: [
    {
      name: 'honduras',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: sandwiches.hn,
      flag: flagsCDN + 'hn.png',
    },
    {
      name: 'italia',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: sandwiches.ita,
      flag: flagsCDN + 'it.png',
    },
    {
      name: 'cuba',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: sandwiches.cub,
      flag: flagsCDN + 'cu.png',
    },
    {
      name: 'peru',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: sandwiches.pe,
      flag: flagsCDN + 'pe.png',
    },
    {
      name: 'argentina',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: sandwiches.arg,
      flag: flagsCDN + 'ar.png',
    },
    {
      name: 'us',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: sandwiches.us,
      flag: flagsCDN + 'us.png',
    },
    {
      name: 'guatemala',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: sandwiches.gt,
      flag: flagsCDN + 'gt.png',
    },
  ] as menuItem[],
  DRINKS: [] as menuItem[],
  DESSERTS: [
    {
      name: 'francia',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: '',
    },
    {
      name: 'italia',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: '',
    },
    {
      name: 'inglaterra',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: '',
    },
  ] as menuItem[],
};

export const menuItemTypes = {
  'Entradas': 'APPETIZER',
  'Bebidas': 'DRINKS',
  'Sandwiches': 'SANDWICHES',
  'Postres': 'DESSERTS',
};

export const menuDropdownOptions = ['Entradas', 'Bebidas', 'Sandwiches', 'Postres'];