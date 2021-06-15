import React, {PureComponent} from "react";

class SearchBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange = (e) =>{
        this.props.onInStockChange(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Izlash" value={this.props.inputText}
                       onChange={this.handleFilterTextChange}/>
                <p>
                    <input type="checkbox" id="onlyInStock" name="onlyInStock" checked={this.props.inStockOnly}
                           onChange={this.handleInStockChange}/>
                    <label htmlFor="onlyInStock">Faqat borlari chiqadi</label>
                </p>
            </div>
        )
    }
}

export default SearchBar;