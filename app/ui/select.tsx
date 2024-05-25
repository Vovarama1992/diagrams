'use client';
const tests = ['OS Doors', 'OS Bombuntu', 'Mibre Office', 'LoWtEx', 'W$ POS'];
import { useState } from 'react';
import { useSearchParams, usePathname, useRouter  } from 'next/navigation';

export default function Select() {
    const [selectedTest, setTest ] = useState('OS Doors');
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSelect(test: string) {
        setTest(test);
        const testIndex = tests.indexOf(test) + 1;
        params.set('testIndex', String(testIndex));
        replace(`${pathname}?${params.toString()}`);
        
    }
    return (
        <p className="absolute text-[16px] lg:text-2xl left-[2px] lg:left-[20px] top-[10px]">
            Количество пройденных тестов <select onChange={(e) => handleSelect(e.target.value)}>
            {tests.map((test, index) => (
        <option value={test} key={index}>{test}</option>
    ))}
            </select>
            </p>
    )
}