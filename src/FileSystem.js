import { useEffect, useState } from "react"
import { createUseStyles } from 'react-jss'
import { USERDATA } from "./jsonuser";
import { IDROOT } from './globals';

import './styles/filesystem.css';

const objMimeType = {
    'image/apng': 'nw-fm-tree-fileimage',
    'image/avif': 'nw-fm-tree-fileimage',
    'image/gif': 'nw-fm-tree-fileimage',
    'image/jpeg': 'nw-fm-tree-fileimage',
    'image/png': 'nw-fm-tree-fileimage',
    'image/svg+xml': 'nw-fm-tree-fileimage',
    'image/webp': 'nw-fm-tree-fileimage',
    'application/pdf': 'nw-fm-tree-filepdf',
    'none': 'nw-fm-tree-file'

}


const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkMime = (mimeType) => {

    let key = Object.keys(objMimeType).find((key) => (key === mimeType));
    if (key === undefined) { key = 'none' }
    return objMimeType[key];
}
const changeStyle = (event)=>{
    event.preventDefault();
   
        event.stopPropagation();
        let ct = event.currentTarget;
        let itemselected = document.querySelectorAll('.selected');
        if (itemselected.length > 0) {
            itemselected[0].classList.toggle('selected');
        }
        let p = ct.closest("[data]");/* prende il primo parente che ha la attributo data */
        const isDirectory = ct.hasAttribute("data") ? true : false;
        const isRoot = ct.hasAttribute("root") ? true : false;
        const isFile = isRoot ? false : true;
        let k = ct.querySelectorAll(":scope > span > span")[0];
        let q = ct.querySelectorAll(":scope > span > span > span")[0];

        if (isRoot) {
            ct.querySelector('span >span > span').classList.toggle('selected');
            let j = document.querySelectorAll('.opened');
            let jj = document.querySelectorAll('.nw-fm-tree-folder-opened');
            j.forEach(item => {
                item.classList.toggle('opened');
                //let uu = item.querySelector('li > span');

            });
            jj.forEach(item => {
                item.classList.toggle('nw-fm-tree-folder-opened');
            })
        }
        else {
            q.classList.toggle('selected');
            if (isDirectory) {
                k.classList.toggle('nw-fm-tree-folder-opened') /* change class for background-image folder */
                let p = ct.querySelectorAll(":scope > ul")[0];
                if (p !== undefined) {
                    p.classList.toggle('opened');
                }

            }
        }
    }

export const FileSystem = () => {


    


   
    const filesystemNodes = USERDATA.filesystem.nodes;

    const [items, setItems] = useState(filesystemNodes);

    useEffect(() => {
        /* fetch data solo la prima vaolta quando finisce da renderizzare il componente */
        console.log('box render');
        // (async () => {
        //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
        //     setItems(await response.json())
        // })();
    }, [])


    return (
        <div>
            {/* <ul >
                <li id={IDROOT} root="root" >
                    <span className="nw-fm-tree-item">
                        <span className="nw-fm-tree-root">
                            <span>space root</span>
                        </span>
                    </span>

                </li>
            </ul> */}

            {filesystemNodes.map(item => {
                let isDir = item.type === "directory" ? true : false;
                return (
                    <ul key={randomInteger(1, 500000)} id={randomInteger(1, 500000)} className="nw-fm-tree-item" onClick={(e)=>{console.log('target id = ',e.currentTarget.id);changeStyle(e)}}>
                        <li id={item.id} key={item.id} data={item.name} name={item.name} onClick={(e)=>{console.log('target id = ',e.currentTarget.id);changeStyle(e)}}>
                            <span className={isDir ? "nw-fm-tree-item disable" : "nw-fm-tree-item"} >
                                <span className={isDir ? "nw-fm-tree-folder" : checkMime(item.mime)}>
                                    <span>{item.name}</span>
                                </span>
                            </span>
                            {<Child items={item.childs} />}
                        </li>
                    </ul>)
            })


            }



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
            {items.map((item) => {
                let isDir = item.type === "directory" ? true : false;
                return (
                    <ul key={randomInteger(1, 500000)} id={randomInteger(1, 500000)} className="nw-fm-tree-item" onClick={(e)=>{console.log('target id = ',e.currentTarget.id);changeStyle(e)}}>
                        <li id={item.id} key={item.id} data={item.name} name={item.name} onClick={(e)=>{e.stopPropagation();console.log('target id = ',e.currentTarget.id);changeStyle(e)}}>
                            <span className={isDir ? "nw-fm-tree-item disable" : "nw-fm-tree-item"} >
                                <span className={isDir ? "nw-fm-tree-folder" : checkMime(item.mime)}>
                                    <span>{item.name}</span>
                                </span>
                            </span>
                            {<Child items={item.childs} />}
                        </li>
                    </ul>)
            })}
        </>
    );

}