import React, { useState } from 'react';

function Form() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />

            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {/* Populate options from the availableTimes state */}
                {availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                ))}
            </select>

            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
            />

            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default Form;
