const productData = [
  {
    id: "1",
    name: "Smooth Gimbal",
    category: "Photography",
    price: 400.99,
    image:
      "https://images.unsplash.com/photo-1559861796-cc4eb7e3cf01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2ltYmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description:
      "Portable, Foldable, and Magnetically Quick - Take this compact gimbal on all your adventures. Snap-in and out with ease with the magnetic clamp to capture the second you want to shoot.",
    sellerName: "Gimbal",
    sellerContact: "gimbal@yahoomail.com",
    // https://images.unsplash.com/photo-1612690669207-fed642192c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdhZGdldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60
  },
  {
    id: "2",
    name: "Orange Fit Pro",
    category: "Music",
    price: 120.87,
    image:
      "https://images.unsplash.com/photo-1664441156333-e424ea583a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdHMlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    description:
      "Wireless earbuds feature an advanced Bluetooth 5.3 chip and dual-channel transmission for more stable and faster transmission speeds,so you can enjoy consistent and stable calls even in areas with complex signals.Simply remove the headset from the charging case and they automatically connect to your phone.",
    sellerName: "Beams",
    sellerContact: "beam@yahoomail.com",
  },
  {
    id: "3",
    name: "Orange 14 Pro",
    category: "Phone",
    price: 1200.45,
    image:
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907-geo_inline.jpg.large.jpg",
    description:
      "Smart HDR 4 automatically refines the contrast, lighting, and skin tones for up to four people — so everyone looks their best The A15 Bionic chip for up to 1.2x faster graphics than A13 Bionic.",
    sellerName: "Ophone",
    sellerContact: "ophone@yahoomail.com",
  },
  {
    id: " 4",
    name: "Orange home Pod",
    category: "Speaker",
    price: 350.9,
    image:
      "https://images.unsplash.com/photo-1636829147637-6b88c84fb6e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description:
      "Jam-packed with innovation, HomePod mini fills the entire room with rich 360-degree audio. Place multiple speakers around the house for a connected sound system.² And with Siri, your favorite do-it-all intelligent assistant helps with everyday tasks and controls your smart home privately and securely.",
    sellerName: "Home Pod",
    sellerContact: "pod@yahoomail.com",
  },
  {
    id: "5",
    name: "Orange Smart Watch",
    category: "Watch",
    price: 700.04,
    image:
      "https://images.unsplash.com/photo-1616680450981-fc471a4b681c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    description:
      "LEAVE YOUR PHONE AT HOME: Orange Watch Series 6 GPS + Cellular LTE Model lets you call, text, and get directions without your phone present. It offers multiple connectivity options, including: Bluetooth, Wi-Fi, NFC, and 4G LTE to suit your needs, whatever they might be.",
    sellerName: "Owatch",
    sellerContact: "owatch@yahoomail.com",
  },
  {
    id: "6",
    name: "Orange Desktop",
    category: "Computer",
    price: 2000.76,
    image:
      "https://images.unsplash.com/photo-1494173853739-c21f58b16055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBkZXNrdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    description:
      "Studio-quality three-mic array Six-speaker sound system with Spatial Audio 8TB Maximum configurable storage inspired by pros but designed for everyone, with dark mode, stacks, easier screenshots, new built-in apps, and more 6-Core 8th-Generation Intel Core i5 Processor",
    sellerName: "Omonitors",
    sellerContact: "monitor@yahoomail.com",
  },
  {
    id: "7",
    name: "Orange Laptop",
    category: "Laptop",
    price: 1890.55,
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description:
      "  13, 3.1GHz, Intel Core i716GB Memory, 512GB Solid State Drive Integrated Intel Iris Graphics 6100 graphics processor Connectivity includes 802.11ac Wi-Fi, Bluetooth 4.0, two USB 3.0 ports, two Thunderbolt 2 ports, an HDMI port, an audio in/out port, and an SDXC card slot. includes new MagSafe adapter ",
    sellerName: "Olaptops",
    sellerContact: "olaptop@yahoomail.com",
  },
  {
    id: "8",
    name: "Orange Smart Tv",
    category: "Television",
    price: 700.64,
    image:
      "https://images.unsplash.com/photo-1542487354-feaf93476caa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYXJ0JTIwdHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    description:
      "Works with Alexa Full HD 1080p Resolution - Enjoy a viewing experience that is 2x the clarity of standard HD TVs..Power Supply (V) AC110-120V 50/60Hz Smart TV - Get to your entertainment the faster, easier, and more intelligent way. Easily access your streaming services all in one place using the Samsung Remote Control.",
    sellerName: "OTelevision",
    sellerContact: "tv@yahoomail.com",
  },
  {
    id: "9",
    name: "Orange Headphones",
    category: "Music",
    price: 340.1,
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    description:
      "High-performance wireless Bluetooth headphones in gold Features the Apple W1 chip and Class 1 wireless Bluetooth connectivity With up to 40 hours of battery life, Beats Solo3 wireless is your perfect everyday headphone Compatible with iOS and Android devices With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low Adjustable fit with comfort-cushioned ear cups",
    sellerName: "Owireless",
    sellerContact: "owireless@yahoomail.com",
  },
  {
    id: "10",
    name: "Orange Headphones",
    category: "Music",
    price: 340.1,
    image: "src/assets/products/product-5.jpg",
    description:
      "High-performance wireless Bluetooth headphones in gold Features the Apple W1 chip and Class 1 wireless Bluetooth connectivity With up to 40 hours of battery life, Beats Solo3 wireless is your perfect everyday headphone Compatible with iOS and Android devices With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low Adjustable fit with comfort-cushioned ear cups",
    sellerName: "Owireless",
    sellerContact: "owireless@yahoomail.com",
  },
  {
    id: "11",
    name: "Orange Headphones",
    category: "Music",
    price: 340.1,
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    description:
      "High-performance wireless Bluetooth headphones in gold Features the Apple W1 chip and Class 1 wireless Bluetooth connectivity With up to 40 hours of battery life, Beats Solo3 wireless is your perfect everyday headphone Compatible with iOS and Android devices With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low Adjustable fit with comfort-cushioned ear cups",
    sellerName: "Owireless",
    sellerContact: "owireless@yahoomail.com",
  },
  {
    id: "12",
    name: "Orange Headphones",
    category: "Music",
    price: 340.1,
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    description:
      "High-performance wireless Bluetooth headphones in gold Features the Apple W1 chip and Class 1 wireless Bluetooth connectivity With up to 40 hours of battery life, Beats Solo3 wireless is your perfect everyday headphone Compatible with iOS and Android devices With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low Adjustable fit with comfort-cushioned ear cups",
    sellerName: "Owireless",
    sellerContact: "owireless@yahoomail.com",
  },
  //   {
  //     id:10 ,
  //     name: ,
  //     category: ,
  //     price: ,
  //     image: ,
  //     description:,
  //     sellerName: ,
  //     sellerContact:  "@yahoomail.com",
  //   },
  //   {
  //     id:11 ,
  //     name: ,
  //     category: ,
  //     price: ,
  //     image: ,
  //     description:,
  //     sellerName: ,
  //     sellerContact:  "@yahoomail.com",
  //   },
  //   {
  //     id: 12,
  //     name: ,
  //     category: ,
  //     price: ,
  //     image: ,
  //     description:,
  //     sellerName: ,
  //     sellerContact:  "@yahoomail.com",
  //   },
];

export default productData ;