import React from "react";

class Search extends React.Component {
    state = { input : '' };

    onFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.input)
    }

    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <input 
                        type="text" 
                        placeholder="Search wikipedia"
                        value={this.state.input} 
                        onChange={e => this.setState({ input: e.target.value })} 
                    />
                </div>
                <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Search;