import React, { useEffect } from "react";

const Calendar = () => {
    const Cid = "M2U1ZWU4ZTlkOWE5NDUxZjYyMTE5ODMxY2MyM2EzOGI4ZDUzODA3MmMzNGFhZGRjMzE4NjBmMjNmY2M5N2MzMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

    // const fetchData = async () => {
    //     const res = await fetch(`https://calendar.google.com/calendar/ical/99d99fb9a767bf398453380b75b7587420aac0dbfa00f77158ec0d9096604be8%40group.calendar.google.com/private-ca5939412c0e27c2848a795491dc6fef/basic.ics`);
    //     // const data = await res.json();
    //     console.log(res);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <div>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FWarsaw&src=OTlkOTlmYjlhNzY3YmYzOTg0NTMzODBiNzViNzU4NzQyMGFhYzBkYmZhMDBmNzcxNThlYzBkOTA5NjYwNGJlOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=M2U1ZWU4ZTlkOWE5NDUxZjYyMTE5ODMxY2MyM2EzOGI4ZDUzODA3MmMzNGFhZGRjMzE4NjBmMjNmY2M5N2MzMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5&color=%234285F4"
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
            ></iframe>
        </div>
    );
};

export default Calendar;
