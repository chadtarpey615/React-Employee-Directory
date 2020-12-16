import Table from "../layout/Table"
function TableHead(props) {
    return (
        
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date Of Birth</th>

                    </tr>
                </thead>
            </table>
        
    )
}

export default TableHead;