import React from 'react';
import './search-panel.css';

const SearchPanel = (onSearch) => {
    return (
        <form className="search-form">
            <button type="submit" className="search-button">
                <i className="fa fa-search" />
            </button>
            <input name="type" type="text" id="search" className="search-input"/>
        </form>
    );
};

export default SearchPanel;