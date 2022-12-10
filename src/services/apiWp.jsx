import axiosWp from "../utils/axiosWp";

const getAllPost = () => {
    return axiosWp.get(`/wp/v2/posts?_embed`)
}

const getThumbPost = (id) => {
    return axiosWp.get(`/wp/v2/posts/${id}?_embed`)
}

export { getAllPost, getThumbPost }