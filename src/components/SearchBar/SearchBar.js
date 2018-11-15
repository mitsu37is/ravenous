import React from 'react'
import './SearchBar.css'

const sorByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

function handleSortByChange(sortByOption) {
    this.setState({
        sortBy: sortByOption
    });
    this.handleSearch();
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleSearch() {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }

    renderSortByOption(sortByOptions) {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
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
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} required />
                    <input placeholder="Where?" onChange={this.handleLocationChange} required />
                </div>
                <div className="SearchBar-submit">
                    <button onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        );
    }
}
export default SearchBar;