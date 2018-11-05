import React from 'react'
import './SearchBar.css'

const sorByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

const getSortByClass = sortByOption => {
    if (this.state.sortBy === sortByOption) {
        return 'active';
    } else {
        return '';
    }
};

const handleSortByChange = sortByOption => {
    this.setState({
        sortBy: sortByOption
    });
};

const handleTermChange = e => {
    this.setState({
       term: e.target.value
    });
};

const handleLocationChange = e => {
    this.setState({
        location: e.target.value
    });
};

const handleSearch = e => {
    this.props.searchYelp(e.target.term, e.target.location, e.target.sortBy);
    e.preventDefault();
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
    }

    renderSortByOption(sortByOptions) {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={getSortByClass(sortByOptionValue)} onClick={handleSortByChange().bind(this, sortByOptionValue)}>{sortByOption}</li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOption(sorByOptions)}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={handleTermChange} />
                    <input placeholder="Where?" onChange={handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a href="https://mittsu-blog.com" onClick={handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;