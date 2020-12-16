import Wrapper from "../Wrapper/index"
function TableHead(props) {
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default TableHead;