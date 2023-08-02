import { goalsArray } from '/data.js'
//console.log(goalsArray)

const mainEl = document.querySelector("main")

document.addEventListener("click", function(e){
    // new uuid generated at start everytime
    // console.log(e.target.dataset.likeIcon) 
    if(e.target.dataset.likeIcon)  {
        handleLikeClick(e.target.dataset.likeIcon)
    }
    else if (e.target.dataset.commentIcon) {
        handleCommentClick(e.target.dataset.commentIcon)
    }
})


function renderAllGoals(goals) {
    mainEl.innerHTML = ``
    for (let i = 0; i < goals.length; i++) {
        renderEachGoal(goals[i], i)
    }
}

renderAllGoals(goalsArray)

function renderEachGoal(goalObject, id) { 
    let likeClass = ''
    if (goalObject.isLiked) {
        likeClass = 'liked' //change css rule
    }
    
    let viewCommentClass= ''
    if (goalObject.viewComment) {
        viewCommentClass = 'comments-view' 
    }
    
    let commentHTML = ""
    if (goalObject.commentsList.length > 0) {
        goalObject.commentsList.forEach(function(comment) {
            commentHTML += `
                <div class="comment-container">
                    <p class="comment-text">${comment.commentText}</p>
                    <p class="comment-name">${comment.name}</p>
                </div>
                `
        })
    }
    
    const post = `
        <div class="container-main">
            <img class="main-picture" src="${goalObject.picture}" alt="">
            <p class="main-info-goalscorer">${goalObject.goalscorer}</p>
            <p class="main-info-date">${goalObject.date}</h3>
            <p class="main-info-competition">${goalObject.competition}</h3>
            <p class="main-info-match">${goalObject.match}</p>
            <section class="icons-bar">
            <div class="icons-info">
                <i class="fa-regular fa-heart ${likeClass}" data-like-icon="${goalObject.uuid}"></i>
                <p class="likes-count">${goalObject.likes}</p>
                <i class="fa-regular fa-comment ${viewCommentClass}" data-comment-icon="${goalObject.uuid}"></i>
                <p class="comments-count">${goalObject.comments}</p>
            </div>
        </div>
        <div class="hidden" id="comment-${goalObject.uuid}">
            ${commentHTML}
        </div>
        `
     mainEl.innerHTML += post  
    //  console.log(goalsObject, id)
}


function handleLikeClick(goalId) {
    
    const targetGoalObj = goalsArray.filter(function(goal){
        return goal.uuid === goalId
    })[0]
    
    // targetGoalObj.likes++
    // console.log(targetGoalObj)
    
    // for (let i = 0; i < goalsArray.length; i++ ){
    //     if (goalsArray[i].uuid === goalId) {
    //         goalsArray[i].numLikes++
    //     }
    //     renderEachGoal(goalsArray[i], i)
    // }
    // console.log(goalsArray)
    
    if (targetGoalObj.isLiked) {
        targetGoalObj.likes--
    }
    else {
        targetGoalObj.likes++
    }
    targetGoalObj.isLiked = !targetGoalObj.isLiked // Flips the boolean
    
    renderAllGoals(goalsArray)
}


function handleCommentClick(commentId) {
    const targetGoalObj = goalsArray.filter(function(goal) {
        return goal.uuid === commentId
    })[0]
    
    targetGoalObj.viewComment = !targetGoalObj.viewComment
    
    renderAllGoals(goalsArray)
    
    if (targetGoalObj.viewComment) {
        document.getElementById(`comment-${commentId}`).classList.toggle("hidden")
    }
    
}

