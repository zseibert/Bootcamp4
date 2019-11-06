import React from 'react';
import Table from 'react-bootstrap/Table';
import Search from './components/Search';
import Credit from './components/Credit';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      listings: this.props.data
    };
  }

  addBuilding = entry => {
    // change variables
    entry.id = this.state.listings[this.state.listings.length - 1].id + 1;
    var listings = [...this.state.listings, entry]
    this.setState({
      listings: listings,
      selectedBuilding: entry.id
    })
  }

  removeBuilding = id => {
    var listings = this.state.listings.filter(entry => {return entry.id !== this.state.selectedBuilding})
    this.setState({
      listings: listings
    })
  }

  filterUpdate = value => {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate = id => {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  render() {
    return (
      <div className="bg">
        <h1 className="h1"> UF Directory App</h1>
        <h2 className="header"> Search: </h2>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Building</th>
                    </tr>  
                  </thead>
                  <BuildingList
                    data={this.state.listings}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    />
                </Table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.state.listings}
                selectedBuilding={this.state.selectedBuilding}
                removeBuilding={this.removeBuilding.bind(this)}
                />
                <div className="add"> Insert new building information here: </div>
                  <AddBuilding addBuilding={this.addBuilding.bind(this)}/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
