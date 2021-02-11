function about() {
    tabSelector(["block", "none", "none", "none"])

}

function career() {
    tabSelector(["none", "block", "none", "none"])
}

function courses() {
    tabSelector(["none", "none", "block", "none"])
}

function projects() {
    tabSelector(["none", "none", "none", "block"])
}


function tabSelector(array) {
    let about = document.getElementById('about')
    let career = document.getElementById('career')
    let courses = document.getElementById('courses')
    let projects = document.getElementById('projects')

    about.style.display = array[0];
    career.style.display = array[1];
    courses.style.display = array[2];
    projects.style.display = array[3];
}

about()