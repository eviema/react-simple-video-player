import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state =  { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    // make the component a controlled one
                    value={this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
        // OR just write in a cleaner way:
        // <input onChange={event => console.log(event.target.value)} />
    }

    // event handler
    // naming convention: on/handle + element + event
    onInputChange(term) { 
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
