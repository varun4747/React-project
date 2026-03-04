import { useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useEffect } from "react";

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    department: string;
    designation: string;
    salary: number;
    city: string;
}


function PagenateCom() {

  const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
      const fetchEmployees = async () => {
        try {
          const response = await axios.get<Employee[]>("http://localhost:4000/Employees");
          setEmployees(response.data);
        } catch (error) {
          console.error("Error fetching employee data:", error);
        }
      };

      fetchEmployees();
    }, []);

  const itemsPerPage = 4;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentEmployees = employees.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(employees.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % employees.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container text-center">
        <h2>Employee Data</h2>
      </div>

      <div className="container row d-flex justify-content-center">
        {currentEmployees.map((emp) => (
          <div key={emp.id} className="card col-12 m-2" style={{ height: "16rem", width: "20rem" }}>
            <div className="card-body">
              <h5>{emp.firstName} {emp.lastName}</h5>
              <p><strong>Email:</strong> {emp.email}</p>
              <p><strong>Department:</strong> {emp.department}</p>
              <p><strong>Designation:</strong> {emp.designation}</p>
              <p><strong>Salary:</strong> ₹{emp.salary}</p>
              <p><strong>City:</strong> {emp.city}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <ReactPaginate
          breakLabel="*"
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </>
  );
}

export default PagenateCom;