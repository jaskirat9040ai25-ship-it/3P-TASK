import React,{useState} from "react";
const STUDENTS= [
    { id:1,name:"rahul",branch:"ai",marks:90},
    { id:1,name:"rohit",branch:"ml",marks:80},
    { id:1,name:"suresh",branch:"ai",marks:70},
    { id:1,name:"mohit",branch:"ml",marks:60}
];
const intial_filter = {
    branch : "ALL",
    marks : 0,
    sortBy : "name",
};
export default function studentpanel() {
    const [Filters,SetFilters] = useState(intial_filter);
    //filter single handler
    function update(field,value){
        SetFilters((prev) => ({
            ...prev,// allow us to extend previous state.
            [field] : value,
        }));
    }
    // derive students based on  filters +sorting
    const visible = STUDENTS
    .filter((s) => Filters.branch == "ALL" || s.branch == Filters.branch)
    .filter((s) => s.marks >= Filters.marks)
    .toSorted((a,b) => {
        if (Filters.sortBy === "name"){
            return a.name.localeCompare(b.name);
        }else{
            return b.marks - a.marks;
        }
    })
    //render or return block
    return(
        <div className="max-w-lg mx-auto p-4 space-y-4 font-sans">
        <h2 className="text-xl font-bold text-blue-600">students directory</h2>
        {/* filters and sorting controls*/}
        <div>
            <button onClick={() => update("branch","ai")} className={`px-3- py-1 rounded text-sm border transition ${
                Filters.branch === "ALL"
                ? "bg-blue-600 text-white border-blue-600"
                :"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}>ai only</button>
            <button onClick={() => update("branch","ml")}>ml only</button>
            <button onClick={() => update("branch","ALL")}>both only</button>
            <button onClick={() => update("marks",60)}>marks 60 and above</button>
            <button onClick={() => update("sortBy","marks")}>sort by marks</button>
            <button onClick={() => SetFilters(intial_filter)}>reset</button>
        </div>
        </div>
    )
}