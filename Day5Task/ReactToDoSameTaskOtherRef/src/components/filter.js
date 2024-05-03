import React from 'react';
import '../styles/filter.css'

export default function Filter({ changeView }) {
    return (
        <div className="filter">
            <label htmlFor="filter-todos">Filter: </label>
            <select onChange={changeView} name="filter-todos" id="filter-todos" className="filter">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    )
}