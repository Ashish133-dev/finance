import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { DTable } from "./component/DTable";
import { MyForm } from "./component/MyForm";

function App() {
  const [list, setList] = useState([]);

  const addTransaction = (data) => {
    console.log(data);
    setList([...list, data]);
  };

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const tempArg = list.filter((itme, i) => i !== id);
      setList(tempArg);
    }
  };

  return (
    <div className="">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mt-5 title">Finance Tracker</h2>
          </Col>
        </Row>
        <hr />

        {/* form */}
        <MyForm addTransaction={addTransaction} />
        {/* table */}

        <DTable list={list} handleOnDelete={handleOnDelete} />
      </Container>
    </div>
  );
}

export default App;
