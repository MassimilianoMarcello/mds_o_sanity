import { getEarlyChildhood } from '@/sanity/sanity.query';
import Image from 'next/image';


 export default async function Early() {
     const earlys = await getEarlyChildhood();
  
    return (
      
 
         <div className="container">
            {earlys.map((early) => (
         <div  key={early._id}  >
           <div className='images-card'>
           {early.heroImage && (
           
           <Image
          
              src={early.heroImage}
              alt={early.heroTitle}
              width={300}
              height={300}
              priority
            />
          )}
          {early.decorationImage && (
           
           <Image
          
              src={early.decorationImage}
              alt={early.heroTitle}
              width={300}
              height={300}
              priority
            />
          )}
          <div className="text-container">
          <p className="title-card">{early.title}</p>
          <p className="text-card">{early.infoParagraph}</p>
          </div>
      
   
           </div>
              </div>
       ))}
     </div>
   );
 }



      
 