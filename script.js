const accessKey="jLYWVGIK7LArGI2V9d0ritAoXSPkRPMXZDlkbdRgfOM"
const formEl=document.querySelector("form")
const inputEl=document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const ShowMore=document.getElementById("Show-More-Button")
const clientId = "Z57AygHmPrGHdEb9xuuqFM1-3fK3KzsjaZU_6ciyPms";
let inputData=""
let page=1;
  async function searchImages(){
    inputData=inputEl.Value;
    const photos = await axios.get(
      `https://api.unsplash.com/photos/random?count=5&client_id=${clientId}&query="nature"`
    );
    //  const url=(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`)
    const response=await fetch(url)

    const data=await response.json()

    const results=data.results
    if(page===1){
        searchResults.innerHTML=""
    }
   results.map((result)=>{
    const imageWrapper= document.createElement('div')
    imageWrapper.classList.add("search-result")
    const image=document.createElement('img')
    image.src=result.urls.small
    image.alt=result.alt_description
    const imagelink=document.createElement('a')
    imagelink.href=result.links.html
    imagelink.target="_blank"
    imagelink.textContent=result.alt_description

    imagelink.appendChild(image)
    imageWrapper.appendChild(imagelink)
    searchResults.appendChild(imageWrapper)


   })
   page++

   if(page>1){
    ShowMore.style.display="block"
   }
 }
 formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchImages()
 })

 ShowMore.addEventListener("click",()=>{
    searchImages()
 })