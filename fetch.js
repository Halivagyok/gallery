async function getData(url, render){
    const respose = await fetch(url)
    const data = await respose.json()
    render(data)
}