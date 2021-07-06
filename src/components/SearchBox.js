import React from 'react';

const SearchBox = ({ searchChange, refreshSel }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba shadow-5 br2"
                type="search"
                placeholder="Search..."
                onChange={searchChange}
            />
            <div style={{marginTop: "20px"}}>
                <button 
                    className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib white bg-transparent pointer"
                    onClick={refreshSel}
                >
                    <i className="fa fa-refresh"></i> Refresh Selection
                </button>
            </div>
        </div>
    );
}

export default SearchBox;
