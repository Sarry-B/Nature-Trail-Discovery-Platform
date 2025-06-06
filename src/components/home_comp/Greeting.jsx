'use client';
import React, { useState } from 'react';
import { greeting } from '@/styles/tailwindSaved';
import Link from 'next/link';


const greetingText = {
    title: 'ברוכים הבאים לאתר בשבילי חיפה!',
    body1 : 'אתר זה הוקם כדי לשתף מסלולים עירוניים המקיפים את השכונות הרבות על רכס הכרמל. שבילים ומסלולים הטובלים בטבע ירוק, בפריחות צבעוניות, מאגרי מים, שרידים הסטורים, מערות ומה שבדרך.',
    body2 : 'לפעמים אנו שוכחים שהדברים הטובים באמת נמצאים ממש מתחת ליד הבית... זכרו לבקר אך גם לשמור על הטבע. בשבילנו, ובשביל עתיד ירוק!',
    body3 : 'מוזמנים להירשם ולהיות חלק מהקהילה!'

}

const Greeting = () => {
    
    const [opened, setOpened] = useState(true);


    return (
        <div dir='rtl' className={opened ? greeting.greeting_container : 'hidden'}>
            <div className='flex w-full'>
                <button onClick={() => setOpened(!opened)} className='text-black text-2xl text-end'>X</button>
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
            <h1 className={greeting.greeting_title}>{greetingText.title}</h1>
            <p className={greeting.greeting_text}>{greetingText.body1}</p>
            <p className={greeting.greeting_text}>{greetingText.body2}</p>
            <p className={greeting.greeting_text}>{greetingText.body3}</p>
            </div>
            <div className='flex justify-between pt-10  items-center w-[80%]'>
                <Link href={'/register'} className='bg-accent text-text text-xl rounded-lg p-2'>להרשמה</Link>
                <Link href={'/login'} className='bg-accent text-text text-xl rounded-lg p-2'>התחברות</Link>
            </div>    
        </div>        
    );
    }

export default Greeting;

