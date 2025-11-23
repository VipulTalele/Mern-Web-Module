import React, { Component } from "react";
import EmpRow from "./EmpRow";

class EmpDataComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { id: 101, name: "Anita", salary: 25000 },
                { id: 200, name: "Bharati", salary: 30000 },
                { id: 100, name: "Uma", salary: 43000 }
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>Employee Data</h1>
                <table border="1">
                    <tbody>
                        {this.state.employees.map(emp => (
                            <EmpRow key={emp.id} emp={emp} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmpDataComponent;
