'use server';
import Select from './ui/select';
import Instance from './ui/instance';
const backIm = { backgroundImage: `url('/poloski.jpg')`,
borderRadius: '15px', 
backgroundSize: '100% 100%'
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    testIndex?: string;
    
  };
}) {
  const query = searchParams?.testIndex || '1';
  const res = await fetcher(query);
  const nh = res.norm;
  function sum(inst: {front: number, back: number, db: number}) {
    return Object.values(inst).reduce((acc: number, curr) => acc + curr, 0);
  }
  const devsum = sum(res.dev);
  const testsum = sum(res.test);
  const prodsum = sum(res.prod);
  const firstDiff = testsum - devsum;
  const secondDiff = prodsum - testsum;
  
  return (
    
        <>
          <Select />
          <div className="flex relative  flex-row p gap-[20px] lg:gap-[60px]   w-[92%] h-[70%] border-green-500">
          
            <Instance {...res.dev} item='dev' first={firstDiff}/>
            
            
          
          <Instance {...res.test} item='test' second={secondDiff}/>
  <Instance {...res.prod} item='prod'/>
  <Norm nh={nh}/>

        
          </div>
        </>
      
   
  );
}

async function fetcher(query: string) {
  console.log('данные обновлены')
  const res = await fetch(`https://rcslabs.ru/ttrp${query}.json`);
  const json = await res.json();
  console.log('json: ' + json);
  return json;
  
}
function Norm({nh}: {nh: number}) {
  return (
    <div className="relative flex flex-col justify-end mt-[10%] w-[18%] h-[80%]" >
      <div className="w-[100%] flex flex-col items-center justify-center overflow-hidden h-[auto] max-h-[100%] " style={{...backIm, height: `${nh * 5.5}px`}}>
      <div className=" flex flex-row w-[100px] h-[25px] items-center justify-center bg-white rounded-lg  ">
    {nh}
  </div>

      </div>
      <div className="absolute text-base text-black  bottom-[-45px] w-[20%] left-[30%]">норматив</div>
  </div>
  )
}

