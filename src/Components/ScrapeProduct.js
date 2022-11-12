//const list= require('../data');
const puppeteer= require('puppeteer');
//const list = require('../data');
const fs = require('fs');
const list1=[
    {
        id:1,
        img:"https://m.media-amazon.com/images/I/61aUBxqc5PL._SX679_.jpg",
        title: " 2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey  ",
        price: 329000

    },
    {
        id:2,
        img:"https://m.media-amazon.com/images/I/41USxvs+NlL._AC_SY780_FMwebp_.jpg",
        title: " Apple iPhone 11 (128GB) - Yellow   ",
        price: 49900

    },
    {
        id:3,
        img:"https://m.media-amazon.com/images/I/41fVP+e7CzS._AC_SY580_FMwebp_.jpg",
        title: "    OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)             ",
        price: 25000

    },
    {
        id:4,
        img:"https://m.media-amazon.com/images/I/61aUBxqc5PL._SX679_.jpg",
        title: " 2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey  ",
        price: 329000

    },
    {
        id:5,
        img:"https://m.media-amazon.com/images/I/61aUBxqc5PL._SX679_.jpg",
        title: " 2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey  ",
        price: 329000

    }
   
];


async function ScrapeProduct() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.amazon.in/Swiss-Beauty-Blusher-Highlighter-Shade-03/dp/B07T2DB8Q1/?_encoding=UTF8&pd_rd_w=HTVsV&content-id=amzn1.sym.9356c1b2-1f10-42e3-a054-9bd83ed840ab&pf_rd_p=9356c1b2-1f10-42e3-a054-9bd83ed840ab&pf_rd_r=PN6R6B6ZXZKMG6AYX2ZJ&pd_rd_wg=Deqk8&pd_rd_r=26f96c31-202c-4bf8-b562-72564d41f2c6&ref_=pd_gw_p13ncc_b_mass_i24l7myo&th=1"); 

    
    const [el] = await page.$x('//*[@id="title"]');
    const src = await el.getProperty('textContent');
    let prod_title = await src.jsonValue();

    const [el1] = await page.$x('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span/span[1]');
    const src1 = await el1.getProperty('innerHTML');
    let prod_price = await src1.jsonValue();

    const [el2] = await page.$x('//*[@id="landingImage"]');
    const src2 = await el2.getProperty('src');
    let prod_img = await src2.jsonValue();
    

    

   
   
    console.log(list1);
    browser.close();
}
export default ScrapeProduct;
