let page = 1
let qStr = ""

function handel(e){
    e.preventDefault()
    qStr = document.querySelector(".keres").value
    console.log(qStr);
    let url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=${page}&query=${qStr}`
    getData(url, render)
    
}
function render(data){
    let container = document.querySelector(".cards")
    data.results.forEach(e => {
        container.innerHTML += card(e)
    });
}
function card(e){
    return `
    <div class="w-[300px] h-[400] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 my-6">
        <a>
            <img class="rounded-t-lg h-[200px] w-[100%]"  src="${e.urls.small}" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${e.alt_description}</h5>
            </a>
                <a class="inline-flex w-[100%] items-end px-3 py-2 my-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    `
}

function changePage(e){
    document.querySelector(".cards").innerHTML = ""
    if(page > 1){
        if(e == ">") page++;
        if(e == "<") page--;
    }
    qStr = document.querySelector(".keres").value
    console.log(page);
    
    getData(`https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=${page}&query=${qStr}`, render)
}