export interface Album {
  id: number;
  name: string;
  slug: string;
  cover: string;
  photos?: string[];
  subAlbums?: {
    name: string;
    photos: string[];
  }[];
}

export const ALBUMS: Album[] = [
  {
    id: 1,
    name: 'Janata Raja',
    slug: 'janata-raja',
    cover: 'assets/images/gallery/janata-raja/cover.jpg',
    photos: [
      'assets/images/gallery/janata-raja/1.jpg',
      'assets/images/gallery/janata-raja/2.jpg',
      'assets/images/gallery/janata-raja/3.jpg',
      'assets/images/gallery/janata-raja/4.jpg',
      'assets/images/gallery/janata-raja/5.jpg',
      'assets/images/gallery/janata-raja/6.jpg',
    ],
  },
  {
    id: 2,
    name: 'Pulostav',
    slug: 'pulostav',
    cover: 'assets/images/gallery/pulostav/cover.jpg',
    photos: [
      'assets/images/gallery/pulostav/1.jpg',
      'assets/images/gallery/pulostav/2.jpg',
      'assets/images/gallery/pulostav/3.jpg',
      'assets/images/gallery/pulostav/4.jpg',
      'assets/images/gallery/pulostav/5.jpg',
      'assets/images/gallery/pulostav/6.jpg',
      'assets/images/gallery/pulostav/7.jpg',
      'assets/images/gallery/pulostav/8.jpg',
      'assets/images/gallery/pulostav/9.jpg',
    ],
  },
  {
    id: 3,
    name: 'Rashtr ka Hunkar',
    slug: 'Rashtr ka Hunkar',
    cover: 'assets/images/gallery/Rashtr ka Hunkar/cover.jpg',
    photos: ['assets/images/gallery/Rashtr ka Hunkar/1.jpg'],
  },
  {
    id: 4,
    name: 'Interschool Sports',
    slug: 'Interschool Sports',
    cover: 'assets/images/gallery/Interschool Sports/cover.jpg',
    photos: [
      'assets/images/gallery/Interschool Sports/1.jpg',
      'assets/images/gallery/Interschool Sports/2.jpg',
      'assets/images/gallery/Interschool Sports/3.jpg',
    ],
  },
  {
    id: 5,
    name: '2024- 25',
    slug: '2024- 25',
    cover: 'assets/images/gallery/2024-25/cover.jpg',
    subAlbums: [
      {
        name: 'Ahilyadevi Holkar Tri Shatabdi Rangtrang',
        photos: [
          'assets/images/gallery/2024-25/ahilyadevi/1.jpg',
          'assets/images/gallery/2024-25/ahilyadevi/2.jpg',
          'assets/images/gallery/2024-25/ahilyadevi/3.jpg',
          'assets/images/gallery/2024-25/ahilyadevi/4.jpg',
          'assets/images/gallery/2024-25/ahilyadevi/5.jpg',
          'assets/images/gallery/2024-25/ahilyadevi/6.jpg',
        ],
      },
      {
        name: 'Sahitya Sammelan',
        photos: [
          'assets/images/gallery/2024-25/Sahitya Sammelan/1.jpg',
          'assets/images/gallery/2024-25/Sahitya Sammelan/2.jpg',
          'assets/images/gallery/2024-25/Sahitya Sammelan/3.jpg',
          'assets/images/gallery/2024-25/Sahitya Sammelan/4.jpg',
          'assets/images/gallery/2024-25/Sahitya Sammelan/5.jpg',
          'assets/images/gallery/2024-25/Sahitya Sammelan/6.jpg',
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'CBSE Bhumi Poojan',
    slug: 'CBSE Bhumi Poojan',
    cover: 'assets/images/gallery/CBSE Bhumi Poojan/cover.jpg',
    photos: [
      'assets/images/gallery/CBSE Bhumi Poojan/1.jpg',
      'assets/images/gallery/CBSE Bhumi Poojan/2.jpg',
      'assets/images/gallery/CBSE Bhumi Poojan/3.jpg',
      'assets/images/gallery/CBSE Bhumi Poojan/4.jpg',
    ],
  },
  {
    id: 7,
    name: 'Bhakti Sangam',
    slug: 'Bhakti Sangam',
    cover: 'assets/images/gallery/Bhakti Sangam/cover.jpg',
    photos: [
      'assets/images/gallery/Bhakti Sangam/1.jpg',
      'assets/images/gallery/Bhakti Sangam/2.jpg',
      'assets/images/gallery/Bhakti Sangam/3.jpg',
      'assets/images/gallery/Bhakti Sangam/4.jpg',
      'assets/images/gallery/Bhakti Sangam/5.jpg',
      'assets/images/gallery/Bhakti Sangam/6.jpg',
    ],
  },
  {
    id: 8,
    name: 'Roupya Mahostav',
    slug: 'Roupya Mahostav',
    cover: 'assets/images/gallery/Roupya Mahostav/cover.jpg',
    subAlbums: [
      {
        name: 'Krida Mahostav',
        photos: [
          'assets/images/gallery/Roupya Mahostav/krida/1.jpg',
          'assets/images/gallery/Roupya Mahostav/krida/2.jpg',
          'assets/images/gallery/Roupya Mahostav/krida/3.jpg',
          'assets/images/gallery/Roupya Mahostav/krida/4.jpg',
          'assets/images/gallery/Roupya Mahostav/krida/5.jpg',
          'assets/images/gallery/Roupya Mahostav/krida/6.jpg',
        ],
      },
      {
        name: 'Pathnatya',
        photos: [
          'assets/images/gallery/Roupya Mahostav/pathnatya/1.jpg',
          'assets/images/gallery/Roupya Mahostav/pathnatya/2.jpg',
          'assets/images/gallery/Roupya Mahostav/pathnatya/3.jpg',
        ],
      },

      {
        name: 'Sahitya Sammelan',
        photos: [
          'assets/images/gallery/Roupya Mahostav/Sahitya Sammelan/1.jpg',
          'assets/images/gallery/Roupya Mahostav/Sahitya Sammelan/2.jpg',
          'assets/images/gallery/Roupya Mahostav/Sahitya Sammelan/3.jpg',
          'assets/images/gallery/Roupya Mahostav/Sahitya Sammelan/4.jpg',
          'assets/images/gallery/Roupya Mahostav/Sahitya Sammelan/5.jpg',
          'assets/images/gallery/Roupya Mahostav/Sahitya Sammelan/6.jpg',
          'assets/images/gallery/Roupya Mahostav/Sahitya Sammelan/7.jpg',
          'assets/images/gallery/Roupya Mahostav/Sahitya Sammelan/8.jpg',
          'assets/images/gallery/Roupya Mahostav/Sahitya Sammelan/9.jpg',
        ],
      },
    ],
  },
  {
    id: 9,
    name: '2023-24',
    slug: '2023-24',
    cover: 'assets/images/gallery/2023-24/cover.jpg',
    subAlbums: [
      {
        name: 'Krida',
        photos: [
          'assets/images/gallery/2023-24/krida/1.jpg',
          'assets/images/gallery/2023-24/krida/2.jpg',
          'assets/images/gallery/2023-24/krida/3.jpg',
          'assets/images/gallery/2023-24/krida/4.jpg',
          'assets/images/gallery/2023-24/krida/5.jpg',
        ],
      },
      {
        name: 'Rang Tarang',
        photos: [
          'assets/images/gallery/2023-24/rang/1.jpg',
          'assets/images/gallery/2023-24/rang/2.jpg',
          'assets/images/gallery/2023-24/rang/3.jpg',
          'assets/images/gallery/2023-24/rang/4.jpg',
        ],
      },

      {
        name: 'Sahitya Sammelan',
        photos: [
          'assets/images/gallery/2023-24/Sahitya Sammelan/1.jpg',
          'assets/images/gallery/2023-24/Sahitya Sammelan/2.jpg',
          'assets/images/gallery/2023-24/Sahitya Sammelan/3.jpg',
          'assets/images/gallery/2023-24/Sahitya Sammelan/4.jpg',
          'assets/images/gallery/2023-24/Sahitya Sammelan/5.jpg',
        ],
      },
      {
        name: 'Swachhata Abhiyan',
        photos: [
          'assets/images/gallery/2023-24/Swachhata Abhiyan/1.jpg',
          'assets/images/gallery/2023-24/Swachhata Abhiyan/2.jpg',
          'assets/images/gallery/2023-24/Swachhata Abhiyan/3.jpg',
        ],
      },
    ],
  },
  {
    id: 10,
    name: '2022-23',
    slug: '2022-23',
    cover: 'assets/images/gallery/2022-23/cover.jpg',
    subAlbums: [
      {
        name: 'Amrut Mahotsav Rally',
        photos: [
          'assets/images/gallery/2022-23/amrut/1.jpg',
          'assets/images/gallery/2022-23/amrut/2.jpg',
          'assets/images/gallery/2022-23/amrut/3.jpg',
        ],
      },
      {
        name: 'Azadi ka Amrut Mahotsav',
        photos: [
          'assets/images/gallery/2022-23/azadi/1.jpg',
          'assets/images/gallery/2022-23/azadi/2.jpg',
          'assets/images/gallery/2022-23/azadi/3.jpg',
        ],
      },

      {
        name: 'Kala Mahotsav',
        photos: [
          'assets/images/gallery/2022-23/kala/1.jpg',
          'assets/images/gallery/2022-23/kala/2.jpg',
          'assets/images/gallery/2022-23/kala/3.jpg',
        ],
      },
      {
        name: 'Krida Mahotsav',
        photos: [
          'assets/images/gallery/2022-23/krida/1.jpg',
          'assets/images/gallery/2022-23/krida/2.jpg',
        ],
      },
      {
        name: 'Rang Tarang',
        photos: [
          'assets/images/gallery/2022-23/rang/1.jpg',
          'assets/images/gallery/2022-23/rang/2.jpg',
          'assets/images/gallery/2022-23/rang/3.jpg',
          'assets/images/gallery/2022-23/rang/4.jpg',
          'assets/images/gallery/2022-23/rang/5.jpg',
          'assets/images/gallery/2022-23/rang/6.jpg',
        ],
      },
      {
        name: 'Rashtriy Charchasatra',
        photos: [
          'assets/images/gallery/2022-23/rashtra/1.jpg',
          'assets/images/gallery/2022-23/rashtra/2.jpg',
          'assets/images/gallery/2022-23/rashtra/3.jpg',
        ],
      },

      {
        name: 'Swachata Abhiyan',
        photos: [
          'assets/images/gallery/2022-23/swachh/1.jpg',
          'assets/images/gallery/2022-23/swachh/2.jpg',
        ],
      },
    ],
  },
  {
    id: 11,
    name: '2021-22',
    slug: '2021-22',
    cover: 'assets/images/gallery/2021-22/cover.jpg',
    subAlbums: [
      {
        name: 'Krida',
        photos: [
          'assets/images/gallery/2021-22/krida/1.jpg',
          'assets/images/gallery/2021-22/krida/2.jpg',
          'assets/images/gallery/2021-22/krida/3.jpg',
          'assets/images/gallery/2021-22/krida/4.jpg',
          'assets/images/gallery/2021-22/krida/5.jpg',
          'assets/images/gallery/2021-22/krida/6.jpg',
          'assets/images/gallery/2021-22/krida/7.jpg',
          'assets/images/gallery/2021-22/krida/8.jpg',
          'assets/images/gallery/2021-22/krida/9.jpg',
          'assets/images/gallery/2021-22/krida/10.jpg',
          'assets/images/gallery/2021-22/krida/11.jpg',
          'assets/images/gallery/2021-22/krida/12.jpg',
        ],
      },
    ],
  },
  {
    id: 12,
    name: '2020-21',
    slug: '2020-21',
    cover: 'assets/images/gallery/2020-21/cover.jpg',
    subAlbums: [
      {
        name: 'Dive lagale re',
        photos: ['assets/images/gallery/2020-21/dive/1.jpg'],
      },
      {
        name: 'Guru Parmatma Pareshu',
        photos: ['assets/images/gallery/2020-21/guru/1.jpg'],
      },

      {
        name: 'Kala Mahotsav',
        photos: ['assets/images/gallery/2020-21/kala/1.jpg'],
      },
      {
        name: 'Rang Bavara shravan',
        photos: ['assets/images/gallery/2020-21/bavara/1.jpg'],
      },
      {
        name: 'Rangbhumi Din',
        photos: [
          'assets/images/gallery/2020-21/din/1.jpg',
          'assets/images/gallery/2020-21/din/2.jpg',
        ],
      },
      {
        name: 'Vasant Panchami',
        photos: [
          'assets/images/gallery/2020-21/vasant/1.jpg',
          'assets/images/gallery/2020-21/vasant/2.jpg',
          'assets/images/gallery/2020-21/vasant/3.jpg',
        ],
      },

      {
        name: 'Dr. B.N. Jagtap Prashikshan',
        photos: [
          'assets/images/gallery/2020-21/drbn/1.jpg',
          'assets/images/gallery/2020-21/drbn/2.jpg',
          'assets/images/gallery/2020-21/drbn/3.jpg',
        ],
      },
      {
        name: 'Paus Ganni',
        photos: [
          'assets/images/gallery/2020-21/paus/1.jpg',
          'assets/images/gallery/2020-21/paus/2.jpg',
          'assets/images/gallery/2020-21/paus/3.jpg',
        ],
      },
      {
        name: 'Sahyadritil Sat Ratne',
        photos: [
          'assets/images/gallery/2020-21/sat/1.jpg',
          'assets/images/gallery/2020-21/sat/2.jpg',
          'assets/images/gallery/2020-21/sat/3.jpg',
        ],
      },
      {
        name: 'Sangit Sabha',
        photos: ['assets/images/gallery/2020-21/sangit/1.jpg'],
      },
    ],
  },
];
