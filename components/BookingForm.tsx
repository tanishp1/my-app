"use client";
import { services } from "@/data/site";
import { useState } from "react";

type Booking = {
    name: string;
    phone: string;
    services: string;
    date: string;
    time: string;
};

export default function BookingForm(){
    const [done, setDone] = useState<Booking | null>(null)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget)) as unknown as Booking;
        setDone(data);
    }

    if(done){
        return (
      <div className="card success">
        <h3> Booking Request Received!</h3>
        <p>
          Thank you <strong>{done.name}</strong>. We have booked{" "}
          <strong>{done.services}</strong> on <strong>{done.date}</strong> at{" "}
          <strong>{done.time}</strong>. We will call you on {done.phone} to confirm.
        </p>
      </div>
    );
    }
    return (
    <form className="form" onSubmit={handleSubmit}>
        <label>
            Full Name
            <input name="name" required/>
        </label>
        <label>
            Phone
            <input name="phone" type="tel" required/>
        </label>
        <label>
            Service
            <select name="service" required>
                {services.map((s)=> (
                    <option key={s.name}>{s.name}</option>
                ))}
            </select>
        </label>
         <div className="row">
        <label>
          Date
          <input name="date" type="date" required />
        </label>
        <label>
          Time
          <input name="time" type="time" required />
        </label>
      </div>
      <button className="btn" type="submit">Confirm Booking</button>
    </form>
)
}

