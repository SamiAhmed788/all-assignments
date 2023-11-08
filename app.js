const inpt = document.querySelector('#inputlist')
const button = document.querySelector('ul')
const sub = document.querySelector('#submit')
const clear = document.querySelector('#clearall')

function sumbithandler() {
    let val = inpt.value
    const li =`    <li id=${val}>
    <h4>${val}</h4>
    <hr>
    <div class="listButton" >

    <span  id="edit" onclick="editHandler('${val}')"><i class="fa-solid fa-check"></i></span>
    <span style="color: red;" id="delete" onclick="deleteHandler('${val}')"><i class="fa-solid fa-xmark"></i></span>
    </div>
</li>


    `
    button.innerHTML+=li
    inpt.value=""
}

function editHandler(val) {
    const li = document.getElementById(val)
    inpt.value =li.children[0].textContent
    sub.innerHTML= "edit"
    sub.setAttribute('onclick', `newedithandler('${val}')`)
}

function deleteHandler(val) {
    console.log(val)
    const li = document.getElementById(val)
    console.log(li)
    button.removeChild(li)

}



function newedithandler(val) {
    const li = document.getElementById(val)
    li.children[0].innerHTML = inpt.value
    sub.textContent = "submit"
    sub.setAttribute('onclick', `sumbitHandler()`)
    inpt.value = ""
}



function clearhandler(val) {


}