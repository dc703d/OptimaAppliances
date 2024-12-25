import logo from './logo.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import logo_png from './Logo1.png' 
import logo2 from './PTIMA_white.png'
import kitchen from './Kitchen.png'
import washing_machine from './WashingMachine.jpg'
import tumble_dryer from './TumbleDryer.jpg'
import hood from './Hood.jpg'
import oven from './Oven.jpg'
import fridge from './AmericanFridge.jpg'
import dishwasher from './Dishwasher.jpg'
import backgroundImage from './background2.jpg'
import arrow from './Arrow.png'
import house from './home.png'
import office from './office-building.png'
import briefcase from './briefcase.png'
import speedometer from './dashboard.png'
import engineericon from './engineer.png'
import handshake from './handshake.png'
import buildings from './buildings.png'
import house_hand from './house_hand.png'
import pricetag from './price-tag.png'
import toolbox from './toolbox.png'
import wrench from './wrench.png'
import briefcase_circle from './briefcase_circle.png'
import business from './business.png'
import homepage from './home-page.png'
import home_red from './home_red.png'
import engineer_door from './engineer-at-door.png'
import tradesman from './tradesman.jpg'


export const assets = {
    logo,
    cross_icon,
    menu_icon,
    star_icon,
    left_arrow,
    right_arrow,
    logo_png,
    logo2,
    kitchen,
    washing_machine,
    dishwasher,
    tumble_dryer,
    fridge,
    oven,
    hood,
    backgroundImage,
    arrow,
    house,
    office,
    briefcase,
    speedometer,
    house_hand,
    wrench,
    pricetag,
    engineericon,
    handshake,
    buildings,
    toolbox,
    engineer_door,
    tradesman


}

export const projectsData = [
    {
      title: "Washing Machine",
      image: washing_machine
    },
    {
      title: "Fridge Freezer",
      image: fridge
    },
    {
      title: "Dishwasher",
      image: dishwasher
    },
    {
      title: "Oven and Cooker",
      image: oven
    },
    {
      title: "Tumble Dryer",
      image: tumble_dryer
    },
    {
      title: "Hood",
      image: hood
    },
    
  ];

  

  export const testimonialsData = [
    {
        name: "Rohit Ladher",
        title: "Dishwasher",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: '" Excellent service. Quick arrival and diagnosis. Reasonable pricing too. Will recommend highly. "'
    },
    {
        name: "Nazmi Muka",
        title: "Washing Machine",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 5,
        text: '" Rang this local company and was very impressed with the same day service & that they had the spares to repair my machine  which was great . Also they were very reasonably priced - would highly recommend. "'
    },
    {
        name: "Lawrence Elliott",
        title: "American Style Fridge-Freezer",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: '" Our American style fridge-freezer suddenly stopped working overnight. Optima Appliances were the only ones who would come on the same day and within an hour. They checked the fridge/freezer, found out what was wrong immediately and offered to find a brand new replacement. I recommend their services. "'
    }
];


export const servicesData = [
  {
      name: "Domestic",
      image: home_red,
      alt: "Domestic Services",
      text: 'We offer professional repair and servicing for all your home appliances — whether it’s a faulty oven, washing machine, fridge or other household appliances. Fast, reliable, and affordable repairs.',
      icon1: engineericon,
      icon2: speedometer,
      icon3: pricetag,
      subheading1: "Hands-on expertise for every appliance.",
      subheading2: "Prompt service to get you back on track.",
      subheading3: "Top-notch repairs without breaking the bank.",
  },
  {
      name: "Commercial",
      image: business,
      alt: "Commercial Services",
      text: 'We specialize in the maintenance and repair of commercial appliances. From office kitchen setups to full-scale restaurant equipment, we ensure minimal downtime for your business.',
      icon1: buildings,
      icon2: wrench,
      icon3: engineericon,
      subheading1: "Supporting your business with seamless solutions.",
      subheading2: "Tailored services to meet every business demand.",
      subheading3: "Commercial appliance expertise you can trust.",
  },
  {
      name: "Agency",
      image: briefcase_circle,
      alt: "Agency Services",
      text: 'We work with estate agents and property managers to provide efficient appliance repairs and installations for residential and commercial properties, keeping your tenants satisfied.',
      icon1: handshake,
      icon2: house_hand,
      icon3: toolbox,
      subheading1: "Dependable partnerships for smooth operations.",
      subheading2: "Focused expertise for property appliance needs.",
      subheading3: "Complete care for all your property appliances.",
  }
];