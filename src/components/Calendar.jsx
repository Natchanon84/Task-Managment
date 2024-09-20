import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // นำเข้าการจัดรูปแบบของปฏิทิน
import './calendar.css';

function CalendarComponent() {
    const [value, setValue] = useState(new Date());
    const [time, setTime] = useState('');

    const tileClassName = ({ date }) => {
        // เช็คว่าวันที่เป็นวันปัจจุบันหรือไม่
        if (date.toDateString() === new Date().toDateString()) {
            return 'today'; // คืนค่า class ถ้าวันที่เป็นวันปัจจุบัน
        }
    };

    // ฟังก์ชันอัปเดตเวลา
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-GB', { hour12: false })); // ใช้ 24 ชั่วโมง
        }, 1000);

        return () => clearInterval(interval); // ทำความสะอาดเมื่อคอมโพเนนต์ถูกลบ
    }, []);

    return (
        <div className='calendar-container'>
            <p className='select-day'>
                {value.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'long', // แสดงเดือนเป็นตัวหนังสือ
                    year: 'numeric',
                })}
            </p>
            <Calendar
                onChange={setValue}
                value={value}
                tileClassName={tileClassName}
                locale="en-US" // ตั้งค่าท้องถิ่นเพื่อเริ่มจากวันอาทิตย์
            />
            <div className='digital-clock'>
                <h3>{time}</h3> {/* แสดงเวลาในรูปแบบ HH:MM:SS */}
            </div>
        </div>
    );
}

export default CalendarComponent;
