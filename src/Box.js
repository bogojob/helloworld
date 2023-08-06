import { useEffect, useState } from "react"
import { createUseStyles } from 'react-jss'
export const Box = () => {



    const [items, setItems] = useState([]);
    const fetchData = async () => {
        console.log('box fetchacalled');
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        setItems(await response.json());
    }



    useEffect(() => {
        /* fetch data solo la prima vaolta quando finisce da renderizzare il componente */
        console.log('box render');
        (async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            setItems(await response.json())
        })();
    }, [])


    return (
        <div>
            <ul>
                {<Child items={items} />}
            </ul>
            <button onClick={() => {
                let newItems = [...items, { "id": 200, "name": "paolo" }];

                setItems(newItems)
            }} >Add item to ITEMS</button>
            <button onClick={() => {
                const ar = document.querySelectorAll('li[class^="wrapper"]')[0].id;
                const newItems = items.filter(x => String(x.id) !== ar);
                setItems(newItems);
            }} >Remove item to ITEMS</button>

        </div>
    );
}

const Child = ({ items }) => {
    const useStyles = createUseStyles({
        wrapper: {
            backgroundColor: '#770099',
            color: '#ffffff'
        }
    });
    const classes = useStyles();
    const setBackColor = (evt) => {
        const k = document.querySelectorAll('li');

        for (const item of k) { /* clear  old selection */
            item.classList.remove(classes.wrapper)
        }
        (evt.currentTarget).classList.add(classes.wrapper);/* apply new selection */
    }


    return (
        <>
            {items.map((item) => (
               
                (<li class={item.id === 200 ?("pippo"):("pluto")} key={item.id} id={item.id} onClick={(event) => { console.log(event.target.id); setBackColor(event) }}>{item.name}</li>)
            )
            )}
        </>
    );

}