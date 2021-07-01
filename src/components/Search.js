import React from "react";

class Search extends React.Component {
    state = { input : '' };

    onFormSubmit = event => {
        event.preventDefault();
        if (this.state.input) {
            this.props.onSearchSubmit(this.state.input);
        }
    }

    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div className="ui action input">
                            <input 
                                type="text" 
                                placeholder="Search wikipedia"
                                value={this.state.input} 
                                onChange={e => this.setState({ input: e.target.value })} 
                            />
                            <button className="ui button" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default Search;