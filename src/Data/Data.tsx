import { Response } from "../Components/interface/Entity";
const urlSistema = "https://opentdb.com/api.php";

export function getAllQuestions<T>(counter: number): Promise<Response<T[]>> {
    return fetch(`${urlSistema}?amount=${counter}`).then(res => res.json()
    .then(data => (typeof(data.count) !== 'undefined' && typeof(data.data) !== 'undefined') ? ({data: data.data, total:data.count}) : ({data, total: res.headers.get("count")})));
}