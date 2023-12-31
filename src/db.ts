import { ICustomer } from './app/shared/types/customer';
import { INotification } from './app/shared/types/notification';
import { SettingsType } from './app/shared/types/settings';
import { ITransaction } from './app/shared/types/transaction';
import { IUser } from './app/shared/types/user';

export const USER: IUser = {
  avatar: 'assets/img/useravatar.svg',
  name: 'John',
  balance: '$98,240',
  reach: {
    value: '1,35M',
    percentage: '3%',
    trend: 'UP',
    historical: [
      { 0: 0.351 },
      { 1: 1.435 },
      { 2: 1.135 },
      { 3: 1.635 },
      { 4: 1.479 },
      { 5: 2.031 },
      { 6: 1.993 },
      { 7: 1.8035 },
      { 8: 2.251 },
      { 9: 2.533 },
      { 10: 2.035 },
      { 11: 1.135 },
      { 12: 1.351 },
    ],
  },
  avg_cost_per_view: {
    value: '$0.79',
    percentage: '8%',
    trend: 'DOWN',
    historical: [
      { 0: 2.35 },
      { 1: 1.43 },
      { 2: 1.13 },
      { 3: 2.23 },
      { 4: 1.47 },
      { 5: 2.03 },
      { 6: 1.99 },
      { 7: 1.8 },
      { 8: 1.25 },
      { 9: 1.83 },
      { 10: 1.33 },
      { 11: 1.53 },
      { 12: 0.79 },
    ],
  },
  impressions: {
    value: '22 349',
    percentage: '10%',
    trend: 'UP',
    historical: [
      { 0: 5011 },
      { 1: 6115 },
      { 2: 4019 },
      { 3: 8019 },
      { 4: 7717 },
      { 5: 10011 },
      { 6: 9612 },
      { 7: 11007 },
      { 8: 12110 },
      { 9: 11088 },
      { 10: 20044 },
      { 11: 19033 },
      { 12: 22349 },
    ],
  },
  spent: {
    value: '$1225',
    percentage: '10%',
    trend: 'UP',
    historical: [
      { 0: 111 },
      { 1: 115 },
      { 2: 89 },
      { 3: 319 },
      { 4: 717 },
      { 5: 511 },
      { 6: 612 },
      { 7: 790 },
      { 8: 500 },
      { 9: 1088 },
      { 10: 2044 },
      { 11: 1133 },
      { 12: 1225 },
    ],
  },
};
export const CUSTOMERS: ICustomer[] = [
  {
    id: 1,
    first_name: 'Bill',
    last_name: 'Zuker',
    email: 'bzuker0@over-blog.com',
    gender: 'Female',
    last_activity: '5/2/2023',
    image: 'https://robohash.org/porroearumcum.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$1962.99',
    last_amount_spent: '$800.65',
    items_bought: 24,
  },
  {
    id: 2,
    first_name: 'Inger',
    last_name: 'Tichelaar',
    email: 'itichelaar1@ow.ly',
    gender: 'Male',
    last_activity: '8/9/2022',
    image: 'https://robohash.org/excepturiutbeatae.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$8440.08',
    last_amount_spent: '$318.87',
    items_bought: 28,
  },
  {
    id: 3,
    first_name: 'Eal',
    last_name: 'Akroyd',
    email: 'eakroyd2@deliciousdays.com',
    gender: 'Male',
    last_activity: '12/24/2022',
    image: 'https://robohash.org/maioresexquam.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$7918.40',
    last_amount_spent: '$795.56',
    items_bought: 46,
  },
  {
    id: 4,
    first_name: 'Karlene',
    last_name: "O'Cassidy",
    email: 'kocassidy3@storify.com',
    gender: 'Female',
    last_activity: '8/28/2022',
    image: 'https://robohash.org/pariatursuscipitet.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$4835.29',
    last_amount_spent: '$344.37',
    items_bought: 50,
  },
  {
    id: 5,
    first_name: 'Weylin',
    last_name: 'Mars',
    email: 'wmars4@wired.com',
    gender: 'Male',
    last_activity: '7/23/2022',
    image:
      'https://robohash.org/ullammaioresconsectetur.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$8432.42',
    last_amount_spent: '$827.55',
    items_bought: 4,
  },
  {
    id: 6,
    first_name: 'Rockie',
    last_name: 'McClenan',
    email: 'rmcclenan5@tripadvisor.com',
    gender: 'Male',
    last_activity: '8/16/2022',
    image:
      'https://robohash.org/consequaturconsectetursequi.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$1793.50',
    last_amount_spent: '$485.19',
    items_bought: 33,
  },
  {
    id: 7,
    first_name: 'Nevin',
    last_name: 'Peres',
    email: 'nperes6@state.tx.us',
    gender: 'Male',
    last_activity: '4/20/2023',
    image: 'https://robohash.org/veldoloromnis.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$3457.37',
    last_amount_spent: '$305.12',
    items_bought: 26,
  },
  {
    id: 8,
    first_name: 'Orin',
    last_name: 'Saile',
    email: 'osaile7@engadget.com',
    gender: 'Male',
    last_activity: '3/18/2023',
    image: 'https://robohash.org/impeditnequealias.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$6181.37',
    last_amount_spent: '$916.64',
    items_bought: 8,
  },
  {
    id: 9,
    first_name: 'Kare',
    last_name: 'Jozwicki',
    email: 'kjozwicki8@indiegogo.com',
    gender: 'Female',
    last_activity: '8/28/2022',
    image: 'https://robohash.org/optiorecusandaeomnis.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$5480.15',
    last_amount_spent: '$835.27',
    items_bought: 7,
  },
  {
    id: 10,
    first_name: 'Tootsie',
    last_name: 'Yarham',
    email: 'tyarham9@bbb.org',
    gender: 'Female',
    last_activity: '1/2/2023',
    image: 'https://robohash.org/etautut.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$2512.99',
    last_amount_spent: '$803.38',
    items_bought: 21,
  },
  {
    id: 11,
    first_name: 'Yulma',
    last_name: 'Arnke',
    email: 'yarnkea@qq.com',
    gender: 'Male',
    last_activity: '7/11/2023',
    image: 'https://robohash.org/aquibusdamet.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$6161.37',
    last_amount_spent: '$655.11',
    items_bought: 29,
  },
  {
    id: 12,
    first_name: 'Abby',
    last_name: 'Dulany',
    email: 'adulanyb@php.net',
    gender: 'Male',
    last_activity: '10/12/2022',
    image: 'https://robohash.org/placeatautut.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$1365.34',
    last_amount_spent: '$337.77',
    items_bought: 50,
  },
  {
    id: 13,
    first_name: 'Merilyn',
    last_name: 'Meiningen',
    email: 'mmeiningenc@nifty.com',
    gender: 'Female',
    last_activity: '3/23/2023',
    image: 'https://robohash.org/utundealiquam.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$7405.12',
    last_amount_spent: '$718.28',
    items_bought: 42,
  },
  {
    id: 14,
    first_name: 'Valeda',
    last_name: 'Davenall',
    email: 'vdavenalld@msu.edu',
    gender: 'Female',
    last_activity: '3/5/2023',
    image: 'https://robohash.org/illoveroofficiis.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$4892.21',
    last_amount_spent: '$730.38',
    items_bought: 21,
  },
  {
    id: 15,
    first_name: 'Marcellina',
    last_name: 'Siuda',
    email: 'msiudae@illinois.edu',
    gender: 'Female',
    last_activity: '11/8/2022',
    image: 'https://robohash.org/fugiteosaut.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$2698.97',
    last_amount_spent: '$601.17',
    items_bought: 28,
  },
  {
    id: 16,
    first_name: 'Carolann',
    last_name: 'Pedwell',
    email: 'cpedwellf@51.la',
    gender: 'Female',
    last_activity: '11/30/2022',
    image:
      'https://robohash.org/excepturivoluptatumeius.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$8396.32',
    last_amount_spent: '$364.01',
    items_bought: 6,
  },
  {
    id: 17,
    first_name: 'Mercy',
    last_name: 'Mollon',
    email: 'mmollong@mtv.com',
    gender: 'Female',
    last_activity: '9/15/2022',
    image: 'https://robohash.org/autquisrepellat.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$2881.08',
    last_amount_spent: '$783.86',
    items_bought: 49,
  },
  {
    id: 18,
    first_name: 'Noellyn',
    last_name: 'Capron',
    email: 'ncapronh@addtoany.com',
    gender: 'Genderqueer',
    last_activity: '7/19/2023',
    image:
      'https://robohash.org/expeditamolestiaedolore.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$9730.39',
    last_amount_spent: '$374.71',
    items_bought: 4,
  },
  {
    id: 19,
    first_name: 'Sonny',
    last_name: 'Thumann',
    email: 'sthumanni@miitbeian.gov.cn',
    gender: 'Genderqueer',
    last_activity: '5/25/2023',
    image:
      'https://robohash.org/expeditarepudiandaequi.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$9717.64',
    last_amount_spent: '$350.62',
    items_bought: 25,
  },
  {
    id: 20,
    first_name: 'Sansone',
    last_name: 'Brighouse',
    email: 'sbrighousej@icq.com',
    gender: 'Polygender',
    last_activity: '8/19/2022',
    image: 'https://robohash.org/quisextempore.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$5490.61',
    last_amount_spent: '$863.65',
    items_bought: 40,
  },
  {
    id: 21,
    first_name: 'Mirabel',
    last_name: 'Covet',
    email: 'mcovetk@barnesandnoble.com',
    gender: 'Female',
    last_activity: '11/20/2022',
    image: 'https://robohash.org/aperiamsedin.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$2821.58',
    last_amount_spent: '$251.24',
    items_bought: 2,
  },
  {
    id: 22,
    first_name: 'Derrek',
    last_name: 'Cartner',
    email: 'dcartnerl@google.es',
    gender: 'Male',
    last_activity: '4/1/2023',
    image: 'https://robohash.org/doloremvoluptatesipsa.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$7099.04',
    last_amount_spent: '$303.95',
    items_bought: 28,
  },
  {
    id: 23,
    first_name: 'Clarette',
    last_name: 'Caffrey',
    email: 'ccaffreym@yandex.ru',
    gender: 'Female',
    last_activity: '5/13/2023',
    image: 'https://robohash.org/nemoutomnis.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$5131.21',
    last_amount_spent: '$599.53',
    items_bought: 37,
  },
  {
    id: 24,
    first_name: 'Melodie',
    last_name: 'Le Conte',
    email: 'mleconten@sphinn.com',
    gender: 'Female',
    last_activity: '7/29/2022',
    image: 'https://robohash.org/iureipsavitae.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$8067.25',
    last_amount_spent: '$386.01',
    items_bought: 34,
  },
  {
    id: 25,
    first_name: 'Clara',
    last_name: 'Parr',
    email: 'cparro@oakley.com',
    gender: 'Female',
    last_activity: '3/23/2023',
    image:
      'https://robohash.org/molestiaedoloremmolestiae.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$1566.51',
    last_amount_spent: '$551.46',
    items_bought: 43,
  },
  {
    id: 26,
    first_name: 'Trisha',
    last_name: 'Hewins',
    email: 'thewinsp@4shared.com',
    gender: 'Female',
    last_activity: '3/25/2023',
    image: 'https://robohash.org/corporisaperiamsequi.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$5280.62',
    last_amount_spent: '$394.42',
    items_bought: 42,
  },
  {
    id: 27,
    first_name: 'Sherwynd',
    last_name: 'Pionter',
    email: 'spionterq@weebly.com',
    gender: 'Male',
    last_activity: '12/11/2022',
    image: 'https://robohash.org/sapientefugasint.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$6044.63',
    last_amount_spent: '$621.43',
    items_bought: 17,
  },
  {
    id: 28,
    first_name: 'Wallas',
    last_name: 'Labbett',
    email: 'wlabbettr@engadget.com',
    gender: 'Polygender',
    last_activity: '3/26/2023',
    image:
      'https://robohash.org/deseruntasperiorescommodi.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$4473.71',
    last_amount_spent: '$955.23',
    items_bought: 34,
  },
  {
    id: 29,
    first_name: 'Moira',
    last_name: 'Sebyer',
    email: 'msebyers@ihg.com',
    gender: 'Female',
    last_activity: '1/12/2023',
    image: 'https://robohash.org/fugitsuntaperiam.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$3592.71',
    last_amount_spent: '$942.97',
    items_bought: 11,
  },
  {
    id: 30,
    first_name: 'Merlina',
    last_name: 'Pencost',
    email: 'mpencostt@salon.com',
    gender: 'Female',
    last_activity: '2/20/2023',
    image: 'https://robohash.org/nemomollitiaea.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$2685.15',
    last_amount_spent: '$303.96',
    items_bought: 31,
  },
  {
    id: 31,
    first_name: 'Pieter',
    last_name: 'Stote',
    email: 'pstoteu@netscape.com',
    gender: 'Male',
    last_activity: '11/27/2022',
    image: 'https://robohash.org/quodtotamvoluptatibus.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$3289.14',
    last_amount_spent: '$781.83',
    items_bought: 49,
  },
  {
    id: 32,
    first_name: 'Marianna',
    last_name: 'Iwanczyk',
    email: 'miwanczykv@meetup.com',
    gender: 'Bigender',
    last_activity: '4/7/2023',
    image: 'https://robohash.org/consequaturfugavel.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$8662.95',
    last_amount_spent: '$958.88',
    items_bought: 30,
  },
  {
    id: 33,
    first_name: 'Quill',
    last_name: 'Alexander',
    email: 'qalexanderw@reference.com',
    gender: 'Male',
    last_activity: '1/27/2023',
    image: 'https://robohash.org/laborumvoluptasvel.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$1562.83',
    last_amount_spent: '$272.94',
    items_bought: 2,
  },
  {
    id: 34,
    first_name: 'Kenon',
    last_name: 'Yardy',
    email: 'kyardyx@oaic.gov.au',
    gender: 'Male',
    last_activity: '8/13/2022',
    image: 'https://robohash.org/providentaspernaturet.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$4240.39',
    last_amount_spent: '$622.83',
    items_bought: 37,
  },
  {
    id: 35,
    first_name: 'Waylen',
    last_name: 'Critcher',
    email: 'wcritchery@barnesandnoble.com',
    gender: 'Male',
    last_activity: '12/6/2022',
    image: 'https://robohash.org/veronihiliusto.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$1935.30',
    last_amount_spent: '$616.31',
    items_bought: 42,
  },
  {
    id: 36,
    first_name: 'Elana',
    last_name: 'Karsh',
    email: 'ekarshz@unicef.org',
    gender: 'Non-binary',
    last_activity: '12/15/2022',
    image: 'https://robohash.org/veroveritatisporro.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$2573.12',
    last_amount_spent: '$255.01',
    items_bought: 14,
  },
  {
    id: 37,
    first_name: 'Thayne',
    last_name: 'Gimber',
    email: 'tgimber10@canalblog.com',
    gender: 'Male',
    last_activity: '10/6/2022',
    image: 'https://robohash.org/adoccaecatiesse.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$3459.26',
    last_amount_spent: '$861.44',
    items_bought: 29,
  },
  {
    id: 38,
    first_name: 'Cherice',
    last_name: 'Irce',
    email: 'circe11@1688.com',
    gender: 'Female',
    last_activity: '2/16/2023',
    image: 'https://robohash.org/officiiseiusqui.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$6754.84',
    last_amount_spent: '$262.20',
    items_bought: 15,
  },
  {
    id: 39,
    first_name: 'Nerita',
    last_name: 'Harmstone',
    email: 'nharmstone12@tuttocitta.it',
    gender: 'Female',
    last_activity: '12/1/2022',
    image: 'https://robohash.org/atdebitislaboriosam.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$8000.30',
    last_amount_spent: '$600.60',
    items_bought: 5,
  },
  {
    id: 40,
    first_name: 'Donaugh',
    last_name: 'Kloser',
    email: 'dkloser13@wordpress.org',
    gender: 'Bigender',
    last_activity: '10/27/2022',
    image: 'https://robohash.org/atquiomnis.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$1885.96',
    last_amount_spent: '$965.49',
    items_bought: 15,
  },
  {
    id: 41,
    first_name: 'Addison',
    last_name: 'MacAlinden',
    email: 'amacalinden14@vkontakte.ru',
    gender: 'Male',
    last_activity: '9/23/2022',
    image: 'https://robohash.org/dignissimossaepequi.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$8586.25',
    last_amount_spent: '$910.51',
    items_bought: 25,
  },
  {
    id: 42,
    first_name: 'Gloriana',
    last_name: 'Kreutzer',
    email: 'gkreutzer15@cafepress.com',
    gender: 'Female',
    last_activity: '2/23/2023',
    image: 'https://robohash.org/namofficiiset.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$7615.33',
    last_amount_spent: '$678.39',
    items_bought: 31,
  },
  {
    id: 43,
    first_name: 'Laurence',
    last_name: 'Doumic',
    email: 'ldoumic16@patch.com',
    gender: 'Male',
    last_activity: '7/18/2023',
    image: 'https://robohash.org/fugainciduntaliquam.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$5300.17',
    last_amount_spent: '$364.30',
    items_bought: 50,
  },
  {
    id: 44,
    first_name: 'Friedrich',
    last_name: 'Classen',
    email: 'fclassen17@bloomberg.com',
    gender: 'Male',
    last_activity: '6/3/2023',
    image: 'https://robohash.org/repudiandaeetaut.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$6816.58',
    last_amount_spent: '$910.21',
    items_bought: 39,
  },
  {
    id: 45,
    first_name: 'Carry',
    last_name: 'Bedwell',
    email: 'cbedwell18@sohu.com',
    gender: 'Female',
    last_activity: '10/2/2022',
    image: 'https://robohash.org/quisnobisdolorem.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$5991.84',
    last_amount_spent: '$517.52',
    items_bought: 35,
  },
  {
    id: 46,
    first_name: 'Catherine',
    last_name: 'Fochs',
    email: 'cfochs19@reverbnation.com',
    gender: 'Female',
    last_activity: '4/4/2023',
    image: 'https://robohash.org/ipsamquised.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$7201.15',
    last_amount_spent: '$407.06',
    items_bought: 30,
  },
  {
    id: 47,
    first_name: 'Laural',
    last_name: 'Maffiotti',
    email: 'lmaffiotti1a@theglobeandmail.com',
    gender: 'Non-binary',
    last_activity: '2/6/2023',
    image: 'https://robohash.org/quisquamdoloresad.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$8117.10',
    last_amount_spent: '$869.58',
    items_bought: 49,
  },
  {
    id: 48,
    first_name: 'Alejandra',
    last_name: 'Edinboro',
    email: 'aedinboro1b@typepad.com',
    gender: 'Female',
    last_activity: '1/2/2023',
    image: 'https://robohash.org/utquaerateos.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$2363.31',
    last_amount_spent: '$965.79',
    items_bought: 25,
  },
  {
    id: 49,
    first_name: 'Aile',
    last_name: 'Osipov',
    email: 'aosipov1c@163.com',
    gender: 'Female',
    last_activity: '4/11/2023',
    image: 'https://robohash.org/impeditquiautem.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$6253.96',
    last_amount_spent: '$272.22',
    items_bought: 2,
  },
  {
    id: 50,
    first_name: 'Angele',
    last_name: 'Galle',
    email: 'agalle1d@addthis.com',
    gender: 'Female',
    last_activity: '12/18/2022',
    image: 'https://robohash.org/utadquis.png?size=50x50&set=set1',
    last_product: 'keyboard',
    total_amount_spent: '$4707.09',
    last_amount_spent: '$901.00',
    items_bought: 31,
  },
];
export const TRANSACTIONS: ITransaction[] = [
  {
    id: 1,
    first_name: 'Bill',
    last_name: 'Zuker',
    email: 'bzuker0@over-blog.com',
    date: '5/2/2023',
    image: 'https://robohash.org/porroearumcum.png?size=50x50&set=set1',
    product: 'keyboard',
    price: '$100.65',
    status: 'pending',
  },
  {
    id: 2,
    first_name: 'Inger',
    last_name: 'Tichelaar',
    email: 'itichelaar1@ow.ly',
    date: '8/9/2022',
    image: 'https://robohash.org/excepturiutbeatae.png?size=50x50&set=set1',
    product: 'mouse',
    price: '$18.87',
    status: 'done',
  },
  {
    id: 3,
    first_name: 'Eal',
    last_name: 'Akroyd',
    email: 'eakroyd2@deliciousdays.com',
    date: '12/24/2022',
    image: 'https://robohash.org/maioresexquam.png?size=50x50&set=set1',
    product: 'monitor',
    price: '$795.56',
    status: 'done',
  },
  {
    id: 4,
    first_name: 'Karlene',
    last_name: "O'Cassidy",
    email: 'kocassidy3@storify.com',
    date: '8/28/2022',
    image: 'https://robohash.org/pariatursuscipitet.png?size=50x50&set=set1',
    product: 'keyboard',
    price: '$344.37',
    status: 'done',
  },
  {
    id: 5,
    first_name: 'Weylin',
    last_name: 'Mars',
    email: 'wmars4@wired.com',
    date: '7/23/2022',
    image:
      'https://robohash.org/ullammaioresconsectetur.png?size=50x50&set=set1',
    product: 'mouse',
    price: '$27.55',
    status: 'done',
  },
];
export const ACTIVITY_SETTINGS: SettingsType[] = [
  {
    id: 'completedTransaction',
    name: 'Completed transation',
    value: true,
    type: 'default',
    options: null,
  },
  {
    id: 'incompleteTransaction',
    name: 'Incomplete transaction',
    value: false,
    type: 'default',
    options: null,
  },
  {
    id: 'upcomingPayment',
    name: 'Upcoming payments',
    value: false,
    type: 'default',
    options: null,
  },
  {
    id: 'newsletterAndNews',
    name: 'Newsletter and news',
    value: true,
    type: 'default',
    options: null,
  },
];
export const DISPLAY_SETTINGS: SettingsType[] = [
  {
    id: 'Language',
    name: 'Language',
    value: 'English',
    options: ['English', 'Polish'],
    type: 'pro',
  },
  {
    id: 'Currency',
    name: 'Currency',
    value: 'USD',
    options: ['USD', 'EURO', 'PLN'],
    type: 'pro',
  },
];
export const NOTIFICATIONS: INotification[] = [
  {
    status: 'new',
    title: 'New Sale Received',
    message:
      'Congratulations! You have a new sale of $150. Keep up the good work!',
  },

  {
    status: 'new',
    title: 'Monthly Sales Goal Update',
    message:
      "You've achieved 75% of your monthly sales goal. Keep pushing to reach your target!",
  },

  {
    status: 'new',
    title: 'Low Inventory Alert',
    message:
      'Attention: Product A is running low on stock. Only 10 units left. Consider restocking soon.',
  },

  {
    status: 'old',
    title: 'Top Sales Performer',
    message:
      "Kudos! You're the top salesperson this week with $2000 in sales. Great job!",
  },

  {
    status: 'old',
    title: 'Important Announcement',
    message:
      'We will be launching a special promotion next week. Stay tuned for more details!',
  },

  {
    status: 'old',
    title: 'Order Shipment Update',
    message:
      'Order #123456 has been shipped. Estimated delivery date: August 25th.',
  },

  {
    status: 'old',
    title: 'Weekly Sales Report Available',
    message:
      'The weekly sales report for the current week is now available. Check it out in the Reports section.',
  },

  {
    status: 'old',
    title: 'New Product Added',
    message:
      "Exciting news! We've added a new product, Product B, to our catalog. Start promoting it today.",
  },

  {
    status: 'old',
    title: 'Pending Sales Approval',
    message:
      'There are 3 sales pending your approval. Please review and take action.',
  },

  {
    status: 'old',
    title: 'Customer Feedback Request',
    message:
      'We value your opinion! Kindly take a moment to provide feedback on your recent purchase.',
  },
];
