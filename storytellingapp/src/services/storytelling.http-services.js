import http from "./connections";

export const getStory= () => {
    return http.get('/stories/1');
}
