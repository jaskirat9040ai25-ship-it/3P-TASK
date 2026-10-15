function SaveButton() {
    function handleSave() {
        console.log("pretend we just saved the form");
    }
    return(
        <button  onClick={handleSave} className="rounded bg-teal-600 px-4 py-2 text-white">Save</button>
    );
}
export default SaveButton;