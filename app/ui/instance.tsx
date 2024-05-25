'use client';
import {  useEffect, useState } from 'react';

type InstanceProps = {
    db: number;
    back: number;
    front: number;
    item: string;
    first?: number;
    second?: number;
};

export default function Instance(props: InstanceProps) {
    const { front, back, db, item, first, second} = props;
    const [arbottom, setArbottom] = useState(503);
    const [leftFirst, setFirst] = useState(0);
    const [leftSecond, setSecond] = useState(0);
    const[connectionWidth, setWidth] = useState(0);
    const [gap, setGap] = useState(0);
    const firstDiff = first ?? undefined;
    const secondDiff = second ?? undefined;
    

    useEffect(() => {
        const handleResize = () => {
            window.location.reload();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

    useEffect(() => {
        const ref = document.getElementById(`ref-${item}`);
        

        if (ref) {
            const height = ref.offsetHeight + 5;
            setArbottom(height + 5);
            console.log(height);
        }
        
        
        
    });
    useEffect(() => {
        const ref = document.getElementById(`ref-${item}`);
        const width = ref?.offsetWidth;
        if (width) {
            setWidth(width * 0.8 );
            if (width > 195) {
                setGap(60)
            } else setGap(20);
        }
        const first = document.getElementById('arrowfirst');
        const third = document.getElementById('arrowthird');
        
        if (first) {
            const left = first.offsetLeft + 1;
            setFirst(left);
        }
        if (third) {
            const left = third.offsetLeft + 1;
            setSecond(left);
        }
    }, [])

    
    

    return (
        <div className="flex flex-col justify-end relative mt-[10%] h-[80%] text-white text-2xl w-[18%]">
            <div
                id={`ref-${item}`}
                className="mb-[0px] flex relative overflow-hidden flex-col-reverse h-[auto] max-h-[100%]"
                style={{ borderRadius: '15px' }}
            >
                <div
                    className="w-[100%] flex-shrink flex justify-center items-center bg-red-300"
                    style={{ height: `${db * 5.5}px` }}
                >
                    {db}
                </div>
                <div
                    className="w-[100%] flex-shrink flex justify-center items-center bg-purple-500"
                    style={{ height: `${back * 5.5}px` }}
                >
                    {back}
                </div>
                <div
                    className="w-[100%] flex-shrink flex justify-center items-center bg-blue-200"
                    style={{ height: `${front * 5.5}px` }}
                >
                    {front}
                </div>
            </div>
            {item === 'dev' && <ArrowFirst arbottom={arbottom} />}
            {item === 'test' && <TwoArrow arbottom={arbottom} />}
            {item === 'prod' && <ArrowFourth arbottom={arbottom} />}
            <div className="absolute text-base text-black bottom-[-45px] w-[20%] left-[40%]">
                {item}
            </div>
            {item === 'dev' && <Connection left={leftFirst} first={firstDiff} gap={gap} connection={connectionWidth}/>}
            {item === 'test' && <Connection left={leftSecond} second={secondDiff} gap={gap} connection={connectionWidth}/>}
        </div>
    );
}

function ArrowFirst({arbottom}: {arbottom: number}) {
                return (
                    <div id='arrowfirst'
                className="absolute w-[1px] left-[50%] bg-red-500  top-[-100px]"
                style={{ bottom: `${arbottom}px` }}
            ></div>
                )
}
function TwoArrow({arbottom}: {arbottom: number}) {
           return (
            <><div id='arrowsecond'
                className="absolute w-[1px] left-[30%] bg-green-500  top-[-100px]"
                style={{ bottom: `${arbottom}px` }}
            >
             <div className="absolute w-[16px] bg-transparent border-solid border-green-500 border-r-[2px] border-b-[2px] h-[16px] left-[-7px] bottom-[-2px] "
              style={{transform: 'rotate(45deg)'}}>

              </div>

            </div>
            
            <div id='arrowthird'
            className="absolute w-[1px] left-[70%] bg-red-500  top-[-100px]"
            style={{ bottom: `${arbottom}px` }}
        ></div></>
           )
}

function ArrowFourth({arbottom}: {arbottom: number}) {
                return (
                    <div id='arrowfourth'
                className="absolute w-[1px] left-[50%] bg-green-500  top-[-100px]"
                style={{ bottom: `${arbottom}px` }}
            >
                <div className="absolute w-[16px] bg-transparent border-solid border-green-500 border-r-[2px] border-b-[2px] h-[16px] left-[-7px] bottom-[-2px] " 
                style={{transform: 'rotate(45deg)'}}>

                </div>

            </div>
                )
}

function Connection({left, connection, gap, first, second }: { left: number, connection: number, gap: number, first? : number, second?: number}) {
    const diff = first || second || 0;
    const value = diff > 0 ? `+${diff}` : diff == 0 ? '    0' : ` - ${diff}`;
    return (
        
            <div className="absolute h-[1px] bg-red-500 top-[-100px] " style={{left: `${left}px`, width: `${connection + gap}px`}}>
                
                <div className="absolute left-[35%] top-[-10px] w-[65px] h-[35px] rounded-[14px] bg-red-500">
                <div className="absolute left-[5px] top-[4px] w-[20px] h-[20px] " style={{backgroundImage: `url('./top.png')`,
                    borderRadius: '15px', 
                    backgroundSize: '100% 100%',
                }} >

                </div>
                <span className="display-inline ml-[35px] text-[15px]">{value}</span>
                
                </div>


            </div>
        
    )
}