export interface Response<T> {
    data: T;
    total: string | null;
}

export interface IQuestions {
    response_code: number;
    results: IResult[];
}

export interface IResult {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}