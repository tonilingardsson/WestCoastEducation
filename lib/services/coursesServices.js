import config from "../util/config.js";
import HttpClient from "../models/HttpClient.js";

export const getAllCourses = async () => {
    return await new HttpClient(config.api.baseURL).get('courses');
}

export const getCourseById = async (id) => {
    return await new HttpClient(config.api.baseURL).get('courses', id)
}

export const createCourse = async (data) => {
    return await new HttpClient(config.api.baseURL).add('courses', data)
}

export const updateCourseById = async (id, data) => {
    return await new HttpClient(config.api.baseURL).update('courses', id, data)
}

export const deleteCourseById = async (id) => {
    return await new HttpClient(config.api.baseURL).delete('courses', id)
}