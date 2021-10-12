const URL = "https://cdn.contentful.com/spaces/wzvjort7ry1s/environments/master/entries?access_token=-eiQG5lPuIZQKafnkI9odfjVMRJ_pvXnhLZ04XvKpC8&content_type=triviaq"

$.ajax(URL)
.then((data) => {
    console.log(data)
})



// Sample URL: https://cdn.contentful.com/spaces/{space_id}/environments/{environment_id}/entries?access_token={access_token}&content_type={content_type}

// URL with space id (wzvjort7ry1s) and access token, but missing content type https://cdn.contentful.com/spaces/wzvjort7ry1s/environments/master/entries?access_token=-eiQG5lPuIZQKafnkI9odfjVMRJ_pvXnhLZ04XvKpC8 

// Final URL with everything needed:  https://cdn.contentful.com/spaces/wzvjort7ry1s/environments/master/entries?access_token=-eiQG5lPuIZQKafnkI9odfjVMRJ_pvXnhLZ04XvKpC8&content_type=triviaq