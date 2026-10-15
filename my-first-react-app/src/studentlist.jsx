
const student = [
    {id : 1, name : "aarav", branch : "AI"},
    {id : 2, name : "priya", branch : "AI"},
    {id : 3, name : "kabir", branch : "AI"}
];

function StudentList(){
    return(
        <table className="w-1/4 p-4 text-left border border-slate-800">
            <tbody className="divide-y divide-slate-200">
                {
                    student.map((s) => (
                        <tr key={s.id}>
                            <td className="py-2">{s.name}</td>
                            <td className="py-2">{s.branch}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default StudentList;
