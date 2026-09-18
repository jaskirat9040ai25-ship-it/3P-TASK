function ContactForm() {
    function handleSubmit(event){
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        console.log(form.get("name"),form.get("email"));
    }
    return (
        <form onSubmit = {handleSubmit} className="max-w-sm space-y-3">
            <label htmlFor = "name">Name :</label>
            <input name="name" placeholder="your name" className="w-full rounded border px-3 py-2"/>
            <label htmlFor = "email" > Email :</label>
            <input name="name" placeholder="your email" className="w-full rounded border px-3 py-2"/>
            <button type="submit" className="rounded bg-teal-600 px-4 py-2 text-white">send</button>
        </form>
    );
    }
    export default ContactForm;