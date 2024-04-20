import config from "../util/config.js";
import HttpClient from "../models/HttpClient.js";

export const getAllTeachers = async () => {
    return await new HttpClient(config.api.baseURL).get('teachers');
}

export const getTeacherById = async (id) => {
    return await new HttpClient(config.api.baseURL).get('teachers', id)
}

export const createTeacher = async (data) => {
    return await new HttpClient(config.api.baseURL).add('teachers', data)
}

export const updateTeacherById = async (id, data) => {
    return await new HttpClient(config.api.baseURL).update('teachers', id, data)
}

export const deleteTeacherById = async (id) => {
    return await new HttpClient(config.api.baseURL).delete('teachers', id)
}