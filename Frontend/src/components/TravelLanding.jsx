import React, { useState } from 'react'
import '../styles/travel.css'

export default function TravelLanding({ onNavigate }) {
  const [search, setSearch] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [bookings, setBookings] = useState([])

  function handleSearch(e) {
    e.preventDefault()
    // simple placeholder behavior
    alert('Searching for: ' + search)
  }

  function handleBooking(e) {
    e.preventDefault()
    if (!search || !checkIn || !checkOut || !guests) {
      alert('Please complete the booking form')
      return
    }
    
    const id = Date.now()
    setBookings(prev => [...prev, { id, name: 'Guest', destination: search, checkIn, checkOut, guests }])
    alert('Booking confirmed for ' + search)
    setSearch('')
    setCheckIn('')
    setCheckOut('')
    setGuests(1)
  }

  const popular = ['Paris', 'Dubai', 'Bali', 'London', 'Maldives', 'Tokyo']
  const sampleHotels = [
    { id: 1, name: 'Hotel Aurora', rating: 4.6, price: '$120' },
    { id: 2, name: 'Seaside Resort', rating: 4.8, price: '$220' },
    { id: 3, name: 'City Inn', rating: 4.2, price: '$90' },
    { id: 4, name: 'Mountain Lodge', rating: 4.4, price: '$150' },
  ]

  return (
    <div className="travel-root">
      <header className="travel-header">
        <div className="travel-logo">Logo</div>
        <nav className="travel-nav">
          <button onClick={() => onNavigate && onNavigate('dashboard')}>Home</button>
          <button>Hotels</button>
          <button>Flights</button>
          <button>Contact</button>
        </nav>
      </header>

      <section className="travel-hero">
        <h1>Find Your Dream Destination</h1>
        <form className="hero-form" onSubmit={handleSearch}>
          <input placeholder="Search Destination" value={search} onChange={e => setSearch(e.target.value)} />
          <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
          <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
          <select value={guests} onChange={e => setGuests(Number(e.target.value))}>
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </section>

      <section className="travel-popular">
        <h2>Popular Destinations</h2>
        <div className="dest-list">
          {popular.map(p => (
            <button key={p} onClick={() => setSearch(p)} className="dest-btn">{p}</button>
          ))}
        </div>
      </section>

      <section className="travel-hotels">
        <h2>Hotels</h2>
        <div className="hotel-grid">
          {sampleHotels.map(h => (
            <div className="hotel-card" key={h.id}>
              <div className="hotel-image">Image</div>
              <div className="hotel-info">
                <div className="hotel-name">{h.name}</div>
                <div className="hotel-meta">Rating: {h.rating} · {h.price}</div>
                <button className="btn-primary">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="travel-booking">
        <h2>Booking Form</h2>
        <form className="booking-form" onSubmit={handleBooking}>
          <input placeholder="Full Name" />
          <input placeholder="Email" />
          <input placeholder="Destination" value={search} onChange={e => setSearch(e.target.value)} />
          <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
          <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
          <select value={guests} onChange={e => setGuests(Number(e.target.value))}>
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
          </select>
          <button type="submit" className="btn-primary">Confirm Booking</button>
        </form>

        {bookings.length > 0 && (
          <div className="bookings-list">
            <h3>Your Bookings</h3>
            <table className="job-table">
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Guests</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b.id}>
                    <td>{b.destination}</td>
                    <td>{b.checkIn}</td>
                    <td>{b.checkOut}</td>
                    <td>{b.guests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="travel-testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <blockquote>★★★★★ "Best travel experience"</blockquote>
          <blockquote>★★★★★ "Amazing hotels"</blockquote>
          <blockquote>★★★★★ "Easy booking process"</blockquote>
        </div>
      </section>

      <footer className="travel-footer">
        <div>About · Privacy Policy · Contact</div>
        <div>Social Links</div>
      </footer>
    </div>
  )
}
