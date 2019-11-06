import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
		.filter(directory => {
			return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<tr key={directory.id} onClick={() => {selectedUpdate(directory.id)}}>
					<td>{directory.code}</td>
					<td>{directory.name}</td>
				</tr>
			);
		});
		
		return <tbody>{buildingList}</tbody>;
	}
}

export default BuilingList;