const moviesMock = [
  {
    title: 'It Happened on Fifth Avenue',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    cover_src: 'http://dummyimage.com/177x175.bmp/dddddd/000000',
    logo_src: 'http://dummyimage.com/177x175.bmp/dddddd/000000',
    video_src: 'https://wufoo.com/nulla/suscipit.png',
    duration: 382,
    year: 1997,
    age_rate: 11,
    genres: [
      '5f0bab79baf3f20eec97888b',
      '5f0bab79baf3f20eec97888c',
      '5f0bab79baf3f20eec97888e',
    ],
    authors: [
      {
        name: 'Gregoor',
        surname: 'Heckner',
        position: 'Director',
      },
      {
        name: 'Rickey',
        surname: 'Cottrill',
        position: 'Writer',
      },
      {
        name: 'Terrye',
        surname: 'Stops',
        position: 'Cast',
      },
      {
        name: 'Titus',
        surname: 'Cuseck',
        position: 'Cast',
      },
      {
        name: 'Todd',
        surname: 'Iacoviello',
        position: 'Cast',
      },
      {
        name: 'Fanchon',
        surname: 'Dabs',
        position: 'Cast',
      },
      {
        name: 'Lindsay',
        surname: 'Bakhrushin',
        position: 'Cast',
      },
      {
        name: 'Naoma',
        surname: 'Cordrey',
        position: 'Cast',
      },
    ],
  },
  {
    title: '*batteries not included',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    cover_src: 'http://dummyimage.com/200x167.png/ff4444/ffffff',
    logo_src: 'http://dummyimage.com/200x167.png/ff4444/ffffff',
    video_src: 'http://ustream.tv/rutrum/neque/aenean/auctor.html',
    duration: 204,
    year: 1998,
    age_rate: 15,
    genres: [
      '5f0bab79baf3f20eec978891',
      '5f0bab79baf3f20eec978892',
      '5f0bab79baf3f20eec978893',
    ],
    authors: [
      {
        name: 'Elsey',
        surname: 'Marzelli',
        position: 'Director',
      },
      {
        name: 'Estel',
        surname: 'Kernaghan',
        position: 'Writer',
      },
      {
        name: 'Gayel',
        surname: 'Lloyd',
        position: 'Cast',
      },
      {
        name: 'Hieronymus',
        surname: 'Wynne',
        position: 'Cast',
      },
      {
        name: 'Frasier',
        surname: 'MacPhee',
        position: 'Cast',
      },
      {
        name: 'Harland',
        surname: 'Petrushka',
        position: 'Cast',
      },
    ],
  },
  {
    title: 'Trial of the Incredible Hulk, The',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    cover_src: 'http://dummyimage.com/127x147.png/5fa2dd/ffffff',
    logo_src: 'http://dummyimage.com/127x147.png/5fa2dd/ffffff',
    video_src: 'http://mashable.com/elementum/ligula/vehicula.jsp',
    duration: 164,
    year: 2000,
    age_rate: 14,
    genres: [
      '5f0bab79baf3f20eec97888d',
      '5f0bab79baf3f20eec97888f',
      '5f0bab79baf3f20eec978890',
    ],
    authors: [
      {
        name: 'Tilda',
        surname: 'Berrow',
        position: 'Director',
      },
      {
        name: 'Andree',
        surname: 'Bynert',
        position: 'Writer',
      },
      {
        name: 'Karita',
        surname: 'Widger',
        position: 'Cast',
      },
      {
        name: 'Anastasie',
        surname: 'Treves',
        position: 'Cast',
      },
      {
        name: 'Ramona',
        surname: 'Reading',
        position: 'Cast',
      },
      {
        name: 'Deerdre',
        surname: 'Lugg',
        position: 'Cast',
      },
      {
        name: 'Berton',
        surname: 'Baudrey',
        position: 'Cast',
      },
      {
        name: 'Vaughn',
        surname: 'Ringsell',
        position: 'Cast',
      },
      {
        name: 'Rogers',
        surname: 'Phettis',
        position: 'Cast',
      },
      {
        name: 'Nichol',
        surname: 'Frontczak',
        position: 'Cast',
      },
    ],
  },
  {
    title: 'Sweet Bird of Youth',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    cover_src: 'http://dummyimage.com/211x183.bmp/ff4444/ffffff',
    logo_src: 'http://dummyimage.com/211x183.bmp/ff4444/ffffff',
    video_src: 'https://illinois.edu/maecenas/tincidunt/lacus/at.jsp',
    duration: 240,
    year: 1996,
    age_rate: 9,
    genres: [
      '5f0bab79baf3f20eec978894',
      '5f0bab79baf3f20eec978895',
      '5f0bab79baf3f20eec978899',
    ],
    authors: [
      {
        name: 'Ethe',
        surname: 'Mendez',
        position: 'Director',
      },
      {
        name: 'Averell',
        surname: 'Tapner',
        position: 'Writer',
      },
      {
        name: 'Giordano',
        surname: 'Safe',
        position: 'Cast',
      },
      {
        name: 'Bryan',
        surname: 'Hillam',
        position: 'Cast',
      },
      {
        name: 'Morry',
        surname: 'Stanway',
        position: 'Cast',
      },
      {
        name: 'Barbie',
        surname: 'Vatcher',
        position: 'Cast',
      },
      {
        name: 'Gard',
        surname: 'Lyne',
        position: 'Cast',
      },
      {
        name: 'Melinda',
        surname: 'Ziehms',
        position: 'Cast',
      },
      {
        name: 'Carlynn',
        surname: 'Mc Caughen',
        position: 'Cast',
      },
      {
        name: 'Megan',
        surname: 'Childes',
        position: 'Cast',
      },
    ],
  },
  {
    title: 'Three Days of the Condor (3 Days of the Condor)',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    cover_src: 'http://dummyimage.com/143x244.bmp/ff4444/ffffff',
    logo_src: 'http://dummyimage.com/143x244.bmp/ff4444/ffffff',
    video_src: 'https://ocn.ne.jp/metus/sapien/ut/nunc.json',
    duration: 318,
    year: 1998,
    age_rate: 16,
    genres: [
      '5f0bab79baf3f20eec978897',
      '5f0bab79baf3f20eec97889b',
      '5f0bab79baf3f20eec978898',
    ],
    authors: [
      {
        name: 'Siobhan',
        surname: 'Gerram',
        position: 'Director',
      },
      {
        name: 'Shauna',
        surname: 'Gilli',
        position: 'Writer',
      },
      {
        name: 'Heather',
        surname: 'Normandale',
        position: 'Cast',
      },
      {
        name: 'Tisha',
        surname: 'Fellman',
        position: 'Cast',
      },
    ],
  },
  {
    title: 'Emma',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    cover_src: 'http://dummyimage.com/175x223.bmp/ff4444/ffffff',
    logo_src: 'http://dummyimage.com/175x223.bmp/ff4444/ffffff',
    video_src: 'https://answers.com/vitae/nisl/aenean/lectus.aspx',
    duration: 317,
    year: 2006,
    age_rate: 4,
    genres: [
      '5f0bab79baf3f20eec97889a',
      '5f0bab79baf3f20eec97889d',
      '5f0bab79baf3f20eec978896',
    ],
    authors: [
      {
        name: 'Becky',
        surname: 'Vowell',
        position: 'Director',
      },
      {
        name: 'Silas',
        surname: 'Kneller',
        position: 'Writer',
      },
      {
        name: 'Melodee',
        surname: 'Lowde',
        position: 'Cast',
      },
      {
        name: 'Ailey',
        surname: 'Stroder',
        position: 'Cast',
      },
      {
        name: 'Georgie',
        surname: 'Cowoppe',
        position: 'Cast',
      },
      {
        name: 'Emlyn',
        surname: 'Dryden',
        position: 'Cast',
      },
      {
        name: 'Zacharie',
        surname: 'Barzen',
        position: 'Cast',
      },
    ],
  },
  {
    title: 'Rovaniemen markkinoilla',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    cover_src: 'http://dummyimage.com/146x151.jpg/ff4444/ffffff',
    logo_src: 'http://dummyimage.com/146x151.jpg/ff4444/ffffff',
    video_src:
      'https://istockphoto.com/ante/vivamus/tortor/duis/mattis/egestas/metus.html',
    duration: 298,
    year: 1993,
    age_rate: 5,
    genres: [
      '5f0bab79baf3f20eec97889c',
      '5f0bab79baf3f20eec97889e',
      '5f0bab79baf3f20eec97889f',
    ],
    authors: [
      {
        name: 'Fabio',
        surname: 'Camblin',
        position: 'Director',
      },
      {
        name: 'Stacy',
        surname: 'Duggon',
        position: 'Writer',
      },
      {
        name: 'Grazia',
        surname: 'Arghent',
        position: 'Cast',
      },
      {
        name: 'Patricio',
        surname: 'McRory',
        position: 'Cast',
      },
      {
        name: 'Loraine',
        surname: 'Mence',
        position: 'Cast',
      },
      {
        name: 'Brandtr',
        surname: 'Houlridge',
        position: 'Cast',
      },
      {
        name: 'Glenine',
        surname: 'Procter',
        position: 'Cast',
      },
    ],
  },
  {
    title: 'Animal House',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    cover_src: 'http://dummyimage.com/178x115.png/dddddd/000000',
    logo_src: 'http://dummyimage.com/178x115.png/dddddd/000000',
    video_src: 'http://yahoo.com/vestibulum/ante/ipsum/primis/in.json',
    duration: 354,
    year: 1993,
    age_rate: 10,
    genres: [
      '5f0bab79baf3f20eec9788a2',
      '5f0bab79baf3f20eec9788a1',
      '5f0bab79baf3f20eec9788a0',
    ],
    authors: [
      {
        name: 'Antonio',
        surname: 'Estevez',
        position: 'Director',
      },
      {
        name: 'Josias',
        surname: 'Wroth',
        position: 'Writer',
      },
      {
        name: 'Tamqrah',
        surname: 'Wardel',
        position: 'Cast',
      },
    ],
  },
  {
    title: 'The Kiss of Her Flesh',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    cover_src: 'http://dummyimage.com/123x126.png/cc0000/ffffff',
    logo_src: 'http://dummyimage.com/123x126.png/cc0000/ffffff',
    video_src:
      'https://reddit.com/ligula/vehicula/consequat/morbi/a/ipsum.aspx',
    duration: 128,
    year: 1996,
    age_rate: 11,
    genres: [
      '5f0bab79baf3f20eec9788a0',
      '5f0bab79baf3f20eec9788a1',
      '5f0bab79baf3f20eec9788a2',
    ],
    authors: [
      {
        name: 'Archambault',
        surname: 'Bond',
        position: 'Director',
      },
      {
        name: 'Rivkah',
        surname: 'Learman',
        position: 'Writer',
      },
      {
        name: 'Petronella',
        surname: 'Thurstan',
        position: 'Cast',
      },
      {
        name: 'Alexina',
        surname: 'Cahn',
        position: 'Cast',
      },
      {
        name: 'Louie',
        surname: 'Wahlberg',
        position: 'Cast',
      },
      {
        name: 'Barton',
        surname: 'Coatman',
        position: 'Cast',
      },
      {
        name: 'Fabiano',
        surname: 'Jodrellec',
        position: 'Cast',
      },
      {
        name: 'Crichton',
        surname: 'Staning',
        position: 'Cast',
      },
      {
        name: 'Halimeda',
        surname: 'Moorhead',
        position: 'Cast',
      },
      {
        name: 'Randie',
        surname: 'Dougherty',
        position: 'Cast',
      },
    ],
  },
  {
    title: 'Visit, The',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    cover_src: 'http://dummyimage.com/162x111.jpg/5fa2dd/ffffff',
    logo_src: 'http://dummyimage.com/162x111.jpg/5fa2dd/ffffff',
    video_src:
      'http://disqus.com/sapien/quis/libero/nullam/sit/amet/turpis.jsp',
    duration: 381,
    year: 2010,
    age_rate: 12,
    genres: [
      '5f0bab79baf3f20eec97889f',
      '5f0bab79baf3f20eec97889e',
      '5f0bab79baf3f20eec97889c',
    ],
    authors: [
      {
        name: 'Fayette',
        surname: 'Towle',
        position: 'Director',
      },
      {
        name: 'Olvan',
        surname: 'Kerwin',
        position: 'Writer',
      },
      {
        name: 'Carry',
        surname: 'Pawelski',
        position: 'Cast',
      },
      {
        name: 'Tabitha',
        surname: 'Haining',
        position: 'Cast',
      },
      {
        name: 'Thekla',
        surname: 'Adhams',
        position: 'Cast',
      },
      {
        name: 'Morgen',
        surname: 'Durning',
        position: 'Cast',
      },
      {
        name: 'Bernie',
        surname: 'Carik',
        position: 'Cast',
      },
      {
        name: 'Cristen',
        surname: 'Wegman',
        position: 'Cast',
      },
      {
        name: 'Joanna',
        surname: 'Felipe',
        position: 'Cast',
      },
      {
        name: 'Tate',
        surname: 'Lyons',
        position: 'Cast',
      },
    ],
  },
];

module.exports = moviesMock;
