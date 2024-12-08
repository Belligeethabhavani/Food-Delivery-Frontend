import React from 'react';
import { Button, Table } from 'react-bootstrap';

function RegformDisplay({ data }) {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
            <td>Gender</td>
            <td>Update</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>
              <td>
                <Button variant="warning">Update</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default RegformDisplay;




/*import { Button, Table } from "react-bootstrap";

function RegformDisplay({data}){
    return(
<div>
 <Table>
    <thead>
        <tr>
            <td>
            Name
            </td>
            <td>
                Phone
            </td>
            <td>
                Gender
            </td>
            <td>
                Update
            </td>
        </tr>
    </thead>
    <tbody>
    {data.map((item, index) => (
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.gender}</td>
            <td>
                <Button variant="warning">Update</Button>
            </td>
        </tr>
    ))}
</tbody>
    </Table>   
</div>
    );
}
export default RegformDisplay; */