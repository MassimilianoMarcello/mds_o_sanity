import { getEarlyChildhood } from '@/sanity/sanity.query';
import Image from 'next/image';

 export default async function Early() {
     const earlys = await getEarlyChildhood();
  
    return (
      
 
         <div className="container">
            {earlys.map((early) => (
         <div  key={early._id}  >
           <div className='staff-card'>
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
          <p className="staff-name">{early.title}</p>
          <p className="staff-role">{early.infoParagraph}</p>
   
           </div>
              </div>
       ))}
     </div>
   );
 }



      
 