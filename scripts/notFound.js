function notFound(tag_id) {
    let container = document.querySelector(tag_id)
    container.innerHTML = `
        <div class="card p-2 ps-0 pe-0 pt-0 m-2 col-3" style="width:250px">
        <img src="./img/bg2.jpg" class="card-img-top img-fluid" alt="NotFound">
          <div class="card-body text-bg-dark text-center">
            <h5 class="card-title">No results to display</h5>
            <p class="card-text">Please, try with different words or filters</p>
        </div>
    `
}