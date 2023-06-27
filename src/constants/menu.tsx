import { appetizers } from "./images";

export interface menuItem {
  name: string, 
  price: string, 
  description: string,
  image: string
}

export const menuItems = {
  APPETIZER: [
    {
      name: 'nachos',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: appetizers.nachos,
    },
    {
      name: 'frenchFries',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: appetizers.fries,
    },
    {
      name: 'wedges',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: appetizers.wedges,
    },
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
  ] as menuItem[],
  SANDWICHES: [
    {
      name: 'honduras',
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
      name: 'cuba',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: '',
    },
    {
      name: 'peru',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: '',
    },
    {
      name: 'argentina',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: '',
    },
    {
      name: 'us',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: '',
    },
    {
      name: 'guatemala',
      price: '100',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga quia rerum. Harum repudiandae in magni laboriosam nulla sunt enim deserunt, molestias amet deleniti, a, possimus corporis numquam! Non, laudantium.',
      image: '',
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