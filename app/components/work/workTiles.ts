export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/merge.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: 'I built',
    title: 'UIT - MAP platform',
    image: {
      src: '/static/images/project/uitmap.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I developed`,
    title: 'Devfest Website',
    image: {
      src: '/static/images/project/devfest.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'Espresso Entry Platform',
    image: {
      src: '/static/images/project/espresso.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I developed`,
    title: 'Wiki Tech India Website',
    image: {
      src: '/static/images/project/wiki.png',
      width: 600,
      height: 717,
    },
  },
];
