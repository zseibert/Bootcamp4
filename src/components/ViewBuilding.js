import React from 'react';
import RemoveBuilding from './RemoveBuilding';

// change all card commands, make simpler/different
// add id  and code
class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props
		const view = data

		.filter(directory => directory.id === selectedBuilding)
		.map(directory => {
			if(!directory.address) directory.address = 'N/A'
			if(!directory.coordinates) directory.coordinates = {latitude: 'N/A', longitude: 'N/A'}
			console.log(directory.coordinates);
			
			return (
				<div className="card">
					<h3 className="dh">{directory.name}</h3>
					<ul className="listings">
						<li className="listing">ID: {' '}{directory.id}</li>
						<li className="listing">Code: {' '}{directory.code}</li>
						<li className="listing">Address: {' '}{directory.address}</li>
						<li className="listing">Latitude: {' '}{directory.coordinates.latitude}</li>
						<li className="listing">Longitude: {' '}{directory.coordinates.longitude}</li>
					</ul>

				<tr key={directory.id} >
					<td onClick={() => this.props.removeBuilding(directory.id)}><RemoveBuilding></RemoveBuilding></td>
				</tr>
			</div>
			)
		})
		return (
			<div className="help">
				<p>
					<i>Click on a name to view more information.</i>
					{view}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;