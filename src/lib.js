

export const com = async () => {

    

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // const k = Math.random() * (10 - 0) + 0;
        // console.log(response[k].name);
    //console.log(JSON.stringify(await response.json()));
    


    const jsondata = await response.json();
    return jsondata;

}

