const Results = (props) => {
    const cleanString = (str) => {
        if(typeof str === 'string') {
            return str.replaceAll('<span class="searchmatch">', '').replaceAll('</span>', '');
        } else {
            return '';
        }
    }

    const results =  props.resultsList.map((result, index) => {
        return (
            <div className="item" index={index}>
                <div className="content">
                    <a className="header">{result.title}</a>
                    <div className="description">{cleanString(result.snippet)}...</div>
                </div>
            </div>
        );
    })
    
    return (
        <div className="ui list">
            {results}
        </div>
    );
}

export default Results;
