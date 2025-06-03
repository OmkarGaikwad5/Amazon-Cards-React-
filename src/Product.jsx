import "./Product.css";
import Price from "./Price.jsx";

export default function Product({title,idx}){
    let oldPrices = ["12,495","11,900","1,599","599"];
    let newPrices = ["8,999","9,199","899","278"];
    let description = [
        ["8000 DPI","5 Programmable Buttons"],
        ["Intituitive Touch Surface","Designed For ipad pro"],
        ["Designed For ipad pro","Intituitive Touch Surface"],
        ["Wireless Mouse 2.4GHZ","Optical Orientation"],
    ];
    return(
        <div className="Product">
       <h3>{title}</h3>
       <p>{description[idx][0]}</p>
       <p>{description[idx][1]}</p>
       <p>{description[idx][2]}</p>
       <p>{description[idx][3]}</p>
       <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
       </div>
    );
}