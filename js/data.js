// =========================================================================
// LUXESPORT — PERFORMANCE APPAREL & ATHLETIC FOOTWEAR DATA
// 100% Curated Sportswear (5 Brands x 20 Products = 100 Comprehensive Items)
// Brands: CarbonX Pro, LuxeSport Lab, AeroTech, Apex Run, Endura
// Colors strictly mapped: black, white, blue, grey, red, green
// =========================================================================

const products = [
  {
    "id": 1,
    "name": "CarbonX Pro AeroPlate Training Road Shoe",
    "brand": "CarbonX Pro",
    "gender": "men",
    "color": "black",
    "price": 2650000,
    "oldPrice": null,
    "image": "images/products/product-1.jpg",
    "imageHover": "images/products/product-1-hover.jpg",
    "category": "Mới",
    "section": "men",
    "productType": "shoes",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 2,
    "name": "CarbonX Pro UltraBoom Half-Marathon Trainer",
    "brand": "CarbonX Pro",
    "gender": "men",
    "color": "white",
    "price": 2400000,
    "oldPrice": null,
    "image": "images/products/product-2.jpg",
    "imageHover": "images/products/product-2-hover.jpg",
    "category": "Hot",
    "section": "men",
    "productType": "shoes",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 3,
    "name": "CarbonX Pro WindTunnel Aerodynamic Singlet",
    "brand": "CarbonX Pro",
    "gender": "men",
    "color": "blue",
    "price": 720000,
    "oldPrice": null,
    "image": "images/products/product-3.jpg",
    "imageHover": "images/products/product-3-hover.jpg",
    "category": "Khuyến mãi",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 4,
    "name": "CarbonX Pro Elite Race Split Shorts 2.5\"",
    "brand": "CarbonX Pro",
    "gender": "men",
    "color": "grey",
    "price": 580000,
    "oldPrice": null,
    "image": "images/products/product-4.jpg",
    "imageHover": "images/products/product-4-hover.jpg",
    "category": "Bán chạy",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 5,
    "name": "CarbonX Pro Sprint Tech Half Tight With Pocket",
    "brand": "CarbonX Pro",
    "gender": "men",
    "color": "red",
    "price": 680000,
    "oldPrice": null,
    "image": "images/products/product-5.jpg",
    "imageHover": "images/products/product-5-hover.jpg",
    "category": "Mới",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 6,
    "name": "CarbonX Pro Wmn Carbon Glide Speedster",
    "brand": "CarbonX Pro",
    "gender": "women",
    "color": "green",
    "price": 3100000,
    "oldPrice": 3600000,
    "image": "images/products/product-6.jpg",
    "imageHover": "images/products/product-6-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "shoes",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 7,
    "name": "CarbonX Pro Ultralight Carbon Weave Crop Top",
    "brand": "CarbonX Pro",
    "gender": "women",
    "color": "black",
    "price": 620000,
    "oldPrice": null,
    "image": "images/products/product-7.jpg",
    "imageHover": "images/products/product-7-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 8,
    "name": "CarbonX Pro LaserPerforated Race Tank Wmn",
    "brand": "CarbonX Pro",
    "gender": "women",
    "color": "white",
    "price": 560000,
    "oldPrice": 690000,
    "image": "images/products/product-8.jpg",
    "imageHover": "images/products/product-8-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 9,
    "name": "CarbonX Pro Wmn Carbon Strike Racing Short",
    "brand": "CarbonX Pro",
    "gender": "women",
    "color": "blue",
    "price": 540000,
    "oldPrice": null,
    "image": "images/products/product-9.jpg",
    "imageHover": "images/products/product-9-hover.jpg",
    "category": "Mới",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 10,
    "name": "CarbonX Pro Wmn AeroFlow Fast Mile Tight",
    "brand": "CarbonX Pro",
    "gender": "women",
    "color": "grey",
    "price": 780000,
    "oldPrice": null,
    "image": "images/products/product-10.jpg",
    "imageHover": "images/products/product-10-hover.jpg",
    "category": "Hot",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 11,
    "name": "CarbonX Pro Junior Speedster Carbon Mini",
    "brand": "CarbonX Pro",
    "gender": "kids",
    "color": "red",
    "price": 1250000,
    "oldPrice": null,
    "image": "images/products/product-11.jpg",
    "imageHover": "images/products/product-11-hover.jpg",
    "category": "Khuyến mãi",
    "section": "kids",
    "productType": "shoes",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 12,
    "name": "CarbonX Pro Junior Carbon Lightning Sprint Tee",
    "brand": "CarbonX Pro",
    "gender": "kids",
    "color": "green",
    "price": 360000,
    "oldPrice": null,
    "image": "images/products/product-12.jpg",
    "imageHover": "images/products/product-12-hover.jpg",
    "category": "Bán chạy",
    "section": "kids",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 13,
    "name": "CarbonX Pro Kids FastPace Carbon Track Shorts",
    "brand": "CarbonX Pro",
    "gender": "kids",
    "color": "black",
    "price": 320000,
    "oldPrice": null,
    "image": "images/products/product-13.jpg",
    "imageHover": "images/products/product-13-hover.jpg",
    "category": "Mới",
    "section": "kids",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 14,
    "name": "CarbonX Pro Junior Race Day Running Cap",
    "brand": "CarbonX Pro",
    "gender": "kids",
    "color": "white",
    "price": 250000,
    "oldPrice": null,
    "image": "images/products/product-14.jpg",
    "imageHover": "images/products/product-14-hover.jpg",
    "category": "Hot",
    "section": "kids",
    "productType": "accessory",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 15,
    "name": "CarbonX Pro Carbon Streetwear Track Hoodie",
    "brand": "CarbonX Pro",
    "gender": "unisex",
    "color": "blue",
    "price": 1350000,
    "oldPrice": null,
    "image": "images/products/product-15.jpg",
    "imageHover": "images/products/product-15-hover.jpg",
    "category": "Khuyến mãi",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 16,
    "name": "CarbonX Pro Speed Runner Pro Carbon Bag",
    "brand": "CarbonX Pro",
    "gender": "unisex",
    "color": "grey",
    "price": 650000,
    "oldPrice": 800000,
    "image": "images/products/product-16.jpg",
    "imageHover": "images/products/product-16-hover.jpg",
    "category": "Khuyến mãi",
    "section": "streetwear",
    "productType": "accessory",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 17,
    "name": "CarbonX Pro Carbon Graphic Oversize Tech Tee",
    "brand": "CarbonX Pro",
    "gender": "unisex",
    "color": "red",
    "price": 520000,
    "oldPrice": null,
    "image": "images/products/product-17.jpg",
    "imageHover": "images/products/product-17-hover.jpg",
    "category": "Mới",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 18,
    "name": "CarbonX Pro Speed Runner Pro V2",
    "brand": "CarbonX Pro",
    "gender": "unisex",
    "color": "green",
    "price": 3200000,
    "oldPrice": 3800000,
    "image": "images/products/product-18.jpg",
    "imageHover": "images/products/product-18-hover.jpg",
    "category": "Khuyến mãi",
    "section": "icons",
    "productType": "shoes",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 19,
    "name": "CarbonX Pro Rocket Marathon Elite Plate",
    "brand": "CarbonX Pro",
    "gender": "unisex",
    "color": "black",
    "price": 4200000,
    "oldPrice": 4800000,
    "image": "images/products/product-19.jpg",
    "imageHover": "images/products/product-19-hover.jpg",
    "category": "Khuyến mãi",
    "section": "icons",
    "productType": "shoes",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 20,
    "name": "CarbonX Pro Track Spike Sprint Carbon",
    "brand": "CarbonX Pro",
    "gender": "unisex",
    "color": "white",
    "price": 2950000,
    "oldPrice": null,
    "image": "images/products/product-20.jpg",
    "imageHover": "images/products/product-20-hover.jpg",
    "category": "Bán chạy",
    "section": "icons",
    "productType": "shoes",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ CarbonX Pro trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 21,
    "name": "LuxeSport Lab Atelier Form Compression Tee",
    "brand": "LuxeSport Lab",
    "gender": "men",
    "color": "black",
    "price": 690000,
    "oldPrice": null,
    "image": "images/products/product-21.jpg",
    "imageHover": "images/products/product-21-hover.jpg",
    "category": "Mới",
    "section": "men",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 22,
    "name": "LuxeSport Lab LuxeTech Court Slam Polo",
    "brand": "LuxeSport Lab",
    "gender": "men",
    "color": "white",
    "price": 750000,
    "oldPrice": null,
    "image": "images/products/product-22.jpg",
    "imageHover": "images/products/product-22-hover.jpg",
    "category": "Hot",
    "section": "men",
    "productType": "clothing",
    "activity": "tennis",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 23,
    "name": "LuxeSport Lab Titan Heavy Powerlifting Belt",
    "brand": "LuxeSport Lab",
    "gender": "men",
    "color": "blue",
    "price": 950000,
    "oldPrice": 1200000,
    "image": "images/products/product-23.jpg",
    "imageHover": "images/products/product-23-hover.jpg",
    "category": "Khuyến mãi",
    "section": "men",
    "productType": "accessory",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 24,
    "name": "LuxeSport Lab Lab Pro Strength Training Tight",
    "brand": "LuxeSport Lab",
    "gender": "men",
    "color": "grey",
    "price": 790000,
    "oldPrice": null,
    "image": "images/products/product-24.jpg",
    "imageHover": "images/products/product-24-hover.jpg",
    "category": "Bán chạy",
    "section": "men",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 25,
    "name": "LuxeSport Lab Heavyweight Studio Drop-Arm Tank",
    "brand": "LuxeSport Lab",
    "gender": "men",
    "color": "red",
    "price": 480000,
    "oldPrice": null,
    "image": "images/products/product-25.jpg",
    "imageHover": "images/products/product-25-hover.jpg",
    "category": "Mới",
    "section": "men",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 26,
    "name": "LuxeSport Lab PowerHold High-Waist Tights",
    "brand": "LuxeSport Lab",
    "gender": "women",
    "color": "green",
    "price": 890000,
    "oldPrice": null,
    "image": "images/products/product-26.jpg",
    "imageHover": "images/products/product-26-hover.jpg",
    "category": "Hot",
    "section": "women",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 27,
    "name": "LuxeSport Lab AeroFlow Court Tennis Skirt",
    "brand": "LuxeSport Lab",
    "gender": "women",
    "color": "black",
    "price": 690000,
    "oldPrice": null,
    "image": "images/products/product-27.jpg",
    "imageHover": "images/products/product-27-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "tennis",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 28,
    "name": "LuxeSport Lab Seamless Breathe Yoga Jumpsuit",
    "brand": "LuxeSport Lab",
    "gender": "women",
    "color": "white",
    "price": 1150000,
    "oldPrice": 1400000,
    "image": "images/products/product-28.jpg",
    "imageHover": "images/products/product-28-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 29,
    "name": "LuxeSport Lab SculptRib Longline Sports Bra",
    "brand": "LuxeSport Lab",
    "gender": "women",
    "color": "blue",
    "price": 640000,
    "oldPrice": 780000,
    "image": "images/products/product-29.jpg",
    "imageHover": "images/products/product-29-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 30,
    "name": "LuxeSport Lab Wmn Studio Luxe Contour Legging",
    "brand": "LuxeSport Lab",
    "gender": "women",
    "color": "grey",
    "price": 850000,
    "oldPrice": null,
    "image": "images/products/product-30.jpg",
    "imageHover": "images/products/product-30-hover.jpg",
    "category": "Hot",
    "section": "women",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 31,
    "name": "LuxeSport Lab Kids Thermal Fleece Tracksuit",
    "brand": "LuxeSport Lab",
    "gender": "kids",
    "color": "red",
    "price": 820000,
    "oldPrice": 980000,
    "image": "images/products/product-31.jpg",
    "imageHover": "images/products/product-31-hover.jpg",
    "category": "Khuyến mãi",
    "section": "kids",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 32,
    "name": "LuxeSport Lab Junior Active Core Cotton Tee",
    "brand": "LuxeSport Lab",
    "gender": "kids",
    "color": "green",
    "price": 310000,
    "oldPrice": null,
    "image": "images/products/product-32.jpg",
    "imageHover": "images/products/product-32-hover.jpg",
    "category": "Bán chạy",
    "section": "kids",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 33,
    "name": "LuxeSport Lab Youth Studio Stretch Jogger",
    "brand": "LuxeSport Lab",
    "gender": "kids",
    "color": "black",
    "price": 420000,
    "oldPrice": null,
    "image": "images/products/product-33.jpg",
    "imageHover": "images/products/product-33-hover.jpg",
    "category": "Mới",
    "section": "kids",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 34,
    "name": "LuxeSport Lab Junior LuxeSport Mini Backpack",
    "brand": "LuxeSport Lab",
    "gender": "kids",
    "color": "white",
    "price": 390000,
    "oldPrice": null,
    "image": "images/products/product-34.jpg",
    "imageHover": "images/products/product-34-hover.jpg",
    "category": "Hot",
    "section": "kids",
    "productType": "accessory",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 35,
    "name": "LuxeSport Lab Tech Fleece Heavyweight Hoodie",
    "brand": "LuxeSport Lab",
    "gender": "unisex",
    "color": "blue",
    "price": 1150000,
    "oldPrice": null,
    "image": "images/products/product-35.jpg",
    "imageHover": "images/products/product-35-hover.jpg",
    "category": "Khuyến mãi",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 36,
    "name": "LuxeSport Lab Retro Track Zip Jacket 90s",
    "brand": "LuxeSport Lab",
    "gender": "unisex",
    "color": "grey",
    "price": 1250000,
    "oldPrice": 1500000,
    "image": "images/products/product-36.jpg",
    "imageHover": "images/products/product-36-hover.jpg",
    "category": "Khuyến mãi",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 37,
    "name": "LuxeSport Lab Minimalist Heavy Terry Sweatpants",
    "brand": "LuxeSport Lab",
    "gender": "unisex",
    "color": "red",
    "price": 890000,
    "oldPrice": null,
    "image": "images/products/product-37.jpg",
    "imageHover": "images/products/product-37-hover.jpg",
    "category": "Mới",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 38,
    "name": "LuxeSport Lab Pro Gym Duffle 45L Shoe Pod",
    "brand": "LuxeSport Lab",
    "gender": "unisex",
    "color": "green",
    "price": 790000,
    "oldPrice": null,
    "image": "images/products/product-38.jpg",
    "imageHover": "images/products/product-38-hover.jpg",
    "category": "Hot",
    "section": "icons",
    "productType": "accessory",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 39,
    "name": "LuxeSport Lab Waterproof Ergonomic Chest Rig",
    "brand": "LuxeSport Lab",
    "gender": "unisex",
    "color": "black",
    "price": 490000,
    "oldPrice": null,
    "image": "images/products/product-39.jpg",
    "imageHover": "images/products/product-39-hover.jpg",
    "category": "Khuyến mãi",
    "section": "icons",
    "productType": "accessory",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 40,
    "name": "LuxeSport Lab Polar Recovery Ice Compression",
    "brand": "LuxeSport Lab",
    "gender": "unisex",
    "color": "white",
    "price": 380000,
    "oldPrice": null,
    "image": "images/products/product-40.jpg",
    "imageHover": "images/products/product-40-hover.jpg",
    "category": "Bán chạy",
    "section": "icons",
    "productType": "accessory",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ LuxeSport Lab trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 41,
    "name": "AeroTech Pro AeroDry Compression Tee",
    "brand": "AeroTech",
    "gender": "men",
    "color": "black",
    "price": 650000,
    "oldPrice": null,
    "image": "images/products/product-41.jpg",
    "imageHover": "images/products/product-41-hover.jpg",
    "category": "Mới",
    "section": "men",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 42,
    "name": "AeroTech AeroVent Marathon Singlet",
    "brand": "AeroTech",
    "gender": "men",
    "color": "white",
    "price": 580000,
    "oldPrice": 720000,
    "image": "images/products/product-42.jpg",
    "imageHover": "images/products/product-42-hover.jpg",
    "category": "Khuyến mãi",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 43,
    "name": "AeroTech AeroVent Hyperlight Wind Jacket",
    "brand": "AeroTech",
    "gender": "men",
    "color": "blue",
    "price": 1250000,
    "oldPrice": null,
    "image": "images/products/product-43.jpg",
    "imageHover": "images/products/product-43-hover.jpg",
    "category": "Khuyến mãi",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 44,
    "name": "AeroTech AeroSprint 4\" Perforated Shorts",
    "brand": "AeroTech",
    "gender": "men",
    "color": "grey",
    "price": 540000,
    "oldPrice": null,
    "image": "images/products/product-44.jpg",
    "imageHover": "images/products/product-44-hover.jpg",
    "category": "Bán chạy",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 45,
    "name": "AeroTech CoolWeave Long Sleeve Running Top",
    "brand": "AeroTech",
    "gender": "men",
    "color": "red",
    "price": 680000,
    "oldPrice": null,
    "image": "images/products/product-45.jpg",
    "imageHover": "images/products/product-45-hover.jpg",
    "category": "Mới",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 46,
    "name": "AeroTech Impact High-Support Sports Bra",
    "brand": "AeroTech",
    "gender": "women",
    "color": "green",
    "price": 620000,
    "oldPrice": 780000,
    "image": "images/products/product-46.jpg",
    "imageHover": "images/products/product-46-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 47,
    "name": "AeroTech Aura High-Rise 6\" Biker Shorts",
    "brand": "AeroTech",
    "gender": "women",
    "color": "black",
    "price": 550000,
    "oldPrice": null,
    "image": "images/products/product-47.jpg",
    "imageHover": "images/products/product-47-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 48,
    "name": "AeroTech Wmn AeroBreathe Strappy Tank",
    "brand": "AeroTech",
    "gender": "women",
    "color": "white",
    "price": 480000,
    "oldPrice": null,
    "image": "images/products/product-48.jpg",
    "imageHover": "images/products/product-48-hover.jpg",
    "category": "Bán chạy",
    "section": "women",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 49,
    "name": "AeroTech AeroFlow Women's Court Dress",
    "brand": "AeroTech",
    "gender": "men",
    "color": "blue",
    "price": 920000,
    "oldPrice": 1100000,
    "image": "images/products/product-49.jpg",
    "imageHover": "images/products/product-49-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "tennis",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 50,
    "name": "AeroTech AeroShield Sun UV Protective Top",
    "brand": "AeroTech",
    "gender": "women",
    "color": "grey",
    "price": 590000,
    "oldPrice": null,
    "image": "images/products/product-50.jpg",
    "imageHover": "images/products/product-50-hover.jpg",
    "category": "Hot",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 51,
    "name": "AeroTech Junior Sprint QuickDry Tee",
    "brand": "AeroTech",
    "gender": "kids",
    "color": "red",
    "price": 350000,
    "oldPrice": null,
    "image": "images/products/product-51.jpg",
    "imageHover": "images/products/product-51-hover.jpg",
    "category": "Khuyến mãi",
    "section": "kids",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 52,
    "name": "AeroTech Junior AeroDry Track Pants",
    "brand": "AeroTech",
    "gender": "kids",
    "color": "green",
    "price": 420000,
    "oldPrice": null,
    "image": "images/products/product-52.jpg",
    "imageHover": "images/products/product-52-hover.jpg",
    "category": "Bán chạy",
    "section": "kids",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 53,
    "name": "AeroTech Youth AeroVent Training Shorts",
    "brand": "AeroTech",
    "gender": "kids",
    "color": "black",
    "price": 290000,
    "oldPrice": null,
    "image": "images/products/product-53.jpg",
    "imageHover": "images/products/product-53-hover.jpg",
    "category": "Mới",
    "section": "kids",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 54,
    "name": "AeroTech Junior HydroCool Sports Cap",
    "brand": "AeroTech",
    "gender": "kids",
    "color": "white",
    "price": 220000,
    "oldPrice": null,
    "image": "images/products/product-54.jpg",
    "imageHover": "images/products/product-54-hover.jpg",
    "category": "Hot",
    "section": "kids",
    "productType": "accessory",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 55,
    "name": "AeroTech AeroTech Street Tech Zip Pullover",
    "brand": "AeroTech",
    "gender": "unisex",
    "color": "blue",
    "price": 950000,
    "oldPrice": null,
    "image": "images/products/product-55.jpg",
    "imageHover": "images/products/product-55-hover.jpg",
    "category": "Khuyến mãi",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 56,
    "name": "AeroTech AeroVent Casual Relaxed Jogger",
    "brand": "AeroTech",
    "gender": "unisex",
    "color": "grey",
    "price": 790000,
    "oldPrice": null,
    "image": "images/products/product-56.jpg",
    "imageHover": "images/products/product-56-hover.jpg",
    "category": "Bán chạy",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 57,
    "name": "AeroTech AeroTech Minimalist Sling Bag",
    "brand": "AeroTech",
    "gender": "unisex",
    "color": "red",
    "price": 380000,
    "oldPrice": null,
    "image": "images/products/product-57.jpg",
    "imageHover": "images/products/product-57-hover.jpg",
    "category": "Mới",
    "section": "streetwear",
    "productType": "accessory",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 58,
    "name": "AeroTech Cooling MicroMesh Running Cap",
    "brand": "AeroTech",
    "gender": "unisex",
    "color": "green",
    "price": 320000,
    "oldPrice": null,
    "image": "images/products/product-58.jpg",
    "imageHover": "images/products/product-58-hover.jpg",
    "category": "Hot",
    "section": "icons",
    "productType": "accessory",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 59,
    "name": "AeroTech AeroFlow Elite Tennis Jacket",
    "brand": "AeroTech",
    "gender": "unisex",
    "color": "black",
    "price": 1350000,
    "oldPrice": 1600000,
    "image": "images/products/product-59.jpg",
    "imageHover": "images/products/product-59-hover.jpg",
    "category": "Khuyến mãi",
    "section": "icons",
    "productType": "clothing",
    "activity": "tennis",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 60,
    "name": "AeroTech AeroDry Seamless Compression Suit",
    "brand": "AeroTech",
    "gender": "unisex",
    "color": "white",
    "price": 1750000,
    "oldPrice": null,
    "image": "images/products/product-60.jpg",
    "imageHover": "images/products/product-60-hover.jpg",
    "category": "Bán chạy",
    "section": "icons",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ AeroTech trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 61,
    "name": "Apex Run SpeedStride 5\" Running Shorts",
    "brand": "Apex Run",
    "gender": "men",
    "color": "black",
    "price": 520000,
    "oldPrice": null,
    "image": "images/products/product-61.jpg",
    "imageHover": "images/products/product-61-hover.jpg",
    "category": "Mới",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 62,
    "name": "Apex Run Apex 2-in-1 Compression Shorts",
    "brand": "Apex Run",
    "gender": "men",
    "color": "white",
    "price": 680000,
    "oldPrice": null,
    "image": "images/products/product-62.jpg",
    "imageHover": "images/products/product-62-hover.jpg",
    "category": "Hot",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 63,
    "name": "Apex Run FastPace Seamless Race Tee",
    "brand": "Apex Run",
    "gender": "men",
    "color": "blue",
    "price": 590000,
    "oldPrice": null,
    "image": "images/products/product-63.jpg",
    "imageHover": "images/products/product-63-hover.jpg",
    "category": "Khuyến mãi",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 64,
    "name": "Apex Run Apex Run Reflective Wind Gilet",
    "brand": "Apex Run",
    "gender": "men",
    "color": "grey",
    "price": 790000,
    "oldPrice": null,
    "image": "images/products/product-64.jpg",
    "imageHover": "images/products/product-64-hover.jpg",
    "category": "Bán chạy",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 65,
    "name": "Apex Run Marathon Recovery Slide Sandals",
    "brand": "Apex Run",
    "gender": "men",
    "color": "red",
    "price": 650000,
    "oldPrice": null,
    "image": "images/products/product-65.jpg",
    "imageHover": "images/products/product-65-hover.jpg",
    "category": "Mới",
    "section": "men",
    "productType": "shoes",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 66,
    "name": "Apex Run PaceSetter 3\" Race Shorts Wmn",
    "brand": "Apex Run",
    "gender": "women",
    "color": "green",
    "price": 490000,
    "oldPrice": null,
    "image": "images/products/product-66.jpg",
    "imageHover": "images/products/product-66-hover.jpg",
    "category": "Hot",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 67,
    "name": "Apex Run Wmn Apex Speed Tights 7/8",
    "brand": "Apex Run",
    "gender": "women",
    "color": "black",
    "price": 850000,
    "oldPrice": 1050000,
    "image": "images/products/product-67.jpg",
    "imageHover": "images/products/product-67-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 68,
    "name": "Apex Run Tempo Pace Graphic Running Tee",
    "brand": "Apex Run",
    "gender": "women",
    "color": "white",
    "price": 480000,
    "oldPrice": null,
    "image": "images/products/product-68.jpg",
    "imageHover": "images/products/product-68-hover.jpg",
    "category": "Bán chạy",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 69,
    "name": "Apex Run Wmn Endurance Aero Speed Bra",
    "brand": "Apex Run",
    "gender": "women",
    "color": "blue",
    "price": 590000,
    "oldPrice": null,
    "image": "images/products/product-69.jpg",
    "imageHover": "images/products/product-69-hover.jpg",
    "category": "Mới",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 70,
    "name": "Apex Run Apex Flow Split Running Skirt",
    "brand": "Apex Run",
    "gender": "women",
    "color": "grey",
    "price": 620000,
    "oldPrice": null,
    "image": "images/products/product-70.jpg",
    "imageHover": "images/products/product-70-hover.jpg",
    "category": "Hot",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 71,
    "name": "Apex Run Youth Active Training Shorts",
    "brand": "Apex Run",
    "gender": "kids",
    "color": "red",
    "price": 320000,
    "oldPrice": null,
    "image": "images/products/product-71.jpg",
    "imageHover": "images/products/product-71-hover.jpg",
    "category": "Khuyến mãi",
    "section": "kids",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 72,
    "name": "Apex Run Youth Stride Lite Running Shoes",
    "brand": "Apex Run",
    "gender": "kids",
    "color": "green",
    "price": 890000,
    "oldPrice": null,
    "image": "images/products/product-72.jpg",
    "imageHover": "images/products/product-72-hover.jpg",
    "category": "Bán chạy",
    "section": "kids",
    "productType": "shoes",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 73,
    "name": "Apex Run Junior Apex Stride Breathable Tee",
    "brand": "Apex Run",
    "gender": "kids",
    "color": "black",
    "price": 310000,
    "oldPrice": null,
    "image": "images/products/product-73.jpg",
    "imageHover": "images/products/product-73-hover.jpg",
    "category": "Mới",
    "section": "kids",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 74,
    "name": "Apex Run Kids LightSpeed Elastic Race Belt",
    "brand": "Apex Run",
    "gender": "kids",
    "color": "white",
    "price": 210000,
    "oldPrice": null,
    "image": "images/products/product-74.jpg",
    "imageHover": "images/products/product-74-hover.jpg",
    "category": "Hot",
    "section": "kids",
    "productType": "accessory",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 75,
    "name": "Apex Run AeroGlide Street Runner Sneaker",
    "brand": "Apex Run",
    "gender": "unisex",
    "color": "blue",
    "price": 1850000,
    "oldPrice": 2200000,
    "image": "images/products/product-75.jpg",
    "imageHover": "images/products/product-75-hover.jpg",
    "category": "Khuyến mãi",
    "section": "streetwear",
    "productType": "shoes",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 76,
    "name": "Apex Run Apex Post-Race Fleece Pullover",
    "brand": "Apex Run",
    "gender": "unisex",
    "color": "grey",
    "price": 980000,
    "oldPrice": null,
    "image": "images/products/product-76.jpg",
    "imageHover": "images/products/product-76-hover.jpg",
    "category": "Bán chạy",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 77,
    "name": "Apex Run Apex Runner Canvas Tote Bag",
    "brand": "Apex Run",
    "gender": "unisex",
    "color": "red",
    "price": 320000,
    "oldPrice": null,
    "image": "images/products/product-77.jpg",
    "imageHover": "images/products/product-77-hover.jpg",
    "category": "Mới",
    "section": "streetwear",
    "productType": "accessory",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 78,
    "name": "Apex Run Apex Aero GPS Smart Sport Watch",
    "brand": "Apex Run",
    "gender": "unisex",
    "color": "green",
    "price": 3650000,
    "oldPrice": 4200000,
    "image": "images/products/product-78.jpg",
    "imageHover": "images/products/product-78-hover.jpg",
    "category": "Khuyến mãi",
    "section": "icons",
    "productType": "accessory",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 79,
    "name": "Apex Run UltraStamina Running Belt Waistpack",
    "brand": "Apex Run",
    "gender": "unisex",
    "color": "black",
    "price": 340000,
    "oldPrice": null,
    "image": "images/products/product-79.jpg",
    "imageHover": "images/products/product-79-hover.jpg",
    "category": "Khuyến mãi",
    "section": "icons",
    "productType": "accessory",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 80,
    "name": "Apex Run Trail Running Trekking Poles Carbon",
    "brand": "Apex Run",
    "gender": "unisex",
    "color": "white",
    "price": 1250000,
    "oldPrice": 1500000,
    "image": "images/products/product-80.jpg",
    "imageHover": "images/products/product-80-hover.jpg",
    "category": "Khuyến mãi",
    "section": "icons",
    "productType": "accessory",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Apex Run trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 81,
    "name": "Endura StormShield Packable Windbreaker",
    "brand": "Endura",
    "gender": "men",
    "color": "black",
    "price": 1450000,
    "oldPrice": 1800000,
    "image": "images/products/product-81.jpg",
    "imageHover": "images/products/product-81-hover.jpg",
    "category": "Khuyến mãi",
    "section": "men",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 82,
    "name": "Endura Trail Shield Ripstop Cargo Shorts",
    "brand": "Endura",
    "gender": "men",
    "color": "white",
    "price": 690000,
    "oldPrice": null,
    "image": "images/products/product-82.jpg",
    "imageHover": "images/products/product-82-hover.jpg",
    "category": "Hot",
    "section": "men",
    "productType": "clothing",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 83,
    "name": "Endura Endura All-Terrain Hiking Shoes",
    "brand": "Endura",
    "gender": "men",
    "color": "blue",
    "price": 2450000,
    "oldPrice": null,
    "image": "images/products/product-83.jpg",
    "imageHover": "images/products/product-83-hover.jpg",
    "category": "Khuyến mãi",
    "section": "men",
    "productType": "shoes",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 84,
    "name": "Endura Endura Quick-Dry Climbing Pants",
    "brand": "Endura",
    "gender": "men",
    "color": "grey",
    "price": 890000,
    "oldPrice": null,
    "image": "images/products/product-84.jpg",
    "imageHover": "images/products/product-84-hover.jpg",
    "category": "Bán chạy",
    "section": "men",
    "productType": "clothing",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 85,
    "name": "Endura Endura BaseLayer Thermal Crew",
    "brand": "Endura",
    "gender": "men",
    "color": "red",
    "price": 620000,
    "oldPrice": null,
    "image": "images/products/product-85.jpg",
    "imageHover": "images/products/product-85-hover.jpg",
    "category": "Mới",
    "section": "men",
    "productType": "clothing",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 86,
    "name": "Endura PureVelocity Ultra-Light Wind Vest",
    "brand": "Endura",
    "gender": "women",
    "color": "green",
    "price": 850000,
    "oldPrice": 1100000,
    "image": "images/products/product-86.jpg",
    "imageHover": "images/products/product-86-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "running",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 87,
    "name": "Endura ColdWeather Windstopper Tights Wmn",
    "brand": "Endura",
    "gender": "women",
    "color": "black",
    "price": 980000,
    "oldPrice": null,
    "image": "images/products/product-87.jpg",
    "imageHover": "images/products/product-87-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 88,
    "name": "Endura Wmn Endura Softshell Mountain Jacket",
    "brand": "Endura",
    "gender": "women",
    "color": "white",
    "price": 1550000,
    "oldPrice": 1900000,
    "image": "images/products/product-88.jpg",
    "imageHover": "images/products/product-88-hover.jpg",
    "category": "Khuyến mãi",
    "section": "women",
    "productType": "clothing",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 89,
    "name": "Endura Wmn Endura Trail Explorer Short",
    "brand": "Endura",
    "gender": "women",
    "color": "blue",
    "price": 590000,
    "oldPrice": null,
    "image": "images/products/product-89.jpg",
    "imageHover": "images/products/product-89-hover.jpg",
    "category": "Mới",
    "section": "women",
    "productType": "clothing",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 90,
    "name": "Endura Wmn StormShield Lightweight Parka",
    "brand": "Endura",
    "gender": "women",
    "color": "grey",
    "price": 1390000,
    "oldPrice": null,
    "image": "images/products/product-90.jpg",
    "imageHover": "images/products/product-90-hover.jpg",
    "category": "Hot",
    "section": "women",
    "productType": "clothing",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 91,
    "name": "Endura Junior Hydro-Shield Wind Jacket",
    "brand": "Endura",
    "gender": "kids",
    "color": "red",
    "price": 680000,
    "oldPrice": null,
    "image": "images/products/product-91.jpg",
    "imageHover": "images/products/product-91-hover.jpg",
    "category": "Khuyến mãi",
    "section": "kids",
    "productType": "clothing",
    "activity": "training",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 92,
    "name": "Endura Junior All-Terrain Trail Shoes",
    "brand": "Endura",
    "gender": "kids",
    "color": "green",
    "price": 890000,
    "oldPrice": null,
    "image": "images/products/product-92.jpg",
    "imageHover": "images/products/product-92-hover.jpg",
    "category": "Bán chạy",
    "section": "kids",
    "productType": "shoes",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 93,
    "name": "Endura Kids Outdoor Explorer Cargo Pant",
    "brand": "Endura",
    "gender": "kids",
    "color": "black",
    "price": 460000,
    "oldPrice": null,
    "image": "images/products/product-93.jpg",
    "imageHover": "images/products/product-93-hover.jpg",
    "category": "Mới",
    "section": "kids",
    "productType": "clothing",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 94,
    "name": "Endura Youth Endura Fleece Lined Beanie",
    "brand": "Endura",
    "gender": "kids",
    "color": "white",
    "price": 190000,
    "oldPrice": null,
    "image": "images/products/product-94.jpg",
    "imageHover": "images/products/product-94-hover.jpg",
    "category": "Hot",
    "section": "kids",
    "productType": "accessory",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  },
  {
    "id": 95,
    "name": "Endura Utility Cargo Woven Joggers",
    "brand": "Endura",
    "gender": "unisex",
    "color": "blue",
    "price": 980000,
    "oldPrice": null,
    "image": "images/products/product-95.jpg",
    "imageHover": "images/products/product-95-hover.jpg",
    "category": "Khuyến mãi",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      },
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      }
    ]
  },
  {
    "id": 96,
    "name": "Endura Tactical Tech Anorak Pullover",
    "brand": "Endura",
    "gender": "unisex",
    "color": "grey",
    "price": 1350000,
    "oldPrice": 1650000,
    "image": "images/products/product-96.jpg",
    "imageHover": "images/products/product-96-hover.jpg",
    "category": "Khuyến mãi",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xám Bạc",
        "hex": "#94a3b8"
      },
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      }
    ]
  },
  {
    "id": 97,
    "name": "Endura Tactical Tech Utility Cross Vest",
    "brand": "Endura",
    "gender": "unisex",
    "color": "red",
    "price": 1100000,
    "oldPrice": null,
    "image": "images/products/product-97.jpg",
    "imageHover": "images/products/product-97-hover.jpg",
    "category": "Mới",
    "section": "streetwear",
    "productType": "clothing",
    "activity": "lifestyle",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đỏ Laser",
        "hex": "#e11d48"
      },
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      }
    ]
  },
  {
    "id": 98,
    "name": "Endura All-Weather Trail Ultra 3 Shoes",
    "brand": "Endura",
    "gender": "unisex",
    "color": "green",
    "price": 2850000,
    "oldPrice": null,
    "image": "images/products/product-98.jpg",
    "imageHover": "images/products/product-98-hover.jpg",
    "category": "Hot",
    "section": "icons",
    "productType": "shoes",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Xanh Rêu",
        "hex": "#3f4f44"
      },
      {
        "name": "Đen Than",
        "hex": "#111315"
      }
    ]
  },
  {
    "id": 99,
    "name": "Endura Endura Alpine GORE-TEX Jacket",
    "brand": "Endura",
    "gender": "unisex",
    "color": "black",
    "price": 3200000,
    "oldPrice": 3900000,
    "image": "images/products/product-99.jpg",
    "imageHover": "images/products/product-99-hover.jpg",
    "category": "Khuyến mãi",
    "section": "icons",
    "productType": "clothing",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Đen Than",
        "hex": "#111315"
      },
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      }
    ]
  },
  {
    "id": 100,
    "name": "Endura Waterproof Dry-Bag Backpack 30L",
    "brand": "Endura",
    "gender": "unisex",
    "color": "white",
    "price": 950000,
    "oldPrice": 1200000,
    "image": "images/products/product-100.jpg",
    "imageHover": "images/products/product-100-hover.jpg",
    "category": "Khuyến mãi",
    "section": "icons",
    "productType": "accessory",
    "activity": "trail",
    "description": "Thiết kế đỉnh cao từ Endura trang bị công nghệ sợi vi mô đàn hồi, chống mài mòn và tối ưu hóa bứt tốc trên mọi cự ly.",
    "availableColors": [
      {
        "name": "Trắng Băng",
        "hex": "#f8fafc"
      },
      {
        "name": "Xanh Ice Blue",
        "hex": "#38bdf8"
      }
    ]
  }
];
