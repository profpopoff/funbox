import { useState } from 'react'
import './Product.css'

export default function Product({ data }) {

   const [isActive, setIsActive] = useState(false)

   const enumerate = (num, dec) => {
      if (num <= 20 && num >= 10) return dec[2]
      if (num > 20) num = num % 10
      if (num > 100) num = num % 100
      return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2]
   }

   return (
      <div className='product'>
         <div
            className={`card${!!isActive ? ' active' : ''}${data.amount === 0 ? ' disabled' : ''}`}
            onClick={() => setIsActive(!isActive)}
         >
            <p className='description'>{data.packageDescription}</p>
            <h2 className='title'>{data.title}</h2>
            <h3 className='flavour'>{data.flavour}</h3>
            <div className='set'>
               <span>
                  <span className='number'>
                     {data.servingsPerPackage}
                  </span> {enumerate(data.servingsPerPackage, ["порция", "порции", "порций"])}
               </span>
               {data.bonuses.mouse && <span>
                  {data.bonuses.mouse > 1 && <span className='number'>
                     {data.bonuses.mouse}
                  </span>} <span>{enumerate(data.bonuses.mouse, ["мышь", "мыши", "мышей"])} в подарок</span>
               </span>}
               {data.bonuses.customer && <span>{data.bonuses.customer}</span>}
            </div>
            <img className='image' src={data.image} alt="cat" />
            <div className='weight'>
               <span className='weight--value'>{data.weight}</span>
               <span className='weight--units'>кг</span>
            </div>
         </div>
         <div className="bottom-text">
            {data.amount === 0 ?
               <span>Печалька, {data.flavour} закончился.</span> :
               !isActive ?
                  <span>Чего сидишь? Порадуй котэ, <span
                     className='link' onClick={() => setIsActive(!isActive)}>купи.</span>
                  </span> :
                  <span>{data.description}</span>
            }
         </div>
      </div>
   )
}