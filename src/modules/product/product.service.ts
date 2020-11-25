import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.interface';
const dataLoad = [
  {
    name: "Air jordan 1 bred(2013)",
    ratingsAverage: 4.7,
    ratingsQuantity: 37,
    price: 460,
    description: "Aside from 1985, you could argue that 2013 was the best year for Jordan 1 fans thanks to releases like the Air Jordan Retro 1 High OG “Bred” colorway. While there tends to be Air Jordan 1 colorways released every year, in 2013 Jordan Brand went back to the original formula for Jordan 1s. They introduced the “OG” versions of the Jordan 1, which featured “Nike Air” labeling on the tongue and on the insoles as well. Jordan collectors often place a higher value on these tiny details because when the original Nike Air Jordan released in 1985, the Jumpman logo hadn’t even been created, which means the retro AJ1s with the Jumpman on the tongue, heel or insole, are just not quite the same. Surprisingly, the Bred Jordan 1 OG didn’t release until the end of 2013, which meant two things. There were a lot of other Jordan Retro 1 High OG colorways that had already come out and the holiday release meant there would also be a Jordan 11 releasing near the same time. That didn’t seem to make an ounce of difference with sneaker enthusiasts and Jordan fans. The 2013 Air Jordan Retro High OG Bred sold out in what seemed like seconds and even the restocks that followed were scooped up quickly, making this Black/Varsity Red colorway more than worth its weight in leather.",
    imageCover: "https://stockx.imgix.net/Air-Jordan-1-Retro-Bred-2013-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
    images: [
      "https://stockx.imgix.net/Air-Jordan-1-Retro-Bred-2013-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
      "https://sneakernews.com/wp-content/uploads/2016/09/air-jordan-1-banned-2013-vs-2016-01.jpg",
      "https://sneakernews.com/wp-content/uploads/2013/10/air-jordan-1-retro-high-og-bred-01.jpg"
    ],
    categories: ["nike", "jordan", "bred", "fashion", "lifestyle", "sport"],
    brand: "Nike",
    date: "2013-03-08"
  },
  {
    name: "Air jordan 4 retro bred(2019)",
    ratingsAverage: 4.7,
    ratingsQuantity: 12,
    price: 350,
    description: "Looking for a classic sneaker to add to your collection? Then you need to buy the latest and greatest Jordan 4 Retro Bred (2019). This AJ 4, also known as “Black Cement 4,” comes with a black upper plus grey accents, white midsole plus black, white and grey accents, and a red sole. These sneakers released in May 2019 and retailed for $200. Thrive in one of Jordan’s most iconic sneakers ever, so make sure you have a pair of your own.Aside from 1985, you could argue that 2013 was the best year for Jordan 1 fans thanks to releases like the Air Jordan Retro 1 High OG “Bred” colorway. While there tends to be Air Jordan 1 colorways released every year, in 2013 Jordan Brand went back to the original formula for Jordan 1s. They introduced the “OG” versions of the Jordan 1, which featured “Nike Air” labeling on the tongue and on the insoles as well. Jordan collectors often place a higher value on these tiny details because when the original Nike Air Jordan released in 1985, the Jumpman logo hadn’t even been created, which means the retro AJ1s with the Jumpman on the tongue, heel or insole, are just not quite the same. Surprisingly, the Bred Jordan 1 OG didn’t release until the end of 2013, which meant two things. There were a lot of other Jordan Retro 1 High OG colorways that had already come out and the holiday release meant there would also be a Jordan 11 releasing near the same time. That didn’t seem to make an ounce of difference with sneaker enthusiasts and Jordan fans. The 2013 Air Jordan Retro High OG Bred sold out in what seemed like seconds and even the restocks that followed were scooped up quickly, making this Black/Varsity Red colorway more than worth its weight in leather.",
    imageCover: "https://cdn.flightclub.com/TEMPLATE/139813/2.jpg",
    images: [
      "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/1/4/140233_01.jpg",
      "https://sneakernews.com/wp-content/uploads/2019/04/air-jordan-4-bred-2019-308497-060-6.jpg"
    ],
    categories: ["nike", "jordan", "bred", "fashion", "lifestyle", "sport"],
    brand: "Nike",
    date: "2019-10-10"
  },
  {
    name: "Nike LeBron Zoom Soldier 11",
    ratingsAverage: 4.5,
    ratingsQuantity: 17,
    price: 195,
    imageCover: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/pbq3x0geispungicyenr/air-max-97-shoe-5Cxgkj.jpg",
    images: [
      "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/801854_1.jpg",
      "https://images.solecollector.com/complex/images/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/xhcokfvvm52s1q4isuso/nike-lebron-soldier-11-lead"
    ],
    categories: ["nike", "lebron", "lifestyle", "sport"],
    brand: "Nike",
    date: "2020-01-10"
  },
  {
    name: "Nike air max 97",
    ratingsAverage: 4.7,
    ratingsQuantity: 33,
    price: 170,
    imageCover: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/pbq3x0geispungicyenr/air-max-97-shoe-5Cxgkj.jpg",
    images: [
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/pbq3x0geispungicyenr/air-max-97-shoe-5Cxgkj.jpg",
      "https://cdn.runrepeat.com/i/nike/25103/nike-womens-air-max-97-lx-swarovski-metallic-silver-varsity-red-trainer-silver-d5c4-380.jpg",
      "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ncgunmosnmvpvuasni03/air-max-97-older-shoe-vJc4r9.jpg"
    ],
    categories: ["nike", "air", "lifestyle", "sport", "running", "trainer"],
    brand: "Nike",
    date: "2010-01-14"
  },
  {
    name: "Air Flight Hurache",
    ratingsAverage: 3.7,
    ratingsQuantity: 46,
    price: 150,
    imageCover: "https://stockx.imgix.net/Nike-Air-Huarache-City-Black-Black-Dark-Grey-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=1000",
    images: [
      "https://stockx.imgix.net/Nike-Air-Huarache-City-Black-Black-Dark-Grey-W.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=1000",
      "https://media.hypedc.com/media/catalog/product/cache/1/image/1500x/9df78eab33525d08d6e5fb8d27136e95/_/o/_o8a9912_1_4.jpg",
      "data:image/jpeg;base64,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"
    ],
    categories: ["nike", "fashion", "lifestyle", "women"],
    brand: "Nike",
    date: "2020-07-04"
  },
  {
    name: "Adidas Stan Smith",
    ratingsAverage: 4.7,
    ratingsQuantity: 137,
    price: 80,
    description: "The instantly recognizable classic gets a cheeky bit of signature flourish. These Stan Smith shoes update the iconic look with cursive heel branding that reads 'Stan' on one side and 'Smith' on the other. The soft leather upper includes the famous perforated 3-Stripes.",
    imageCover: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiL0rKSqZ3lAhWBA4gKHXJzBiEQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.adidas.com%2Fus%2Fstan-smith-shoes%2FM20324.html&psig=AOvVaw2Hli2ugI6LsfqV59lzOvUK&ust=1571196475194598",
    images: [
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiL0rKSqZ3lAhWBA4gKHXJzBiEQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.adidas.com%2Fus%2Fstan-smith-shoes%2FM20324.html&psig=AOvVaw2Hli2ugI6LsfqV59lzOvUK&ust=1571196475194598",
      "https://dks.scene7.com/is/image/GolfGalaxy/17ADIWSTNSMTHWHTGLFS_White_Green?wid=1080&fmt=jpg"
    ],
    categories: ["adidas", "stand", "smith", "lifestyle"],
    brand: "Adidas",
    date: "2018-06-04"
  },
  {
    name: "Adidas ultra boost 4.0",
    ratingsAverage: 4,
    ratingsQuantity: 36,
    price: 139,
    description: "These running shoes combine comfort and high-performance technology for a best-ever-run feeling. They have a stretchy knit upper that adapts to the changing shape of your foot as you run. Responsive midsole cushioning and a flexible outsole deliver a smooth and energized ride.",
    imageCover: "https://stockx-360.imgix.net/Adidas-Ultra-Boost-4pt0-Core-Black/Images/Adidas-Ultra-Boost-4pt0-Core-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1538080256",
    images: [
      "https://stockx-360.imgix.net/Adidas-Ultra-Boost-4pt0-Core-Black/Images/Adidas-Ultra-Boost-4pt0-Core-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1538080256",
      "https://stockx-360.imgix.net/Adidas-Ultra-Boost-4pt0-Core-Black/Images/Adidas-Ultra-Boost-4pt0-Core-Black/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1538080256",
      "https://images-na.ssl-images-amazon.com/images/I/615WfVg4h5L._AC_UY780_.jpg"
    ],
    categories: ["adidas", "ultra", "running", "lifestyle", "women"],
    brand: "Adidas",
    date: "2019-07-09"
  },
  {
    name: "Adidas NMD r1",
    ratingsAverage: 4.3,
    ratingsQuantity: 33,
    price: 150,
    description: "TProgressive. Premium. Pioneering. NMD is a fresh remix of adidas heritage with cutting-edge details for a look that resonates on the streets. These shoes combine a snug, sock-like upper with responsive Boost cushioning.",
    imageCover: "https://assets.adidas.com/images/w_600,f_auto,q_auto/0517a1d3437e43048097aa7d00eb9f47_9366/NMD_R1_Shoes_Black_EG8144.jpg",
    images: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/0517a1d3437e43048097aa7d00eb9f47_9366/NMD_R1_Shoes_Black_EG8144.jpg",
      "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/4d2f00bd216540e29593aa7d00e3ac2b_9366/NMD_R1_Shoes_Grey_EG8142_01_standard.jpg"
    ],
    categories: ["adidas", "nmd", "running", "lifestyle"],
    brand: "Adidas",
    date: "2016-08-04"
  },
  {
    name: "Adidas EQT",
    ratingsAverage: 3.7,
    ratingsQuantity: 21,
    price: 250,
    description: "Based on one of adidas' most famous running shoes, the 1999 Equipment Gazelle. This updated version fuses the archive design with modern details. The mesh and textile upper features textured leather overlays for an authentic '90s and early-'00s look.",
    imageCover: "https://assets.adidas.com/images/w_600,f_auto,q_auto/5cee657fa2504451a0a7aa7901012b26_9366/EQT_Gazelle_Shoes_Black_EE7745.jpg",
    images: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5cee657fa2504451a0a7aa7901012b26_9366/EQT_Gazelle_Shoes_Black_EE7745.jpg",
      "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/116fa3dea297415289bdaa30010f945d_9366/EQT_Gazelle_Shoes_Yellow_EE4773_01_standard.jpg",
      "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/0a9eb450122b4cbbb52baa7901004b47_9366/EQT_Gazelle_Shoes_White_EE7744_01_standard.jpg"
    ],
    categories: ["adidas", "EQT", "fashion", "lifestyle"],
    brand: "Adidas",
    date: "2017-05-14"
  },
  {
    name: "Reebok Instapump Fury Aape By a Bathing Ape",
    ratingsAverage: 4.3,
    ratingsQuantity: 29,
    price: 290,
    imageCover: "https://stockx.imgix.net/Reebok-Instapump-Fury-Aape-By-A-Bathing-Ape.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=1000",
    images: [
      "https://stockx.imgix.net/Reebok-Instapump-Fury-Aape-By-A-Bathing-Ape.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=1000"
    ],
    categories: ["reebok", "instapump", "running", "lifestyle", "fashion"],
    brand: "Reebok",
    date: "2019-11-19"
  },
  {
    name: "Reebok Classic Leather  1983 tv",
    ratingsAverage: 3,
    ratingsQuantity: 22,
    price: 110,
    imageCover: "https://assets.reebok.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/41401e7630594974b793a9840120ff2d_9366/Classic_Leather_1983_TV_White_DV6433_01_standard.jpg",
    images: [
      "https://assets.reebok.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/41401e7630594974b793a9840120ff2d_9366/Classic_Leather_1983_TV_White_DV6433_01_standard.jpg",
      "https://static.footshop.com/199677/38304.jpg",
      "https://static.footshop.com/199678/38304.jpg"
    ],
    categories: ["Reebok", "classic", "fashion", "lifestyle"],
    brand: "Reebok",
    date: "2016-10-24"
  },
  {
    name: "Flexagon Force training  shoes",
    ratingsAverage: 4.2,
    ratingsQuantity: 40,
    price: 80,
    imageCover: "https://dks.scene7.com/is/image/GolfGalaxy/18RBKMFLXGNFRCBLKVLL_Black_Grey?wid=1080&fmt=jpg",
    images: [
      "https://dks.scene7.com/is/image/GolfGalaxy/18RBKMFLXGNFRCBLKVLL_Black_Grey?wid=1080&fmt=jpg",
      "https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/bea353372bc34e05ab9fa8d40117ea56_9366/Reebok_Flexagon_Green_CN5193_01_standard.jpg",
      "https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/ecfad82cf5c044ef99d4a8d20175d884_9366/Reebok_Flexagon_Black_CN2407_01_standard.jpg"
    ],
    categories: ["Reebok", "running", "fashion", "lifestyle"],
    brand: "Reebok",
    date: "2010-12-04"
  },
  {
    name: "Reebok Grasse Road 2.0",
    ratingsAverage: 4.2,
    ratingsQuantity: 140,
    price: 120,
    description: "Add a few more streets to your  run. These women's stability running shoes have double-layered woven Flexweave® at the midfoot and heel for enhanced support. An Energy Return EVA heel clip helps absorb impact and the Floatride Energy Foam midsole offers light, responsive cushioning all through your daily run.",
    imageCover: "https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/db48c53d420f4889be75aa4601749f7b_9366/Reebok_Grasse_Road_2.0_ST_Shoes_Purple_DV5788_01_standard.jpg",
    images: [
      "https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/db48c53d420f4889be75aa4601749f7b_9366/Reebok_Grasse_Road_2.0_ST_Shoes_Purple_DV5788_01_standard.jpg",
      "https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/bea353372bc34e05ab9fa8d40117ea56_9366/Reebok_Flexagon_Green_CN5193_01_standard.jpg"
    ],
    categories: ["Reebok", "running", "fashion", "lifestyle"],
    brand: "Reebok",
    date: "2016-07-24"
  },
  {
    name: "Reebok forever float ride energy",
    ratingsAverage: 4,
    ratingsQuantity: 40,
    price: 90,
    description: "Cut out distractions for fast splits. These men's running shoes have a Floatride Energy Foam midsole for lightweight responsive cushioning from start to finish. A mesh upper provides support and ventilation so you can take each stride in comfort.",
    imageCover: "https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/7886defa415448c09151a973010693c1_9366/Forever_Floatride_Energy_Blue_CN7756_01_standard.jpg",
    images: [
      "https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/7886defa415448c09151a973010693c1_9366/Forever_Floatride_Energy_Blue_CN7756_01_standard.jpg",
      "https://assets.reebok.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/2e94ac7a99f0471fbaaea98401179fc4_9366/Forever_Floatride_Energy_Grey_DV3883_DV3883_01_standard.jpg"
    ],
    categories: ["Reebok", "running", "fashion", "lifestyle"],
    brand: "Reebok",
    date: "2019-11-17"
  },
  {
    name: "Biti's Hunter X",
    ratingsAverage: 4.5,
    ratingsQuantity: 33,
    price: 40,
    imageCover: "https://salt.tikicdn.com/cache/550x550/ts/product/b3/4b/d1/d029d1020be866ba17031cd27f9f099a.JPG",
    images: [
      "https://salt.tikicdn.com/cache/550x550/ts/product/b3/4b/d1/d029d1020be866ba17031cd27f9f099a.JPG",
      "https://file.yes24.vn/Upload/ProductImage/bitis/1939610_L.jpg"
    ],
    categories: ["biti's", "running", "hunter", "lifestyle"],
    brand: "Biti's",
    date: "2017-12-11"
  },
  {
    name: "Biti's Hunter X summer 2k19 adventure",
    ratingsAverage: 4,
    ratingsQuantity: 74,
    price: 46.7,
    imageCover: "https://product.hstatic.net/1000230642/product/dsmh01100cam__5__1a189b8f8b394b3fa2c5e58b9ba57b6b_1024x1024.jpg",
    images: [
      "https://product.hstatic.net/1000230642/product/dsmh01100cam__5__1a189b8f8b394b3fa2c5e58b9ba57b6b_1024x1024.jpg",
      "https:file.yes24.vn/Upload/ProductImage/bitis/2026402_L.jpg"
    ],
    categories: ["biti's", "running", "hunter", "lifestyle"],
    brand: "Biti's",
    date: "2017-01-24"
  },
  {
    name: "Biti's Hunter X BKL",
    ratingsAverage: 4.5,
    ratingsQuantity: 54,
    price: 46.7,
    imageCover: "https://homefam.com/wp-content/uploads/2019/09/giay-the-thao-nam-cao-cap-biti-s-hunter-x-bkl-collection-bkl-white-1.jpg",
    images: [
      "https://homefam.com/wp-content/uploads/2019/09/giay-the-thao-nam-cao-cap-biti-s-hunter-x-bkl-collection-bkl-white-1.jpg",
      "https://i2.wp.com/shosestyle.byethost16.com/wp-content/uploads/2019/06/biti-s-hunterx-bkl-collection-bkl-black-03.jpg?resize=678%2C381"
    ],
    categories: ["biti's", "running", "hunter", "lifestyle"],
    brand: "Biti's",
    date: "2017-04-14"
  },
  {
    name: "Vans Old Skool",
    ratingsAverage: 4.3,
    ratingsQuantity: 59,
    price: 60,
    description: "The Old Skool, the Vans classic skate shoe and first to bare the iconic sidestripe, is a low top lace-up featuring sturdy canvas and suede uppers, re-enforced toecaps to withstand repeated wear, padded collars for support and flexibility, and signature rubber waffle outsoles.",
    imageCover: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
    images: [
      "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
      "https://images.vans.com/is/image/Vans/BV5V75-HERO?$583x583$"
    ],
    categories: ["vans", "lifestyle"],
    brand: "Vans",
    date: "2015-01-14"
  },
  {
    name: "Vans Sk8",
    ratingsAverage: 3.3,
    ratingsQuantity: 102,
    price: 65,
    description: "The Sk8-Hi, the legendary lace-up high top, features sturdy canvas and suede uppers, re-enforced toecaps to withstand repeated wear, padded collars for support and flexibility, and signature rubber waffle outsoles.",
    imageCover: "https://images.vans.com/is/image/Vans/BV6V7E-HERO?$583x583$",
    images: [
      "https://images.vans.com/is/image/Vans/BV6V7E-HERO?$583x583$",
      "https://images.vans.com/is/image/Vans/D5INVY-HERO?$583x583$"
    ],
    categories: ["vans", "lifestyle"],
    brand: "Vans",
    date: "2020-11-24"
  },
  {
    name: "Vans pearl lether slip ons",
    ratingsAverage: 4.3,
    ratingsQuantity: 62,
    price: 65,
    description: "The Perf Leather Classic Slip-On has a low profile, slip-on perforated leather upper with elastic side accents, Vans flag label and Vans original Waffle Outsole.",
    imageCover: "https://images.vans.com/is/image/Vans/XG8DJ6-HERO?$583x583$",
    images: [
      "https://images.vans.com/is/image/Vans/XG8DJ6-HERO?$583x583$",
      "https://images.vans.com/is/image/Vans/XG8DJ7-HERO?$583x583$"
    ],
    categories: ["vans", "lifestyle"],
    brand: "Vans",
    date: "2015-02-09"
  },
  {
    name: "Vans Sk8 hi",
    ratingsAverage: 4.3,
    ratingsQuantity: 52,
    price: 65,
    description: "Rock an iconic look when you blend premium skate functionality and everyday style with the Vans® Men's SK8-Hi Mix shoes. Their classic look and feel with a new design will keep you looking and feeling great all day.",
    imageCover: "https://dks.scene7.com/is/image/dkscdn/19VANMSK8HLBLMXBLMNS_Black_Red_is?wid=1080&fmt=jpg",
    images: [
      "https://dks.scene7.com/is/image/dkscdn/19VANMSK8HLBLMXBLMNS_Black_Red_is?wid=1080&fmt=jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuK4f8xMZ07dHt-Cyxv00Q7PWFxOvz12ZgFjX-Z0hxOyLZERKnIA&s"
    ],
    categories: ["vans", "lifestyle", "sk8"],
    brand: "Vans",
    date: "2010-10-24"
  },
  {
    name: "Coverse Chuck Taylor all star classic- hi",
    ratingsAverage: 4.7,
    ratingsQuantity: 80,
    price: 70,
    description: "The Chuck Taylor All Star high top is the most iconic sneaker in the world, recognised for its unmistakable silhouette, star-centred ankle patch and cultural authenticity. And like the best paradigms, it only gets better with time. For generations, these classic colours and the quality rubber vulcanised sole have defined an icon. Born on the court but adopted by rebels, rockers, rappers, artists,dreamers, thinkers and originals, the Chuck Taylor All Star continues to celebrate personal style and individual self-expression.",
    imageCover: "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dwe03574fe/images/hi-res/M9160C_standard.jpg?sw=580&sh=580&sm=fit",
    images: [
      "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dwe03574fe/images/hi-res/M9160C_standard.jpg?sw=580&sh=580&sm=fit",
      "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dwbc8bff5a/images/hi-res/M7650C_standard.jpg?sw=580&sh=580&sm=fit",
      "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dw4d5aefdc/images/hi-res/M9006C_standard.jpg?sw=580&sh=580&sm=fit"
    ],
    categories: ["converse", "lifestyle", "chuck", "taylor"],
    brand: "Vans",
    date: "2015-01-14"
  },
  {
    name: "Coverse Chuck Taylor all star classic- low",
    ratingsAverage: 4.7,
    ratingsQuantity: 50,
    price: 65,
    description: "The Chuck Taylor All Star is the most iconic sneaker in the world, recognised for its unmistakable silhouette, star-centred ankle patch and cultural authenticity. And like the best paradigms, it only gets better with time. For generations, these classic colours and quality, rubber vulcanised sole have defined an icon. Created for the court but adopted by rebels, rockers, rappers, artists, dreamers, thinkers and originals, the Chuck Taylor All Star sneaker continues to celebrate personal style and individual self-expression.",
    imageCover: "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dwd961a75e/images/hi-res/M9166C_standard.jpg?sw=580&sh=580&sm=fit",
    images: [
      "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dwd961a75e/images/hi-res/M9166C_standard.jpg?sw=580&sh=580&sm=fit",
      "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dw43502aa1/images/hi-res/M9691C_standard.jpg?sw=580&sh=580&sm=fit",
      "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dw1eccd82e/images/hi-res/1J794C_standard.jpg?sw=580&sh=580&sm=fit"
    ],
    categories: ["converse", "lifestyle", "chuck", "taylor"],
    brand: "Converse",
    date: "2016-10-24"
  },
  {
    name: "Converse Chuck Taylor All-Star Vulcanized Hi Off-White",
    ratingsAverage: 4.9,
    ratingsQuantity: 2,
    price: 170000,
    description: "The Converse Chuck Taylor All-Star Hi also made it way into 'The 10' Collection. Made in collaboration with Virgil Abloh's Off-White and Nike, this series brought together all three brands for an exciting new rendition of the classic Converse Chuck Taylor. A part of the 'Ghosting' Series, this pair comes in a white, cone and ice blue colorway. Sporting a reconstructed translucent upper, featuring a semi-revealing material to tie-in with the theme. Various materials are found throughout, as well as a red zip-tie, black branding and an icy blue translucent sole. Their release date was November 1st, 2017 where they were available alongside the rest of the Off-White x Nike 'Ghosting' Collection. They were available in men's sizing at select retailers worldwide. If you're a fan of the Converse Chuck Taylor All-Star and Off-White, this is another must-have pair. Those looking for them can buy one online. If you have one to sell, hit up the marketplace and see what they are going for.",
    imageCover: "https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-Hi-Off-White/Images/Converse-Chuck-Taylor-All-Star-Hi-Off-White/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000",
    images: [
      "https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-Hi-Off-White/Images/Converse-Chuck-Taylor-All-Star-Hi-Off-White/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000",
      "https://www.converse.com/on/demandware.static/-/Sites-ConverseMaster/default/dw43502aa1/images/hi-res/M9691C_standard.jpg?sw=580&sh=580&sm=fit"
    ],
    categories: ["converse", "lifestyle", "chuck", "taylor"],
    brand: "Converse",
    date: "2015-05-14"
  },
  {
    name: "Timber Land 6-inch waterprof boost",
    ratingsAverage: 4.5,
    ratingsQuantity: 25,
    price: 198,
    description: "When you think of Timberland® boots, you're thinking of these. Our original waterproof boot was designed more than 40 years ago and remains a best-seller today, with tireless waterproof performance and instantly recognizable work-boot styling.",
    imageCover: "https://images.timberland.com/is/image/timberland/10061024-HERO?$PDP-FULL-IMAGE$",
    images: [
      "https://images.timberland.com/is/image/timberland/10061024-HERO?$PDP-FULL-IMAGE$",
      "https://images.timberland.com/is/image/timberland/72066026-HERO?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0"
    ],
    categories: ["boost", "fashion", "lifestyle"],
    brand: "Timberland",
    date: "2015-01-14"
  },
  {
    name: "Nike Kyrie 3 samurai",
    ratingsAverage: 4,
    ratingsQuantity: 55,
    price: 290,
    imageCover: "https://stockx.imgix.net/Nike-Kyrie-3-Samurai.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
    images: [
      "https://stockx.imgix.net/Nike-Kyrie-3-Samurai.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
      "https://i.pinimg.com/originals/b3/dd/29/b3dd295ca9b06ee0cdd3f715f9883ce9.jpg",
      "data:image/jpeg;base64,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"
    ],
    categories: ["nike", "sport", "lifestyle"],
    brand: "Nike",
    date: "2017-12-16"
  },
  {
    name: "Nike Kyrie 5 by you",
    ratingsAverage: 4.5,
    ratingsQuantity: 66,
    price: 243,
    imageCover: "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/id5svifaydbciccmclym/custom-kyrie-5-by-you.jpg",
    images: [
      "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/id5svifaydbciccmclym/custom-kyrie-5-by-you.jpg",
      "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/llznlegilefuypl5ldsc/custom-kyrie-5-by-you.jpg"
    ],
    categories: ["sport", "nike", "lifestyle"],
    brand: "Nike",
    date: "2019-09-16"
  },
  {
    name: "Nike KD 10 oreo",
    ratingsAverage: 4.3,
    ratingsQuantity: 17,
    price: 150,
    imageCover: "https://stockx.imgix.net/Nike-KD-10-Oreo.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
    images: [
      "https://stockx.imgix.net/Nike-KD-10-Oreo.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
      "https://www.jordandebut.com/wp-content/uploads/2019/07/Nike-KD-10-Oreo-Black-White.jpg"
    ],
    categories: ["sport", "lifestyle", "nike"],
    brand: "Nike",
    date: "2020-11-26"
  },
  {
    name: "Adidas Prophere",
    ratingsAverage: 4.3,
    ratingsQuantity: 57,
    price: 60,
    description: "The Prophere offers a fresh approach to streetwise swagger. These shoes have a playfully aggressive look with exaggerated proportions and bold textures. They combine a sturdy structured knit upper with the soft, resilient feel of a polyurethane midsole.",
    imageCover: "https://cdn.runrepeat.com/i/adidas/26767/adidas-prophere-us-12-5-mens-cblack-cblack-solred-01e5-600.jpg",
    images: [
      "https://cdn.runrepeat.com/i/adidas/26767/adidas-prophere-us-12-5-mens-cblack-cblack-solred-01e5-600.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qU8XgR3HoKNr7FZBCRM4o-eJV0Tae18RGLlnCKqo7k9-NEr8&s"
    ],
    categories: ["sport", "lifestyle", "adidas"],
    brand: "Adidas",
    date: "2020-10-31"
  }
]
@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product>
  ){}
  async getAll() : Promise<Product[]>{
    const products = await this.productModel.find();
    return products
  }
  async create(data: Product): Promise<Product>{
    try {
      // console.log(data)
      const newProduct =  new this.productModel(data);
      console.log(newProduct)
      return await newProduct.save()
    } catch (error) {
      console.log(error)
    }
  }
  async createArr(data: any) {
    try {
      dataLoad.forEach(async (i: any) => {
        const newPro = await this.create(i);
        console.log(newPro)
      });
    } catch (error) {
      console.log(error)
    }
  }
  async getNewArrival(): Promise<Product[]> {
    const data = await this.productModel.find().sort({'date': -1}).limit(8).exec();
    return data
  }
  async getRatingsAverage(): Promise<Product[]> {
    const data = await this.productModel.find().sort({'ratingsAverage': -1}).limit(8).exec();
    return data
  }
  async getProduct(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    // console.log(product)
    return product
  }
}
