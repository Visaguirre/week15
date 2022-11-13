import React, {useState} from "react";

export const NewHouseForm = (props) => {
    const [name,setName] = useState('');
    const [area,setArea] = useState(undefined);

    const handleAreaInput = (e)=> {
        const int = parseInt(e.target.value,10);
        setArea(int >=0 ? int:'');
    }

    const onSubmit =(e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name,area});
            setName('');
            setArea('');
        } else{
            console.log('invalid inpuut')
        }
    };

    return (
        <div>
            <h4>Add a New Room</h4>
            <form onSubmit={onSubmit}>
                <input
                type = 'text'
                placeholder = 'name'
                onChange={(e)=>setName(e.target.value)}
                value = {name}
                />
                <input
                type='text'
                placeholder="area"
                onChange={handleAreaInput}
                value = {area}
                />
                <button type="submit">Add New Room</button>
            </form>
        </div>
    )
};