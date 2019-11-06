import React from 'react';

class Search extends React.Component {
	filterUpdate = e => {
		//Here you will need to update the value of the filter with the value from the textbox
		this.props.filterUpdate(e.target.value)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		return (
			<form>
				<input 
					type="text"
					ref={value=>this.myValue=value}
					placeholder="Type to Filter"
					onChange={this.filterUpdate} 
				/>
			</form>
		);
	}
}
export default Search;